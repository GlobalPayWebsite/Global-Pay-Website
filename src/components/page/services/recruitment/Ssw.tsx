"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { DetailType } from '@/typing';



const sswDataList: DetailType[] = [
    {
        _id: 'detail-4',
        title: 'Comprehensive Support for SSW (i) and SSW (ii)',
        title_jp: '',
        subtitle: 'Expert advice for your career.',
        subtitle_jp: '',
        category: 'Visa Support',
        category_jp: '',
        description: 'We assist foreign nationals in obtaining both SSW (i) and SSW (ii) visas, ensuring they meet all requirements and pass necessary exams.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: 'https://psb.jumpapp.org/wp-content/uploads/2022/02/220128_%E4%BA%BA%E6%9D%90%E4%BC%9A%E7%A4%BE_pixta_84188693_M.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    },
    {
        _id: 'detail-5',
        title: 'Industry-Specific Expertise',
        title_jp: '',
        subtitle: 'Industry-specific expertise for your career.',
        subtitle_jp: '',
        category: 'Recruitment Services',
        category_jp: '',
        description: 'Our company specializes in placing workers in industries designated for SSW (i) and advanced sectors for SSW (ii).',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: 'https://www.azumuta.com/wp-content/uploads/2024/05/oil-and-gas-refinery-plant-or-petrochemical-industry-2048x1319-1-1024x660.jpeg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    },
    {
        _id: 'detail-6',
        title: 'End-to-End Recruitment Services',
        title_jp: '',
        subtitle: 'We recruit the best talent for your business.',
        subtitle_jp: '',
        category: 'Recruitment Services',
        category_jp: '',
        description: 'From application to placement, we provide full support, including language training and cultural orientation.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: '/assets/personalized-career.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    },
    {
        _id: 'detail-7',
        title: 'Family Support for SSW (ii) Holders',
        title_jp: '',
        subtitle: 'Support for your family.',
        subtitle_jp: '',
        category: 'Family Support',
        category_jp: '',
        description: 'For SSW (ii) visa holders, we offer assistance with family relocation and integration, ensuring a smooth transition to life in Japan.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: 'https://www.research-in-germany.org/dam/jcr:19b2045f-2705-4e7c-9ce5-71328d5b0872/support-for-families_iStock-1132293160.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    }
];



const Ssw: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="SSW"
                description="Comprehensive support for SSW visa applicants and employers in Japan."
                serviceData={sswDataList}
                bg
            />
        </div>
    );
};

export default Ssw;
