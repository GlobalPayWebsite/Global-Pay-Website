"use client";
import React from 'react';
import Image from 'next/image';
import { LanguageButton } from '@/components/utility/language/LanguageButton';
import SidebarNavItem from './SidebarNavItem';

interface NavLink {
    name: string;
    href: string;
    className?: string;
    dropdownLinks?: NavLink[];
}

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
}

const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
        name: 'Services', href: '/service', dropdownLinks: [
            { name: 'Recruitment', href: '/service/recruitment' },
            { name: 'Other Services', href: '/service/others' },
            { name: 'Immigration Lawyer', href: '/service/immigration' },
        ]
    },
    { name: 'Contact', href: '/contact' }
];

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    

    return (
        <div className={isSidebarOpen ? "absolute z-50 top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007d]" : ""}>
            <div className='relative'>
                <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-[350px]`}>
                    <div className="flex flex-col gap-5 h-full px-5">
                        {/* Sidebar Header */}
                        <div className="w-full flex items-center justify-between py-3">
                            <Image src="/assets/logo.png" alt="Logo" className="w-8 h-8" unoptimized width={5} height={5} />
                            <button
                                className="text-gray-500 rounded-md px-2 text-2xl transition-all delay-300  hover:text-black focus:outline-none"
                                onClick={toggleSidebar}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        {/* Sidebar Menu */}
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <SidebarNavItem key={index} link={link} />
                            ))}
                        </ul>

                        {/* Language Switch */}
                        <div className='w-full flex items-center justify-center'>
                            <LanguageButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
