"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';



const data = [
    {
        title: 'Comprehensive Support for SSW (i) and SSW (ii)',
        subtitle: 'Your gateway to a successful career in Japan.',
        description: 'We assist foreign nationals in obtaining both SSW (i) and SSW (ii) visas, ensuring they meet all requirements and pass necessary exams.',
        imgSrc: '/assets/jobplacement.jpg',
        color: '#0088FF',
    },
    {
        title: 'Industry-Specific Expertise',
        subtitle: 'Dedicated support for Nepali students.',
        description: 'Our company specializes in placing workers in industries designated for SSW (i) and advanced sectors for SSW (ii).',
        imgSrc: '/assets/nepali-students.jpg',
        color: '#D62F1F',
    },
    {
        title: 'End-to-End Recruitment Services',
        subtitle: 'Expert advice for your career.',
        description: 'From application to placement, we provide full support, including language training and cultural orientation.',
        imgSrc: '/assets/personalized-career.jpg',
        color: '#40BD00',
    },
    {
        title: 'Family Support for SSW (ii) Holders',
        subtitle: 'Exclusive job opportunities for candidates.',
        description: 'For SSW (ii) visa holders, we offer assistance with family relocation and integration, ensuring a smooth transition to life in Japan.',
        imgSrc: '/assets/partnership.jpg',
        color: '#F5AF41',
    },
];


const Ssw: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="SSW"
                description="Comprehensive support for SSW visa applicants and employers in Japan."
                serviceData={data}
                bg
            />
        </div>
    );
};

export default Ssw;
