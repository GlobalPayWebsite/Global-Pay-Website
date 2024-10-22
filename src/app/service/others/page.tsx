import EducationalConsultant from "@/components/page/services/others/EducationalConsultant";
import RealStateConsultant from "@/components/page/services/others/RealStateConsultant";
import BreadCrumb from "@/components/page/shared/breadcrumb/BreadCrumb";

export default function Page() {
    return (
        <div className="">
            <BreadCrumb />
            <RealStateConsultant />
            <EducationalConsultant />
        </div>
    );
}