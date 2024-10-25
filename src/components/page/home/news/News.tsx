"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from './NewsCard';
import { DetailType } from '@/typing';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './news.css'

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
        _createdAt: 'October 9, 2024',
        icon: <i className="fa-solid fa-briefcase" />,
        isNews: true
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
        _createdAt: 'October 10, 2024',
        icon: <i className="fa-solid fa-graduation-cap" />,
        isNews: true
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
        _createdAt: 'October 11, 2024',
        icon: <i className="fa-solid fa-user-tie" />,
        isNews: true
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
        _createdAt: 'October 13, 2024',
        icon: <i className="fa-regular fa-handshake" />,
        isNews: true
    },
    {
        _id: '5',
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
        _createdAt: 'October 14, 2024',
        icon: <i className="fa-regular fa-handshake" />,
        isNews: true
    },
];


const News: React.FC = () => {
    return (
        <div className="flex flex-col box-container pt-[64px] bg-background overflow-hidden">
            <motion.div
                className='flex flex-col w-full items-center'
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h2 className="text-xl sm:text-3xl font-bold mb-3 text-theme">News and Updates</h2>
                <p className="text-center mb-8 max-w-[720px]">
                    Stay up to date with the latest news and updates from our team. Learn more about our services, job placements, and career advice.
                </p>
            </motion.div>

            {/* Swiper Carousel */}
            <motion.div
                className='w-full'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20} // Space between slides
                    slidesPerView={1} // Initially, show one slide
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // For mobile screens
                        },
                        768: {
                            slidesPerView: 2, // For tablets
                        },
                        1024: {
                            slidesPerView: 2, // For desktops
                        },
                        1280: {
                            slidesPerView: 4, // For large desktops
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    className="w-full pb-20"
                >
                    {newsList.map((details, index) => (
                        <SwiperSlide key={index} className='flex w-full bg-white border hover:shadow-2xl transition-all delay-100 cursor-pointer rounded-lg overflow-hidden'>
                            <NewsCard details={details} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};

export default News;
