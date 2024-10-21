import Image from 'next/image';
import React from 'react';
import WhatWeDO from './WhatWeDo';

const AboutUs: React.FC = () => {
    return (
        <section className="box-container py-[64px]">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* Text Section */}
                <div className="w-full flex flex-col gap-5">
                    <div className='w-full'>
                        <h4 className="text-theme text-lg font-semibold mb-2">About Us</h4>
                        <h1 className="text-4xl mb-4">
                            Meet our company unless miss the opportunity
                        </h1>
                        <p className="text-gray-600">
                            We offer expert consulting services in recruitment, SSW visas, real estate, education, and travel, providing personalized support and guidance tailored to each {"client's"} needs.
                        </p>
                    </div>

                    <div className='w-full'>
                        {/* Business Consulting and Expertise */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex items-start">
                                <span className="text-green-500 text-2xl mr-2">🏅</span>
                                <div>
                                    <h4 className="text-lg font-semibold">Year Of Expertise</h4>
                                    <p className="text-gray-600">
                                       10+ Years
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start mr-8">
                                <span className="text-green-500 text-2xl mr-2">📞</span>
                                <div>
                                    <h4 className="text-lg font-semibold">Call Us</h4>
                                    <p className="text-gray-600">
                                        03-6687-7736
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex items-start mr-8">
                                <span className="text-green-500 text-2xl mr-2">💡</span>
                                <div>
                                    <h4 className="text-lg font-semibold">Recruitment</h4>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                            </div> */}
                        </div>

                        {/* Call Us Section */}
                        {/* <div className="flex items-start mt-3">
                            <span className="text-green-500 text-2xl mr-2">📞</span>
                            <div>
                                <h4 className="text-lg font-semibold">Call Us</h4>
                                <p className="text-gray-600">03-6687-7736</p>
                            </div>
                        </div> */}
                    </div>

                    <div className='w-full flex flex-col gap-5'>
                        <div className="w-full h-[200px]">
                            <Image
                                src="/assets/about.png"
                                alt="Business illustration"
                                className="w-full h-full object-cover object-center"
                                width={40}
                                height={40}
                                unoptimized
                            />
                        </div>

                        <button className="w-fit bg-theme text-white px-6 py-2 rounded-md text-lg">
                            Discover Now
                        </button>
                    </div>
                </div>

                <WhatWeDO />

            </div>
        </section>
    );
};

export default AboutUs;
