"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import WhatWeDO from './WhatWeDo';

const AboutUs: React.FC = () => {
    return (
        <div
            className="box-container py-[64px] flex flex-col gap-5 overflow-x-hidden"
        >
            <motion.h4
                className="text-theme font-semibold mb-2 text-left text-4xl"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
            >
                About Us
            </motion.h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Text Section */}
                <motion.div
                    className="w-full flex flex-col gap-5"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                >
                    <div className="w-full">
                        <h1 className="text-4xl mb-4">
                            Meet our company unless miss the opportunity
                        </h1>
                        <p className="text-gray-600">
                            We offer expert consulting services in recruitment, SSW visas, real estate, education, and travel, providing personalized support and guidance tailored to each {"client's"} needs.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex items-start">
                                <span className="text-green-500 text-2xl mr-2">🏅</span>
                                <div>
                                    <h4 className="text-lg font-semibold">Year Of Expertise</h4>
                                    <p className="text-gray-600">10+ Years</p>
                                </div>
                            </div>
                            <div className="flex items-start mr-8">
                                <span className="text-green-500 text-2xl mr-2">📞</span>
                                <div>
                                    <h4 className="text-lg font-semibold">Call Us</h4>
                                    <p className="text-gray-600">03-6687-7736</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <motion.div
                            className="w-full h-[400px]"
                            initial={{ scale: 0.8, opacity: 0.7 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Image
                                src="/assets/about.jpg"
                                alt="Business illustration"
                                className="w-full h-full object-cover object-center"
                                width={40}
                                height={40}
                                unoptimized
                            />
                        </motion.div>

                        <motion.button
                            className="w-fit bg-theme text-white px-6 py-2 rounded-md text-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Discover Now
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                >
                    <WhatWeDO />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
