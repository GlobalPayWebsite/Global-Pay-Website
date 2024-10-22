import AboutUs from "@/components/page/shared/about/About";
import BreadCrumb from "@/components/page/shared/breadcrumb/BreadCrumb";
import OurServices from "@/components/page/shared/ourServices/OurServices";
import Team from "@/components/page/shared/team/Team";

export default function Page() {
    return (
        <div className="">
            <BreadCrumb />
            <AboutUs />
            <OurServices />
            <Team />
        </div>
    );
}