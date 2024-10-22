"use client";
import React from 'react';
import NewsCard from '../../home/news/NewsCard';

const news = [
    {
        imageUrl: '/assets/jobplacement.jpg',
        tag: 'Job',
        tagColor: 'bg-theme',
        title: 'Comprehensive Rental Assistance in Japan',
        description: 'We provide end-to-end support in finding the perfect rental apartment in Japan. Whether it is a cozy studio in Tokyo or a spacious family home in Osaka, our team is here to help every step of the way.',
        author: 'Admin',
        date: 'October 9, 2025',
        authorImage: 'https://example.com/author1.jpg',
        icon: <i className="fa-solid fa-briefcase" />,
    },
    {
        imageUrl: '/assets/nepali-students.jpg',
        tag: 'International Students',
        tagColor: 'bg-theme',
        title: 'Lease Negotiation and Paperwork Assistance',
        description: 'We handle the paperwork, ensuring all documents are completed correctly, and assist with lease negotiations to secure the best deal for our clients.',
        author: 'Admin',
        date: 'October 9, 2025',
        authorImage: 'https://example.com/author2.jpg',
        icon: <i className="fa-solid fa-graduation-cap" />,
    },
    {
        imageUrl: '/assets/personalized-career.jpg',
        tag: 'Career',
        tagColor: 'bg-theme',
        title: 'Personalized Guidance and Support',
        description: 'We support each student based on their academic goals, career aspirations, and personal preferences. Emphasize comprehensive services, from selecting the right universities and courses to assisting with application processes and visa requirements.',
        author: 'Admin',
        date: 'October 9, 2025',
        authorImage: 'https://example.com/author3.jpg',
        icon: <i className="fa-solid fa-user-tie" />,
    },
    {
        imageUrl: '/assets/partnership.jpg',
        tag: 'Employer',
        tagColor: 'bg-theme',
        title: 'Employer Partnerships',
        description: 'We have established strong partnerships with employers across industries in Japan, allowing us to offer candidates exclusive job opportunities.',
        author: 'Admin',
        date: 'October 9, 2025',
        authorImage: 'https://example.com/author3.jpg',
        icon: <i className="fa-regular fa-handshake" />,
    },
];


const EducationalConsultant: React.FC = () => {
    return (
        <div className="flex flex-col box-container py-[64px] bg-background">
            <div className='flex flex-col w-full items-center'>
                <h2 className="text-xl sm:text-3xl font-bold mb-3 text-theme">Educational Consultant</h2>
                <p className="text-center mb-8 max-w-[720px]">
                    Assist students for studying abroad from Japan to the USA, Australia, & Canada.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {news.map((card, index) => (
                    <NewsCard
                        key={index}
                        imageUrl={card.imageUrl}
                        tag={card.tag}
                        tagColor={card.tagColor}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationalConsultant;
