import Image from 'next/image';
import React from 'react';

const CompanyProfile: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 box-container py-[64px]">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-[720px] w-full">

                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-full p-2">
                        <Image width={20} height={20} unoptimized src="/assets/logo.png" alt="Global Pay Logo" className="w-10 h-10 sm:w-20 sm:h-20 rounded-full" />
                    </div>
                    <div>
                        <h1 className="text-sm sm:text-2xl font-bold text-theme ">GLOBAL PAY Co., Ltd.</h1>
                        <p className="text-xs sm:text-sm text-gray-600 ">Empowering Your Global Opportunities</p>
                    </div>
                </div>
                <div className="border-t border-b py-4">
                    <h2 className="text-xl font-bold mb-4  text-theme">Company Overview</h2>
                    <p className="text-sm"><strong>Headquarters:</strong> 1-chome 20-17 Hyakunincho, Shinjuku-ku, Tokyo</p>
                    <p className="text-sm"><strong>Establishment Date:</strong> April 20, 2021</p>
                    <p className="text-sm"><strong>Representative:</strong> Neure Nabin</p>
                    <p className="text-sm"><strong>Capital:</strong> 10 million yen</p>
                    {/* <p className="text-sm"><strong>Number of Employees:</strong> 4</p> */}
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4  text-theme">Business Activities</h2>
                    <ul className="list-none space-y-2 text-sm">
                        <li>I. Recruitment</li>
                        <li>II. SSW (Specialist in Strategic Workforce)</li>
                        <li>III. Real Estate Consultant</li>
                        <li>IV. Educational Consultant</li>
                        <li>V. Travel Consultant</li>
                    </ul>
                </div>

                <div className="mt-6 border-t pt-4  flex flex-col gap-2 ">
                    <h2 className="text-xl font-bold text-theme">Contact Us</h2>
                    <p className="text-sm">Email: info@globalpay.co.jp</p>
                    <p className="text-sm">Phone: +81 03-6687-7736</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
