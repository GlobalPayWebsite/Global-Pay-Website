import { DetailType } from '@/typing';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';



interface NewsCardProps {
    details: DetailType
}
const NewsCard: React.FC<NewsCardProps> = ({ details }) => {
    return (
        <motion.div
            className='w-full'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Link
                href={{
                    pathname: `/news`,
                    query: {
                        id: details?._id || ""
                    },
                }}
                className="w-full flex flex-col">
                <div className='w-full h-48 relative'>
                    <div className='w-full h-full absolute left-0 top-0 bg-[rgba(10,0,0,0.4)]' />
                    <Image unoptimized width={40} height={40} className="w-full h-full object-cover" src={details?.image || ""} alt={details?.title || ""} />
                    {details?.icon && <div className={`absolute bottom-1 right-1 text-white w-fit text-sm font-semibold px-2 py-1 flex gap-2 rounded-lg bg-theme`}>
                        <span>
                            {details?.icon || ""}
                        </span>
                    </div>}
                </div>
                <div className="p-4 flex-1 flex-grow ">
                    <p className='text-xs'>{details._createdAt || ""}</p>
                    <h2 className="text-md font-bold mb-2">{details?.title || ""}</h2>
                    <p className="text-gray-600 text-sm">{details?.description ? details?.description?.substring(0, 100) + "..." : ""}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default NewsCard;
