
import Details from "@/components/page/shared/details/Details";
import { DetailType } from "@/typing";
import { recruitmentDataList } from "@/utils/data/services/recruitmentData";

export default async function page({ searchParams }: { searchParams: { id: string } }) {
    const dataList = recruitmentDataList as DetailType[];
    const details = dataList?.find(item => item._id === searchParams?.id) as DetailType;
    return (
        <div className="m-0 p-0 box-border">
            <Details details={details} detailsList={dataList} pageType="recruitment" />
        </div>
    )
}

