"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { DetailType } from '@/typing';






const travelConsultantdataList: DetailType[] = [
    {
        _id: 'detail-8',
        title: 'Travel in Japan',
        title_jp: '',
        subtitle: "Our team of experts will help you plan your trip to Japan.",
        subtitle_jp: '',
        category: 'Travel Assistance',
        category_jp: '',
        description: "We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.",
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: 'https://static.visa2fly.com/blog/blog-production/places-to-visit-in-japan/places-to-visit-in-japan.jpeg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    }
];


const TravelConsultant: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Travel Consultant"
                description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                serviceData={travelConsultantdataList}
            />
        </div>
    );
};

export default TravelConsultant;
