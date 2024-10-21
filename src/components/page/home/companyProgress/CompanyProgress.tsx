"use client";
import React from 'react';
import CountUp from 'react-countup';

const data = [
    {
        title: "Satified Clients",
        count: 321,
        icon: <i className="fas fa-users stat-icon fa-1x" />
    },
    {
        title: "Projects Completed",
        count: 340,
        icon: <i className="fas fa-tasks stat-icon fa-1x" />
    },
    {
        title: "Employees",
        count: 345,
        icon: <i className="fas fa-briefcase stat-icon fa-1x" />
    },
    {
        title: "Years in Business",
        count: 500,
        icon: <i className="fas fa-calendar-alt stat-icon fa-1x" />
    }
]

const CompanyProgress: React.FC = () => {
    return (
        <div className="flex flex-col box-container py-[64px] bg-background">
            <div className='flex flex-col w-full items-center'>
                <h2 className="text-xl md:text-3xl font-bold mb-3 text-theme">COMPANY PROGRESS</h2>
                <p className="text-center mb-8 max-w-[720px]">
                    Our company is dedicated to delivering excellent service, helping clients achieve their goals with tailored solutions. With a focus on quality and client satisfaction, we’re here to support you every step of the way.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <div key={index} className={`${index == data.length - 1 ? "md:col-span-3 lg:col-span-1" : ""} bg-theme text-white p-6 rounded-lg text-center flex flex-col items-center gap-3`}>
                        <div>
                            <span className='text-3xl'>
                                {item.icon}
                            </span>
                        </div>
                        <div className="text-6xl font-bold">
                            <CountUp start={0} end={item.count} duration={3} />
                        </div>
                        <div className="text-xl">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyProgress;
