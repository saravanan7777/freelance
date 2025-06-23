export default function About() {
    return (
      
      <div className="mx-auto w-full lg:max-w-7xl lg:h-[820px] p-8">
        <h1 className="font-bold text-[64px] text-center pb-4 leading-[100%] tracking-[0.02em] font-montserrat">
  <span className="text-[#819EB8]">ABOUT </span>
  <span className="text-[#0A2E4E]">PEOPLE4GOOD</span>
</h1>

         <div className="grid grid-cols-[60%_40%] gap-4 bg-[url('/a-bg.png')] bg-cover bg-center p-4 rounded-xl">
        {/* Left Half */}
        <div className="grid grid-cols-[40%_60%] grid-rows-2 gap-4 pr-4">
          {/* (1,1) Image */}
          <div className="h-[150px] lg:h-[300px] overflow-hidden rounded-[16px]">
            <img
              src="/a1.jpg"
              alt="Image 1"
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          {/* (1,2) Transparent White */}
          <div className="h-[150px] lg:h-[300px]  bg-white/22 border border-[#B6B6B669] rounded-[16px] p-3 ">
          <div className="font-redhat text-[18px] P-3 leading-[36px] tracking-[0.01em] text-[#0A2E4E]">
  <p className="font-normal pb-7">
    At <span className="font-bold">PEOPLE4GOOD</span>, we help nonprofits grow stronger with the right technology. We work with grassroots organizations across India, giving them simple digital tools to improve their work and reach more people.
  </p>
  <span className="font-semibold text-[24px] text-[#819EB8] ">AT </span>
  <span className="font-semibold  text-[24px] mt-2">PEOPLE4GOOD</span>
</div>

          </div>

          {/* (2,1) Transparent White */}
          <div className="h-[150px] lg:h-[300px]  bg-white/22 border border-[#B6B6B669] rounded-[16px] pr-4">
          <div className="font-redhat text-[18px] p-3 leading-[36px] tracking-[0.01em] text-[#0A2E4E]">
  <p className="font-normal pb-7">
   Our goal is to make tech easy and useful whether it’s for managing projects, sharing stories, or connecting with supporters.
  </p>
  <span className="font-semibold text-[24px]  text-[#819EB8] ">OUR </span>
  <span className="font-semibold  text-[24px] mt-2">GOAL</span>
</div>
          </div>
 
          {/* (2,2) Image */}
          <div className="h-[150px] lg:h-[300px] overflow-hidden rounded-[16px]">
            <img
              src="/a2.jpg"
              alt="Image 2"
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>
        </div>

        {/* Right Half */}
        <div className="grid grid-cols-[40%_60%] gap-4">
          {/* Left Column: 3 Rows */}
          <div className="grid grid-rows-3 gap-4 ">
            <div className="bg-white/22 h-[100px] lg:h-[200px] border border-[#B6B6B669]
 rounded-[16px] p-3"><div className="flex items-center justify-center h-full w-full">
 <div className="flex flex-col items-center text-center">
   <img src="/i1.png" alt="i1" className="mb-2" />
   <span className="font-redhat font-bold text-[20px] leading-[24px] tracking-[0.02em] text-[#819EB8]">
     24/7
   </span>
   <span className="font-redhat font-bold text-[20px] leading-[24px] tracking-[0.02em] text-[#0D0D0D]">
     Live Support
   </span>
 </div>
</div>
</div>
            <div className="bg-white/22 h-[100px] lg:h-[200px] border border-[#B6B6B669]
rounded-[16px] p-3"><div className="flex items-center justify-center h-full w-full">
<div className="flex flex-col items-center text-center">
  <img src="/i2.png" alt="i1" className="mb-2" />
  <span className="font-redhat font-bold text-[20px] leading-[24px] tracking-[0.02em] text-[#0D0D0D]">
    Quality Education
  </span>
</div>
</div>
</div>
            <div className="bg-white/22 h-[100px] lg:h-[200px] border border-[#B6B6B669]
 rounded-[16px] p-3"><div className="flex items-center justify-center h-full w-full">
 <div className="flex flex-col items-center text-center">
   <img src="/i3.png" alt="i1" className="mb-2" />
   <span className="font-redhat font-bold text-[20px] leading-[24px] tracking-[0.02em] text-[#0D0D0D]">
     Economy Growth
   </span>
 </div>
</div>
</div>
          </div>

          {/* Right Column: 2 Rows */}
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white/22 h-[150px] lg:h-[303px] rounded-[16px] border border-[#B6B6B669] p-3">
            <div className="font-redhat text-[18px] p-3 leading-[36px] tracking-[0.01em] text-[#0A2E4E]">
  <p className="font-normal pb-7">
  We also run workshops and volunteering programs to guide young people on how they can support social causes through technology.</p>
  <span className="font-semibold text-[24px]  text-[#819EB8] ">OUR </span>
  <span className="font-semibold  text-[24px]  mt-2">SUPPORT</span>
</div>
 </div>
            <div className="bg-white/22 h-[150px] lg:h-[303px] rounded-[16px] border border-[#B6B6B669] p-3">
            <div className="font-redhat text-[18px] p-3 leading-[36px] tracking-[0.01em] text-[#0A2E4E]">
  <p className="font-normal pb-7">
  Together, we’re building a future where every nonprofit is empowered, connected, and ready to make a bigger impact</p>
  <span className="font-semibold text-[24px]  text-[#819EB8] ">OUR </span>
  <span className="font-semibold text-[24px]  mt-2">FUTURE</span>
</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  