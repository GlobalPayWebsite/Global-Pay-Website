"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { DetailType } from '@/typing';






const educationalConsultantDataList: DetailType[] = [
    {
        _id: 'detail-13',
        title: 'Personalized Guidance and Support',
        title_jp: '',
        subtitle: 'Expert advice for your career.',
        subtitle_jp: '',
        category: 'Education Support',
        category_jp: '',
        description: 'We support each student based on their academic goals, career aspirations, and personal preferences. Emphasize comprehensive services, from selecting the right universities and courses to assisting with application processes and visa requirements.',
        description_jp: '',
        extraDescription: '',
        extraDescription_jp: '',
        image: 'https://www.globalcareercounsellor.com/blog/wp-content/uploads/2021/12/Start-an-Overseas-Education-Consultancy-1-1200x900.jpg',
        icon: null,
        extraImage: '',
        _createdAt: '2024-10-23T12:00:00.000Z', // Example timestamp
    }
];




const EducationalConsultant: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Educational Consultant"
                description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                serviceData={educationalConsultantDataList}
            />
        </div>
    );
};

export default EducationalConsultant;
