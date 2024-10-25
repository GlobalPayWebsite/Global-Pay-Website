import AboutUs from "@/components/page/shared/about/About";
import BannerCarousel from "@/components/page/home/banner/BannerCarousel";
import CompanyProgress from "@/components/page/home/companyProgress/CompanyProgress";
import News from "@/components/page/home/news/News";
import OurServices from "@/components/page/shared/ourServices/OurServices";
import WhyChooseUs from "@/components/page/home/whyChooseUs/WhyChooseUs";
import CeoMessage from "@/components/page/home/ceomessage/Ceo";

export default function Page() {
  return (
    <div className="m-0 p-0 box-border">
      <BannerCarousel />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <CompanyProgress />
      <CeoMessage />
      <News />
    </div>
  );
}
