import Image from 'next/image';
import React from 'react';

interface NewsCardProps {
    imageUrl: string;
    tag: string;
    tagColor: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, tagColor, title, description, icon }) => {
    return (
        <div className="w-full bg-white border hover:shadow-2xl transition-all delay-100 cursor-pointer rounded-lg overflow-hidden">
            <div className='w-full h-48 relative'>
                <div className='w-full h-full absolute left-0 top-0 bg-[rgba(10,0,0,0.4)]' />
                <Image unoptimized width={40} height={40} className="w-full h-full object-cover" src={imageUrl} alt={title} />
                <div className={`absolute bottom-1 right-1 text-white w-fit text-sm font-semibold px-2 py-1 flex gap-2 rounded-lg ${tagColor}`}>
                    <span>
                        {icon}
                    </span>
                    {/* <span>{tag}</span> */}
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default NewsCard;
