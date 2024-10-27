"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import Image from 'next/image'
import React from 'react'
import IntroCard from './InfoCard';
import { DetailType, PageType } from '@/typing';
import DetailsFeedCard from './DetailsFeedCard';



interface DetailsProps {
    details: DetailType;
    detailsList: DetailType[];
    pageType: PageType;
}
const Details = ({ details, detailsList, pageType }: DetailsProps) => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <>
            <section className='box-container py-[64px]'>
                <div className={`flex flex-col lg:flex-row items-start justify-center gap-10`}>
                    <div className={`w-full flex-1`}>
                        <div className='pb-5'>
                            <div className='flex flex-col justify-center gap-1'>
                                <h2 style={{ margin: 0 }} className='my-2 text-4xl font-semibold'>
                                    {toggleLanguage({ engTxt: details?.title, japTxt: details?.title_jp }) || ""}
                                </h2>
                                {details?.subtitle && <p className='text-gray-500'>{details?.subtitle}</p>}
                            </div>
                            <div className='mt-5 flex flex-col items-start justify-between gap-5'>
                                <IntroCard showDate={details?.isNews} date={details?._createdAt?.toString() || ""} title={toggleLanguage({
                                    engTxt: details?.category || "",
                                    japTxt: details?.category_jp || ""
                                }) as string || ""} />
                            </div>
                        </div>
                        <div className='w-full'>
                            <Image
                                src={details?.image || ""}
                                loading='lazy'
                                height={200}
                                width={200}
                                className='w-full max-h-[550px]  aspect-video'
                                alt="details1"
                                unoptimized={true}
                            />
                        </div>
                        <div className='flex flex-col gap-5 mt-5'>
                            <div className='flex flex-col gap-5'>
                                <p>
                                    {toggleLanguage({
                                        engTxt: details?.description || "",
                                        japTxt: details?.description_jp || ""
                                    })}
                                </p>
                            </div>

                            {details?.extraImage &&
                                <div className='imgWrapper w-full'>
                                    <Image
                                        src={details?.extraImage}
                                        loading='lazy' alt="image"
                                        height={200}
                                        width={200}
                                        className='w-full h-full max-h-[300px]'
                                        unoptimized
                                    />
                                </div>
                            }

                            {details?.extraDescription && <div className='flex flex-col gap-5'>
                                <p>
                                    {toggleLanguage({
                                        engTxt: details?.extraDescription || "",
                                        japTxt: details?.extraDescription_jp || ""
                                    }) || ""}
                                </p>
                            </div>}

                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center justify-between gap-5 sm:gap-3 flex-1'>
                        <div className='w-full mb-5'>
                            {detailsList?.length > 1 && <h1 className='text-3xl font-semibold'>{toggleLanguage({ i18Txt: "Related Topics" })}</h1>}
                        </div>
                        <div className=" lg:max-h-[700px] overflow-y-auto w-full flex flex-col items-center justify-between gap-5 sm:gap-3 flex-1">
                            {detailsList?.filter(item => item._id !== details?._id)?.map((item) => (
                                <DetailsFeedCard
                                    key={item?._id?.toString()}
                                    details={item}
                                    pageType={pageType}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details