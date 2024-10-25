import Immigration from "@/components/page/services/immigration/Immigration";
import BreadCrumb from "@/components/page/shared/breadcrumb/BreadCrumb";

export default function page() {
    return (
        <div className="m-0 p-0 box-border">
            <BreadCrumb />
            <Immigration />
        </div>
    );
}
