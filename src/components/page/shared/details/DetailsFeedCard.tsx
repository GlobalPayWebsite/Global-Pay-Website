"use client";

import { DetailType, PageType } from '@/typing';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
interface DetailsFeedCardProps {
    details: DetailType;
    pageType: PageType;
}

const DetailsFeedCard = ({ details, pageType }: DetailsFeedCardProps) => {
    const { t } = useTranslation();
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className='w-full'>
            <div className='w-full flex flex-col sm:flex-row items-start justify-between gap-5'>
                <div className="imageWrapper flex-1 w-full">
                    <Image unoptimized src={details?.image || "/assets/details1.jpg"} height={200} width={200} className='w-full sm:max-w-[250px] sm:max-h-[150px]' alt="details1" />
                </div>
                <div className='flex flex-col gap-3 flex-1 w-full'>
                    <div>
                        <h2 className='text-md sm:text-xl xl:text-sm font-semibold'>{toggleLanguage({
                            engTxt: details?.title || "",
                            japTxt: details?.title_jp || ""
                        }) || ""}</h2>
                        {details?.subtitle && <p className='text-gray-500 text-xs'>{details?.subtitle}</p>}
                    </div>
                    <Link href={{
                        pathname: `/${pageType}`, query: {
                            id: details?._id || ""
                        }
                    }}>
                        <button className="text-black border gap-2 border-blue-500 hover:border-green-500 rounded-md px-5 py-1 text-sm">
                            <span>{t("Read More")}</span>
                        </button>
                    </Link>
                    {details?.isNews && <div className='text-yellow-600'>{details?._createdAt?.toString() || ""}</div>}
                </div>
            </div>
        </div>


    )
}

export default DetailsFeedCard