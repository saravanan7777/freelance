import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Acc() {
  return (
    <div className="p-6 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <h1 className="font-extrabold text-[40px] leading-[100%] tracking-[0.06em] text-[#819EB8] pb-4 font-montserrat">
          Why <br /> People4good?
        </h1>

        <Accordion type="single" collapsible defaultValue="step-1" className="space-y-4 rounded-2xl lg:max-w-[85%]">
          <AccordionItem
            value="step-1"
            className="rounded-xl border-0 data-[state=open]:border data-[state=open]:border-slate-400 data-[state=open]:rounded-lg data-[state=open]:p-6 p-6 bg-[#0D3558]"
          >
            <AccordionTrigger className="text-white hover:no-underline p-0 [&>svg]:hidden">
              <div className="flex items-center gap-4 text-left w-full">
                <span className="bg-[#0A2E4E] text-white px-3 py-1 rounded text-sm font-medium">Step 1</span>
                <span className="font-medium text-lg">Understand on the Ground</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 pt-4 pb-0">
              We begin with field visits to deeply understand the nonprofit&apos;s work, challenges, and current use of 
              technology.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="step-2"
            className="rounded-xl border-0 data-[state=open]:border data-[state=open]:border-slate-400 data-[state=open]:rounded-lg data-[state=open]:p-6 p-6 bg-[#0D3558]"
          >
            <AccordionTrigger className="text-white hover:no-underline p-0 [&>svg]:hidden">
              <div className="flex items-center gap-4 text-left w-full">
                <span className="bg-[#0A2E4E] text-white px-3 py-1 rounded text-sm font-medium">Step 2</span>
                <span className="font-medium text-lg">Understand on the Ground</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 pt-4 pb-0">
              We begin with field visits to deeply understand the nonprofit&apos;s work, challenges, and current use of 
              technology.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="step-3"
            className="rounded-xl border-0 data-[state=open]:border data-[state=open]:border-slate-400 data-[state=open]:rounded-lg data-[state=open]:p-6 p-6 bg-[#0D3558]"
          >
            <AccordionTrigger className="text-white hover:no-underline p-0 [&>svg]:hidden">
              <div className="flex items-center gap-4 text-left w-full">
                <span className="bg-[#0A2E4E] text-white px-3 py-1 rounded text-sm font-medium">Step 3</span>
                <span className="font-medium text-lg">Understand on the Ground</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 pt-4 pb-0">
              We begin with field visits to deeply understand the nonprofit&apos;s work, challenges, and current use of 
              technology.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="step-4"
            className="rounded-xl border-0 data-[state=open]:border data-[state=open]:border-slate-400 data-[state=open]:rounded-lg data-[state=open]:p-6 p-6 bg-[#0D3558]"
          >
            <AccordionTrigger className="text-white hover:no-underline p-0 [&>svg]:hidden">
              <div className="flex items-center gap-4 text-left w-full">
                <span className="bg-[#0A2E4E] text-white px-3 py-1 rounded text-sm font-medium">Step 4</span>
                <span className="font-medium text-lg">Understand on the Ground</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 pt-4 pb-0">
              We begin with field visits to deeply understand the nonprofit&apos;s work, challenges, and current use of 
              technology.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="step-5"
            className="rounded-xl border-0 data-[state=open]:border data-[state=open]:border-slate-400 data-[state=open]:rounded-lg data-[state=open]:p-6 p-6 bg-[#0D3558]"
          >
            <AccordionTrigger className="text-white hover:no-underline p-0 [&>svg]:hidden">
              <div className="flex items-center gap-4 text-left w-full">
                <span className="bg-[#0A2E4E] text-white px-3 py-1 rounded text-sm font-medium">Step 5</span>
                <span className="font-medium text-lg">Understand on the Ground</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 pt-4 pb-0">
              We begin with field visits to deeply understand the nonprofit&apos;s work, challenges, and current use of 
              technology.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
