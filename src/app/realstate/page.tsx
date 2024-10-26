
import Details from "@/components/page/shared/details/Details";
import { DetailType } from "@/typing";
import { realsStateDataList } from "@/utils/data/services/realsStateData";

export default async function page({ searchParams }: { searchParams: { id: string } }) {
    const dataList = realsStateDataList as DetailType[];
    const details = dataList?.find(item => item._id === searchParams?.id) as DetailType;
    return (
        <div className="m-0 p-0 box-border">
            <Details details={details} detailsList={dataList} pageType="realstate" />
        </div>
    )
}

