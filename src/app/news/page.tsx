
import Details from "@/components/page/shared/details/Details";
import { DetailType } from "@/typing";
import { newsList } from "@/utils/data/news/newsData";

export default async function page({ searchParams }: { searchParams: { id: string } }) {
    const news = newsList as DetailType[];
    const details = news?.find(item => item._id === searchParams?.id) as DetailType;
    return (
        <div className="m-0 p-0 box-border">
            <Details details={details} detailsList={news} pageType="news" />
        </div>
    )
}

