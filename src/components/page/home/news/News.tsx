"use client";
import React from 'react';
import NewsCard from './NewsCard';

const news = [
    {
        imageUrl: '/assets/jobplacement.jpg',
        tag: 'Job',
        tagColor: 'bg-theme',
        title: 'Job Placement Assistance',
        description: 'We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.',
        author: 'Admin',
        date: 'October 9, 2025',
        authorImage: 'https://example.com/author1.jpg',
        icon: <i className="fa-solid fa-briefcase" />,
    },
    {
        imageUrl: '/assets/nepali-students.jpg',
        tag: 'International Students',
        tagColor: 'bg-theme',
        title: 'support-for-nepali-graduates',
        description: 'We are dedicated to assisting Nepali individuals holding a bachelor’s degree who aspire to work in Japan.',
        author: 'Admin',
        date: 'October 9, 2025',
        authorImage: 'https://example.com/author2.jpg',
        icon: <i className="fa-solid fa-graduation-cap" />,
    },
    {
        imageUrl: '/assets/personalized-career.jpg',
        tag: 'Career',
        tagColor: 'bg-theme',
        title: 'Personalized Career Counseling',
        description: 'Our experienced counselors offer personalized career advice and support, helping candidates understand the job market, refine their resumes, and prepare for interviews.',
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


const News: React.FC = () => {
    return (
        <div className="flex flex-col box-container py-[64px] bg-background">
            <div className='flex flex-col w-full items-center'>
                <h2 className="text-xl sm:text-3xl font-bold mb-3 text-theme">News and Updates</h2>
                <p className="text-center mb-8 max-w-[720px]">
                    Stay up to date with the latest news and updates from our team. Learn more about our services, job placements, and career advice.
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

export default News;
