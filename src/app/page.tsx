import AboutUs from "@/components/page/shared/about/About";
import BannerCarousel from "@/components/page/home/banner/BannerCarousel";
import CompanyProgress from "@/components/page/home/companyProgress/CompanyProgress";
import News from "@/components/page/home/news/News";
import OurServices from "@/components/page/shared/ourServices/OurServices";
import Team from "@/components/page/shared/team/Team";
import WhyChooseUs from "@/components/page/home/whyChooseUs/WhyChooseUs";

export default function Page() {
  return (
    <div>
      <BannerCarousel />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <CompanyProgress />
      <Team />
      <News />
    </div>
  );
}
