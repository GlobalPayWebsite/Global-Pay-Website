import Footer from "@/components/layouts/footer/footer";
import AboutUs from "@/components/page/home/about/About";
import BannerCarousel from "@/components/page/home/BannerCarousel";
import CompanyProgress from "@/components/page/home/companyProgress/CompanyProgress";
import News from "@/components/page/home/news/News";
import OurServices from "@/components/page/home/ourServices/OurServices";
import Team from "@/components/page/home/team/Team";
import WhyChooseUs from "@/components/page/home/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <BannerCarousel />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <CompanyProgress />
      <Team />
      <News />
      <Footer />
    </div>
  );
}
