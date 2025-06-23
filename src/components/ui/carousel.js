"use client"
import { Children, createContext, useContext, useEffect, useRef, useState } from "react"
import { motion, useMotionValue } from "motion/react"
import { cn } from "@/lib/utils"

const CarouselContext = createContext(undefined)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within an CarouselProvider")
  }
  return context
}

function CarouselProvider({ children, initialIndex = 0, onIndexChange, disableDrag = false }) {
  const [index, setIndex] = useState(initialIndex)
  const [itemsCount, setItemsCount] = useState(0)

  const handleSetIndex = (newIndex) => {
    setIndex(newIndex)
    onIndexChange?.(newIndex)
  }

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

function Carousel({ children, className, initialIndex = 0, index: externalIndex, onIndexChange, disableDrag = false }) {
  const [internalIndex, setInternalIndex] = useState(initialIndex)
  const isControlled = externalIndex !== undefined
  const currentIndex = isControlled ? externalIndex : internalIndex

  const handleIndexChange = (newIndex) => {
    if (!isControlled) {
      setInternalIndex(newIndex)
    }
    onIndexChange?.(newIndex)
  }

  return (
    <CarouselProvider initialIndex={currentIndex} onIndexChange={handleIndexChange} disableDrag={disableDrag}>
      <div className={cn("group/hover relative", className)}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  )
}

function CarouselIndicator({ className, classNameButton }) {
  const { index, itemsCount, setIndex } = useCarousel()

  return (
    <div className={cn("absolute bottom-0 z-10 flex w-full items-center justify-center", className)}>
      <div className="flex space-x-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to page ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-opacity duration-300",
              index === i ? "bg-zinc-950 dark:bg-zinc-50" : "bg-zinc-900/50 dark:bg-zinc-100/50",
              classNameButton,
            )}
          />
        ))}
      </div>
    </div>
  )
}

function CarouselContent({ children, className, transition }) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel()
  const [visibleItemsCount, setVisibleItemsCount] = useState(1)
  const dragX = useMotionValue(0)
  const containerRef = useRef(null)
  const itemsLength = Children.count(children)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter((entry) => entry.isIntersecting).length
      setVisibleItemsCount(visibleCount)
    }, options)

    const childNodes = containerRef.current.children
    Array.from(childNodes).forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [children, setItemsCount])

  useEffect(() => {
    if (!itemsLength) {
      return
    }

    setItemsCount(itemsLength)
  }, [itemsLength, setItemsCount])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -10 && index < itemsLength - 1) {
      setIndex(index + 1)
    } else if (x >= 10 && index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <motion.div
      drag={disableDrag ? false : "x"}
      dragConstraints={
        disableDrag
          ? undefined
          : {
              left: 0,
              right: 0,
            }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={{
        x: disableDrag ? undefined : dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: "spring",
          duration: 0.2,
        }
      }
      className={cn("flex items-center", !disableDrag && "cursor-grab active:cursor-grabbing", className)}
      ref={containerRef}
    >
      {children}
    </motion.div>
  )
}

function CarouselItem({ children, className }) {
  return <motion.div className={cn("w-full min-w-0 shrink-0 grow-0 overflow-hidden", className)}>{children}</motion.div>
}

export function CarouselNavigation({ className, alwaysShow }) {
  const { index, setIndex, itemsCount } = useCarousel()
  const canPrevious = index > 0
  const canNext = index < itemsCount - 1

  if (!alwaysShow && !canPrevious && !canNext) {
    return null
  }

  return (
    <div className={cn("absolute top-1/2 z-10 flex w-full -translate-y-1/2 items-center justify-between", className)}>
      <button
        aria-label="Previous"
        onClick={() => setIndex(index - 1)}
        disabled={!canPrevious}
        className={cn(
          "rounded-full p-1 transition-colors disabled:opacity-50 disabled:hover:bg-transparent",
          canPrevious
            ? "bg-zinc-900/20 hover:bg-zinc-900/50 dark:bg-zinc-100/20 dark:hover:bg-zinc-100/50"
            : "opacity-50",
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        aria-label="Next"
        onClick={() => setIndex(index + 1)}
        disabled={!canNext}
        className={cn(
          "rounded-full p-1 transition-colors disabled:opacity-50 disabled:hover:bg-transparent",
          canNext ? "bg-zinc-900/20 hover:bg-zinc-900/50 dark:bg-zinc-100/20 dark:hover:bg-zinc-100/50" : "opacity-50",
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export { Carousel, CarouselContent, CarouselIndicator, CarouselItem, useCarousel }
