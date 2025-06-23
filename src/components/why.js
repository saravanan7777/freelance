import Page from "./g";
import Acc from "./accordion";
export default function Why() {
    return (
      <div className="w-full lg:max-w-7xl mx-auto rounded-2xl h-[670px] bg-[#0A2E4E] flex">
        {/* Left column (40%) — content pending */}
        <div className="w-[45%] p-4">
            <Acc/>
        </div>
  
        {/* Right column (60%) */}
        <div className="w-[55%] relative rounded-2xl bg-[#0A2E4E]">
          {/* Vertical grid lines with increased spacing */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #2A4E6E 1px, transparent 1px)`,
              backgroundSize: '60px 100%',
            }}
          />
  
          {/* Tighter horizontal grid lines only in middle 90% area */}
          <div className="absolute top-[15%] bottom-[5%] left-0 right-0 z-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-[#2A4E6E]"
                style={{
                  top: `${(i + 1) * 10}%`,
                }}
              />
            ))}
          </div>
  
          {/* Foreground content */}
          <div className="relative z-10 p-4 h-full">
            <Page/>
          </div>
        </div>
      </div>
    );
  }
  