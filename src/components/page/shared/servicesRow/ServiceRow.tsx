"use client";

import React from 'react';
import "./card.css";
import Image from 'next/image';
import { DetailType } from '@/typing';
import Link from 'next/link';

interface ServiceCardProps {
    details: DetailType;
    detailsList: DetailType[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ details, detailsList }) => {
    return (
        <Link
            href={{
                pathname: `/details`,
                query: {
                    item: JSON.stringify({
                        details,
                        detailsList
                    })
                },
            }}
            className={`relative w-full h-full mb-10 projcard rounded-lg bg-white group border-gray-300  hover:-translate-y-1 transition-all ease-in-out`}>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-gray-600 to-transparent opacity-5"></div>
            <div className="relative h-full flex flex-col sm:flex-row">
                <div className='hidden sm:block rounded-lg h-[200px] sm:h-full w-full sm:w-[200px] overflow-hidden projcard-img-box'>
                    <Image unoptimized height={200} width={200} className="h-full w-full object-cover object-center transform transition-transform duration-200 group-hover:scale-105 group-hover:rotate-1" src={details?.image || ""} alt={details?.title || ""} />
                </div>
                <div className='sm:hidden rounded-lg h-[200px] sm:h-full w-full sm:w-[200px] overflow-hidden'>
                    <Image unoptimized height={200} width={200} className="h-full w-full object-cover object-center transform transition-transform duration-200 group-hover:scale-105 group-hover:rotate-1" src={details?.image || ""} alt={details?.title || ""} />
                </div>
                <div className="p-5 flex-1">
                    <h2 className="text-2xl font-semibold">{details?.title || ""}</h2>
                    <h3 className="text-gray-500 mb-4">{details?.subtitle || ""}</h3>
                    <div className={`w-12 h-1 group-hover:w-20 transition-all delay-75 rounded-full bg-theme mb-4`}></div>
                    <p className="text-gray-700 text-sm line-clamp-4 overflow-hidden">{details?.description || ""}</p>
                </div>
            </div>
        </Link>
    );
};



interface ServiceRowProps {
    title: string;
    description: string;
    serviceData: DetailType[];
    bg?: boolean;
}

const ServiceRow: React.FC<ServiceRowProps> = ({ title, description, serviceData, bg = false }) => {
    return (
        <div className={`flex flex-col box-container py-[64px] ${bg && "bg-background"}`}>
            <div className='flex flex-col items-center w-full'>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3 text-theme">{title}</h2>
                <p className="mb-8 max-w-[720px]">
                    {description}
                </p>
            </div>
            <div className={`grid grid-cols-1 ${serviceData.length > 1 ? "lg:grid-cols-2" : ""} gap-10`}>
                {serviceData?.map((item, index) => (
                    <ServiceCard
                        key={index}
                        details={item}
                        detailsList={serviceData}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceRow;
