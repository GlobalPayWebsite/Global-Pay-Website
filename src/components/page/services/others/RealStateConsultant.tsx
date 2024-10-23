"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { DetailType } from '@/typing';

const realsStateDataList: DetailType[] = [
    {
        _id: 'detail-9',
        title: "Comprehensive Rental Assistance in Japan",
        title_jp: '',
        subtitle: "Our team is dedicated to helping you find the perfect rental property in Japan.",
        subtitle_jp: '',
        category: 'Rental Assistance',
        category_jp: '',
        description: "We provide end-to-end support in finding the perfect rental apartment in Japan. Whether it is a cozy studio in Tokyo or a spacious family home in Osaka, our team is here to help every step of the way.",
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/5/14/0/HUHH2021-Countryside_Beaver-Dam-Vail-CO_006.jpg.rend.hgtvcom.1280.853.suffix/1621002482384.jpeg",
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    },
    {
        _id: 'detail-10',
        title: "Lease Negotiation and Paperwork Assistance",
        title_jp: '',
        subtitle: "We handle the paperwork, ensuring all documents are completed correctly.",
        subtitle_jp: '',
        category: 'Rental Assistance',
        category_jp: '',
        description: "We handle the paperwork, ensuring all documents are completed correctly, and assist with lease negotiations to secure the best deal for our clients.",
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: "https://cdn.prod.website-files.com/62003a135c2613db4292bc04/656b12d1f6aca465bf56a9c3_Negotiate_Lease_Terms_with_Tenants.webp",
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    },
    {
        _id: 'detail-11',
        title: "Move-In Assistance",
        title_jp: '',
        subtitle: "Our services don’t stop when the lease is signed.",
        subtitle_jp: '',
        category: 'Rental Assistance',
        category_jp: '',
        description: "Our services don’t stop when the lease is signed. We also provide move-in support, helping you settle into your new home with ease, from arranging utilities to offering guidance on the local area.",
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: "https://ap-northeast-1.graphassets.com/clxzycdtd0940070z1zdr1q3g/cm2g4kthr3tb90713dg7gra8i",
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    },
    {
        _id: 'detail-12',
        title: "Employer Partnerships",
        title_jp: '',
        subtitle: "Exclusive job opportunities for candidates.",
        subtitle_jp: '',
        category: 'Employment Services',
        category_jp: '',
        description: "We have established strong partnerships with employers across industries in Japan, allowing us to offer candidates exclusive job opportunities.",
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: "https://www.abdgayrimenkul.com/en/assets/images/mbr-5-1256x837.jpg",
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    },
];


const RealStateConsultant: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Real State Consultant"
                description="Our team is dedicated to helping you find the perfect rental property in Japan."
                serviceData={realsStateDataList}
            />
        </div>
    );
};

export default RealStateConsultant;
