import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const services = [
    {
        title: "Recruitment",
        description: "Connect qualified candidates with top employers, providing tailored job placement, resume preparation, and interview support to ensure the right fit for both candidates and businesses.",
        iconUrl: '/assets/icons/recruitment1.png',
    },
    {
        title: "SSW",
        description: "SSW (Specified Skilled Worker) visa services assist skilled workers in obtaining the necessary visas to work in Japan, offering guidance on application procedures and ensuring compliance with immigration requirements.",
        iconUrl: '/assets/icons/approved.png',
    },
    {
        title: "Real State",
        description: "Help clients navigate the Japanese property market, offering expert guidance on buying, selling, or renting properties, with personalized support for both residential and commercial needs.",
        iconUrl: '/assets/icons/realstate.png',
    },
    {
        title: "Education",
        description: "Offers personalized guidance for students seeking to study in Japan, helping with school selection, application processes, and visa support to ensure a smooth transition into academic life.",
        iconUrl: '/assets/icons/image.png',
    },
];



const WhatWeDO = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className={`flex flex-col gap-3 items-center bg-white rounded-lg p-6 border-2 hover:shadow-2xl hover:border-theme `}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="p-3 bg-background border-2 border-theme rounded-lg">
                        <Image src={service.iconUrl} alt={service.title} height={40} width={40} className='w-7 h-7 object-contain' />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-500 text-center text-md">{service.description}</p>
                    {/* <button className="bg-theme text-white px-4 py-1 text-xs rounded-full hover:bg-red-600 transition">
                        Learn More
                    </button> */}
                </motion.div>
            ))}
        </div>
    );
};

export default WhatWeDO;

// const WhatWeDO = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//                 <div
//                     key={index}
//                     className={`flex flex-col gap-3 items-center justify-between bg-white rounded-lg p-6 border-2 hover:shadow-md hover:border-theme `}
//                 >
//                     <div className="p-3 bg-background border-2 border-theme rounded-lg">
//                         <Image src={service.iconUrl} alt={service.title} height={40} width={40} className='w-7 h-7 object-contain' />
//                     </div>
//                     <h3 className="text-xl font-semibold">{service.title}</h3>
//                     <p className="text-gray-500 text-center text-xs">{service.description}</p>
//                     <button className="bg-theme text-white px-4 py-1 text-xs rounded-full hover:bg-red-600 transition">
//                         Learn More
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default WhatWeDO;
