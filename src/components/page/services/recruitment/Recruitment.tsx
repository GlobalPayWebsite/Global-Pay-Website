"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { DetailType } from '@/typing';



const recruitmentDataList: DetailType[] = [
    {
        _id: 'detail-0',
        title: 'Job Placement Assistance',
        title_jp: '',
        subtitle: 'Your gateway to a successful career in Japan.',
        subtitle_jp: '',
        category: 'Career Assistance',
        category_jp: '',
        description: 'We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: '/assets/jobplacement.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z' // Example timestamp
    },
    {
        _id: 'detail-1',
        title: 'Support for Nepali Graduates',
        title_jp: '',
        subtitle: 'Dedicated support for Nepali students.',
        subtitle_jp: '',
        category: 'Career Assistance',
        category_jp: '',
        description: 'We are dedicated to assisting Nepali individuals holding a bachelor’s degree who aspire to work in Japan.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: '/assets/nepali-students.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z' // Example timestamp
    },
    {
        _id: 'detail-2',
        title: 'Personalized Career Counseling',
        title_jp: '',
        subtitle: 'Expert advice for your career.',
        subtitle_jp: '',
        category: 'Career Assistance',
        category_jp: '',
        description: 'Our experienced counselors offer personalized career advice and support, helping candidates understand the job market, refine their resumes, and prepare for interviews.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: '/assets/personalized-career.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z' // Example timestamp
    },
    {
        _id: 'detail-3',
        title: 'Employer Partnerships',
        title_jp: '',
        subtitle: 'Exclusive job opportunities for candidates.',
        subtitle_jp: '',
        category: 'Career Assistance',
        category_jp: '',
        description: 'We have established strong partnerships with employers across industries in Japan, allowing us to offer candidates exclusive job opportunities.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: '/assets/partnership.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z' // Example timestamp
    }
];



const Recruitment: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Recruitment"
                description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                serviceData={recruitmentDataList}
            />
        </div>
    );
};

export default Recruitment;
