"use client"

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { useCarousel } from "./ui/carousel"
import { useState, useEffect } from "react"
import CircleCard from "./circlecard"
import { TypewriterEffect } from "./ui/typewriter-effect"
export function CarouselGrid() {
  // Create 12 items to demonstrate pagination (2 pages of 6 items each)
  const items = Array.from({ length: 12 }, (_, i) => i + 1)
  const [isHovered, setIsHovered] = useState(false)
  const words = [
    {
      text: "www.",
      className: "font-redhat font-medium text-[20px]  text-[#425166]",
    },
    {
      text: "people4good",
      className: "font-redhat font-medium text-[20px] text-[#425166]",
    },
    {
      text: ".in",
      className: "font-redhat font-medium text-[20px] text-[#425166]",
    },
  ];
  

  return (

    <div className="max-w-7xl pb-8 pt-20 mt-10 mx-auto rounded-xl bg-white">
        <h1 className="text-center font-montserrat font-bold text-[60px] leading-[72px] tracking-[0%]">
  <span className="text-[#819EB8]">Tech For </span>
  <span className="text-[#0A2E4E]">Non Profit</span>
</h1>
<p className="text-center font-redhat text-[20px] leading-[36px] tracking-[0%]">
  Your NGO’s one-stop solution for all tech needs.{" "} <br/>
  <span className="font-bold">Contact us today!</span>
</p>
<div className="w-[540px] h-[64px] rounded-[12px] mx-auto my-8 border border-gray-300 flex flex-row items-center px-4 gap-4">
  <img
    src="search.png"
    alt="icon"
    className="w-10 h-10 object-cover rounded-full"
  />
  <div className="text-[#425166] pb-4">
  
  <TypewriterEffect words={words} />
  </div>
</div>


    <div
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel>
        <AutoPlayController isHovered={isHovered} />
        <CarouselContent className="grid-carousel">
          {/* Group items into sets of 6 */}
        
          <CarouselItem className="p-4">
  <div className="grid grid-cols-3 gap-4 h-">
    <CircleCard
      icon="t1.png"
      title="Item One"
      description="This is item one"
    />
    <CircleCard
      icon="t2.png"
      title="Item Two"
      description="This is item two"
    />
    <CircleCard
      icon="t3.png"
      title="Item Three"
      description="This is item three"
    />
     <CircleCard
      icon="t4.png"
      title="Item One"
      description="This is item one"
    />
    <CircleCard
      icon="t5.png"
      title="Item Two"
      description="This is item two"
    />
    <CircleCard
      icon="t6.png"
      title="Item Three"
      description="This is item three"
    />
    {/* Add more <CircleCard /> as needed */}
  </div>
</CarouselItem>
<CarouselItem className="p-4">
  <div className="grid grid-cols-3 gap-4 ">
    <CircleCard
      icon="https://via.placeholder.com/100"
      title="Item One"
      description="This is item one"
    />
    <CircleCard
      icon="https://via.placeholder.com/100"
      title="Item Two"
      description="This is item two"
    />
    <CircleCard
      icon="https://via.placeholder.com/100"
      title="Item Three"
      description="This is item three"
    />
     <CircleCard
      icon="https://via.placeholder.com/100"
      title="Item One"
      description="This is item one"
    />
    <CircleCard
      icon="https://via.placeholder.com/100"
      title="Item Two"
      description="This is item two"
    />
    <CircleCard
      icon="https://via.placeholder.com/100"
      title="Item Three"
      description="This is item three"
    />
    {/* Add more <CircleCard /> as needed */}
  </div>
</CarouselItem>
          
        </CarouselContent>

        {/* Custom Progress Indicator */}
        <div className="flex justify-center mt-8">
          <ProgressIndicator />
        </div>

      
      </Carousel>
    </div>
    </div>
  )
}

// Custom Progress Indicator Component
function ProgressIndicator() {
  const { index } = useCarousel()

  return (
    <div className="flex items-center space-x-2">
      {index === 0 ? (
        // Page 1: Full bar on left, grey circle on right
        <>
          <div className="w-8 h-1 bg-[#0A2E4E]  rounded-full transition-all duration-500" />
          <div className="w-2 h-2 bg-gray-400 rounded-full transition-all duration-500" />
        </>
      ) : (
        // Page 2: Grey circle on left, full bar on right
        <>
          <div className="w-2 h-2 bg-gray-400 rounded-full transition-all duration-500" />
          <div className="w-8 h-1 bg-[#0A2E4E] rounded-full transition-all duration-500" />
        </>
      )}
    </div>
  )
}

// AutoPlay controller component
function AutoPlayController({ isHovered }) {
  const { index, setIndex, itemsCount } = useCarousel()

  useEffect(() => {
    if (isHovered || itemsCount === 0) return

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < itemsCount - 1) {
          return prevIndex + 1
        } else {
          return 0 // Loop back to first page
        }
      })
    }, 5000) // 10 seconds

    return () => clearInterval(interval)
  }, [isHovered, itemsCount, setIndex])

  return null
}

// NextButton component


