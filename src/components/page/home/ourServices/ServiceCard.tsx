import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
                <div className='text-theme border-4 border-theme hover:bg-theme cursor-pointer transition-all delay-100 hover:text-white rounded-md w-20 h-20 p-5 text-3xl flex items-center justify-center'>
                    {icon}
                </div>
            </div>
            <div>
                <div className="font-medium text-theme text-left text-xl">{title}</div>
                <p className="text-gray-600 text-left">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
