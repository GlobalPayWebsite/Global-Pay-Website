import React from 'react';
import "./card.css";

interface ProjCardProps {
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    color: string;
}

const ProjCard: React.FC<ProjCardProps> = ({ title, subtitle, description, imgSrc }) => {
    return (
        <div className={`relative w-full h-full mb-10 projcard rounded-lg bg-white border-2 group border-gray-300  hover:-translate-y-1 transition-all ease-in-out`}>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-gray-600 to-transparent opacity-5"></div>
            <div className="relative h-full flex">
                <div className='h-full w-[400px] overflow-hidden projcard-img-box'>
                    <img className="h-full w-full object-cover transform transition-transform duration-200 group-hover:scale-105 group-hover:rotate-1" src={imgSrc} alt={title} />
                </div>
                <div className="p-5 flex-1">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <h3 className="text-gray-500 mb-4">{subtitle}</h3>
                    <div className={`w-12 h-1 group-hover:w-20 transition-all delay-75 rounded-full bg-theme mb-4`}></div>
                    <p className="text-gray-700 text-sm line-clamp-4 overflow-hidden">{description}</p>
                    <div className="mt-4">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                            <a href="#">Contact</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Cards: React.FC = () => {
    const projCards = [
        {
            title: 'Cupping Therapy Sessions',
            subtitle: 'Unlocking the power of the mind for a brighter, more fulfilling life.',
            description: `Our cupping therapy sessions are designed to alleviate muscle tension, improve blood flow, and promote overall relaxation. Using traditional cupping techniques, our experienced practitioners create a soothing and therapeutic experience to help you feel rejuvenated and revitalized.`,
            imgSrc: 'https://picsum.photos/800/600?image=1041',
            color: '#0088FF',
        },
        {
            title: 'Energy Healing Sessions',
            subtitle: 'Unlocking the power of the mind for a brighter, more fulfilling life.',
            description: `Our energy healing sessions focus on balancing the body's energy centers to promote physical, emotional, and spiritual well-being. Through gentle touch and energy manipulation, our practitioners help restore harmony and vitality.`,
            imgSrc: 'https://picsum.photos/800/600?image=1080',
            color: '#D62F1F',
        },
        {
            title: 'Guided Meditation',
            subtitle: 'Unlocking the power of the mind for a brighter, more fulfilling life.',
            description: `Join us for guided meditation sessions that offer a peaceful retreat from the stresses of daily life. Our experienced meditation guides will lead you through calming visualizations and breathing exercises.`,
            imgSrc: 'https://picsum.photos/800/600?image=1039',
            color: '#40BD00',
        },
        {
            title: 'Stress Relief Workshops',
            subtitle: 'Unlocking the power of the mind for a brighter, more fulfilling life.',
            description: `Our stress relief workshops provide practical tools and techniques for managing stress and enhancing resilience. From mindfulness practices to holistic healing modalities, our workshops empower you to take control of your well-being.`,
            imgSrc: 'https://picsum.photos/800/600?image=943',
            color: '#F5AF41',
        },
    ];

    return (
        <div className='box-container py-[64px]'>
            <div className="grid grid-cols-1 gap-10">
                {projCards.map((card, index) => (
                    <ProjCard
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        imgSrc={card.imgSrc}
                        color={card.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
