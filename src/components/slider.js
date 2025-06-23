import { InfiniteSlider } from "./ui/infinite-slider";

export function InfiniteSliderHoverSpeed() {
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <h2 className="text-[74px] text-[#0A2E4E] leading-[72px] tracking-[0%] font-bold font-Montserrat text-center pt-20 pb-10">
  <span className="text-[#819EB8]">Our </span>Partners
</h2>
    <InfiniteSlider speedOnHover={20} gap={24}>
      <div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">Donor Management System</span>
</div>
<div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">Volunteer Management System</span>
</div>
<div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">Data Collection</span>
</div>
<div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">HRMS</span>
</div>


    </InfiniteSlider>
    <InfiniteSlider speedOnHover={20} gap={24} className="pt-10" reverse={true}>
      <div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">POS - Inventory Management</span>
</div>
<div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">Nonprofit Website Creation</span>
</div>
<div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">Data Visualisation</span>
</div>
<div className="flex items-center gap-4 px-[30px] py-[20px] rounded-[8px] w-fit h-fit bg-white shadow">
  <div className="w-6 h-6 rounded-full bg-[#D3D3D3]" /> {/* Grey circle */}
  <span className="text-[#000000] text-base font-medium">Meta for Non Profit</span>
</div>



    </InfiniteSlider>
    </div>
  );
}
