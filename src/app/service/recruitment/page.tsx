import Recruitment from "@/components/page/services/recruitment/Recruitment";
import Ssw from "@/components/page/services/recruitment/Ssw";
import BreadCrumb from "@/components/page/shared/breadcrumb/BreadCrumb";

export default function page() {
    return (
        <div className="">
            <BreadCrumb />
            <Recruitment />
            <Ssw />
        </div>
    );
}
