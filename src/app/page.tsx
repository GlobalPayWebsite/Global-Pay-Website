import BannerCarousel from "@/components/page/home/BannerCarousel";
import OurServices from "@/components/page/home/ourServices/OurServices";
import WhyChooseUs from "@/components/page/home/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <BannerCarousel />
      <OurServices />
      <WhyChooseUs />
    </div>
  );
}
