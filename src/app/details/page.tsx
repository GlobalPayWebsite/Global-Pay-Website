
import Details from "@/components/page/shared/details/Details";
import { DetailType } from "@/typing";



export default async function page({ searchParams }: { searchParams: { item: string } }) {
    const data = JSON.parse(searchParams?.item as string);
    const details = data?.details as DetailType;
    const detailsList = data?.detailsList as DetailType[];

    return (
        <Details details={details} detailsList={detailsList} />
    )
}

