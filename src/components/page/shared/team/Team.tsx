"use client";
import React from 'react';
import TeamMemberCard from './TeamCard';

const teamMembers = [
    {
        name: "John Doe",
        role: "CEO & Co-Founder",
        description: "Bonnie drives the technical strategy of the themesberg platform and brand.",
        imgSrc: "/assets/team-member-02.jpg",
    },
    {
        name: "Enzila Brown",
        role: "CTO & Co-Founder",
        description: "Roberta oversees the technical development and product strategy.",
        imgSrc: "/assets/team-member-01.jpg",
    },
    {
        name: "Robert Brown",
        role: "Senior Recruiter",
        description: "Robert leads the frontend development team.",
        imgSrc: "/assets/team-member-02.jpg",
    },
    {
        name: "Jasin Hossain",
        role: "Senior Specialist",
        description: "Joseph is responsible for creating clean, responsive web applications.",
        imgSrc: "/assets/team-member-01.jpg",
    },
 
];

const Team: React.FC = () => {
    return (
        <div className="flex flex-col box-container py-[64px] bg-white">
            <div className='flex flex-col w-full items-center'>
                <h2 className="text-xl sm:text-3xl font-bold mb-3 text-theme">Meet Our team</h2>
                <p className="text-center mb-8 max-w-[720px]">
                    Get to know the talented professionals behind our success, dedicated to delivering exceptional results and ensuring your satisfaction.
                </p>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {teamMembers.map((member) => (
                    <TeamMemberCard
                        key={member.name}
                        name={member.name}
                        role={member.role}
                        description={member.description}
                        imgSrc={member.imgSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
