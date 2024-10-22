"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';



const data = [
    {
        title: 'Job Placement Assistance',
        subtitle: 'Your gateway to a successful career in Japan.',
        description: 'We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.',
        imgSrc: '/assets/jobplacement.jpg',
        color: '#0088FF',
    },
    {
        title: 'Support for Nepali Graduates',
        subtitle: 'Dedicated support for Nepali students.',
        description: 'We are dedicated to assisting Nepali individuals holding a bachelor’s degree who aspire to work in Japan.',
        imgSrc: '/assets/nepali-students.jpg',
        color: '#D62F1F',
    },
    {
        title: 'Personalized Career Counseling',
        subtitle: 'Expert advice for your career.',
        description: 'Our experienced counselors offer personalized career advice and support, helping candidates understand the job market, refine their resumes, and prepare for interviews.',
        imgSrc: '/assets/personalized-career.jpg',
        color: '#40BD00',
    },
    {
        title: 'Employer Partnerships',
        subtitle: 'Exclusive job opportunities for candidates.',
        description: 'We have established strong partnerships with employers across industries in Japan, allowing us to offer candidates exclusive job opportunities.',
        imgSrc: '/assets/partnership.jpg',
        color: '#F5AF41',
    },
];


const Recruitment: React.FC = () => {
    return (
        <div>
            <ServiceRow
                title="Recruitment"
                description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                serviceData={data}
            />
        </div>
    );
};

export default Recruitment;
