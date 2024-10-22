"use client";

import React from 'react';
import "./card.css";

interface ServiceCardData {
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    color: string;
}

const ServiceCard: React.FC<ServiceCardData> = ({ title, subtitle, description, imgSrc }) => {
    return (
        <div className={`relative w-full h-full mb-10 projcard rounded-lg bg-white group border-gray-300  hover:-translate-y-1 transition-all ease-in-out`}>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-gray-600 to-transparent opacity-5"></div>
            <div className="relative h-full flex flex-col sm:flex-row">
                <div className='rounded-lg h-[200px] sm:h-full w-full sm:w-[200px] overflow-hidden projcard-img-box'>
                    <img className="h-full w-full object-cover object-center transform transition-transform duration-200 group-hover:scale-105 group-hover:rotate-1" src={imgSrc} alt={title} />
                </div>
                <div className="p-5 flex-1">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <h3 className="text-gray-500 mb-4">{subtitle}</h3>
                    <div className={`w-12 h-1 group-hover:w-20 transition-all delay-75 rounded-full bg-theme mb-4`}></div>
                    <p className="text-gray-700 text-sm line-clamp-4 overflow-hidden">{description}</p>
                    {/* <div className="mt-4">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                            <a href="#">Contact</a>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};



interface ServiceRowProps {
    title: string;
    description: string;
    serviceData: ServiceCardData[];
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {serviceData?.map((card, index) => (
                    <ServiceCard
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        imgSrc={card.imgSrc}
                        color={card.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceRow;
