"use client";
import React from 'react';
import NewsCard from './NewsCard';
import { DetailType } from '@/typing';

export const newsList: DetailType[] = [
    {
        _id: '1',
        title: 'Job Placement Assistance',
        title_jp: '', // Add Japanese translation if available
        category: 'Job',
        category_jp: '', // Add Japanese translation if available
        description: 'We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.',
        description_jp: '', // Add Japanese translation if available
        extraDescription: '', // Add extra description if necessary
        extraDescription_jp: '', // Add extra Japanese description if necessary
        image: '/assets/jobplacement.jpg',
        extraImage: '', // Add extra image if available
        _createdAt: 'October 9, 2025',
        icon: <i className="fa-solid fa-briefcase" />
    },
    {
        _id: '2',
        title: 'Support for Nepali Graduates',
        title_jp: '', // Add Japanese translation if available
        category: 'International Students',
        category_jp: '', // Add Japanese translation if available
        description: 'We are dedicated to assisting Nepali individuals holding a bachelor’s degree who aspire to work in Japan.',
        description_jp: '', // Add Japanese translation if available
        extraDescription: '', // Add extra description if necessary
        extraDescription_jp: '', // Add extra Japanese description if necessary
        image: '/assets/nepali-students.jpg',
        extraImage: '', // Add extra image if available
        _createdAt: 'October 9, 2025',
        icon: <i className="fa-solid fa-graduation-cap" />
    },
    {
        _id: '3',
        title: 'Personalized Career Counseling',
        title_jp: '', // Add Japanese translation if available
        category: 'Career',
        category_jp: '', // Add Japanese translation if available
        description: 'Our experienced counselors offer personalized career advice and support, helping candidates understand the job market, refine their resumes, and prepare for interviews.',
        description_jp: '', // Add Japanese translation if available
        extraDescription: '', // Add extra description if necessary
        extraDescription_jp: '', // Add extra Japanese description if necessary
        image: '/assets/personalized-career.jpg',
        extraImage: '', // Add extra image if available
        _createdAt: 'October 9, 2025',
        icon: <i className="fa-solid fa-user-tie" />
    },
    {
        _id: '4',
        title: 'Employer Partnerships',
        title_jp: '', // Add Japanese translation if available
        category: 'Employer',
        category_jp: '', // Add Japanese translation if available
        description: 'We have established strong partnerships with employers across industries in Japan, allowing us to offer candidates exclusive job opportunities.',
        description_jp: '', // Add Japanese translation if available
        extraDescription: '', // Add extra description if necessary
        extraDescription_jp: '', // Add extra Japanese description if necessary
        image: '/assets/partnership.jpg',
        extraImage: '', // Add extra image if available
        _createdAt: 'October 9, 2025',
        icon: <i className="fa-regular fa-handshake" />
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
                {newsList.map((details, index) => (
                    <NewsCard
                        key={index}
                        details={details}
                    />
                ))}
            </div>
        </div>
    );
};

export default News;
