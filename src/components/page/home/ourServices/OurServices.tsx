import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        title: "Job Placement Assistance",
        description: "Helping individuals find the right job opportunities under the SSW program.",
        icon: <i className="fa-solid fa-briefcase"></i>,
    },
    {
        title: "Comprehensive Support for SSW (i) and SSW (ii)",
        description: "Assistance for those pursuing SSW visas and the transition process.",
        icon: <i className="fa-solid fa-passport"></i>,
    },
    {
        title: "Support for Nepali Graduates",
        description: "Dedicated services for Nepali graduates seeking global career paths.",
        icon: <i className="fa-solid fa-user-graduate"></i>,
    },
    {
        title: "Industry-Specific Expertise",
        description: "Expert guidance in various industries, matching you with relevant roles.",
        icon: <i className="fa-solid fa-industry"></i>,
    },
    {
        title: "Personalized Career Counseling",
        description: "One-on-one career guidance tailored to your goals and needs.",
        icon: <i className="fa-solid fa-chalkboard-teacher"></i>,
    },
    {
        title: "End-to-End Recruitment Services",
        description: "Full recruitment services to simplify the hiring and onboarding process.",
        icon: <i className="fa-solid fa-users"></i>,
    },
    {
        title: "Employer Partnerships",
        description: "We partner with employers to match candidates with suitable roles.",
        icon: <i className="fa-solid fa-handshake"></i>,
    },
    {
        title: "Family Support for SSW (ii) Holders",
        description: "Family Support for SSW (ii) Holders",
        icon: <i className="fa-solid fa-home"></i>,
    },
];

{/* <i className="fa-solid fa-passport"></i> */ }
{/* <i className="fa-solid fa-industry"></i> */ }
{/* <i className="fa-solid fa-users"></i> */ }
{/* <i className="fa-solid fa-home"></i> */ }


const OurServices: React.FC = () => {
    return (
        <div className="bg-background py-16 px-8">
            <div className="max-w-7xl mx-auto text-center flex flex-col gap-5">
                <h2 className="text-3xl font-extrabold text-theme">OUR SERVICES</h2>
                <div className="text-lg text-gray-700 flex items-center justify-center">
                    <p className='max-w-[720px] text-[16px]'>
                        We offer a range of expert services designed to support your career and life abroad, including job placements, SSW visa assistance, and personalized guidance for a seamless experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;