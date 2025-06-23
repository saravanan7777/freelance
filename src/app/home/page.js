import About from "@/components/About";
import { CarouselGrid } from "@/components/c-g";
import FooterSection from "@/components/footer";
import { InfiniteSliderHoverSpeed } from "@/components/slider";
import { Testimonials } from "@/components/testi";
import Why from "@/components/why";
export default function HomePage() {
    return (
      <div className="bg-[#E8F5FF] ">
        <About/>
        <Why/>
        <CarouselGrid/>
        <Testimonials/>
        <InfiniteSliderHoverSpeed/>
        <FooterSection/>
       
      </div>
    );
  }
  