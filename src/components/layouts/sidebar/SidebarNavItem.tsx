"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

interface NavLink {
    name: string;
    href: string;
    className?: string;
    dropdownLinks?: NavLink[];
}

interface SidebarNavItemProps {
    link: NavLink;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ link }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const pathname = usePathname();
    const { toggleLanguage } = useToggleLanguageConversion();

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeDropdown();
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <li>
            {link.dropdownLinks ? (
                <div>
                    <button
                        className={`${link.className} ${pathname.includes(link.href) && "bg-theme text-white"} flex justify-center items-center w-full py-1 px-4 text-gray-800 hover:bg-theme rounded-md hover:text-white focus:outline-none`}
                        onClick={toggleDropdown}
                    >
                        {link.name}
                        <span className="ml-2 text-[13px]">
                            {isDropdownOpen ? '▲' : '▼'}
                        </span>
                    </button>
                    <ul
                        ref={dropdownRef}
                        className={`${isDropdownOpen ? 'flex' : 'hidden'} mt-1 border rounded-md flex-col justify-center items-center py-1 space-y-1 transition-all duration-300 ease-in-out`}
                    >
                        {link.dropdownLinks.map((dropdownLink, index) => (
                            <li key={index} className="w-full flex justify-center items-center">
                                <Link style={{ textDecoration: 'none' }} href={dropdownLink.href} className={`${pathname == dropdownLink.href ? "bg-gray-200" : "text-gray-950"} py-1  hover:bg-gray-100 w-full flex justify-center items-center`}>
                                    {toggleLanguage({
                                        i18Txt: dropdownLink.name,
                                    })}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <Link style={{ textDecoration: 'none' }} href={link.href} className={`${pathname == link.href && "bg-theme text-white"} block py-1 px-4 text-gray-800 hover:bg-theme rounded-md hover:text-white text-center`}>
                    {toggleLanguage({
                        i18Txt: link.name,
                    })}
                </Link>
            )}
        </li>
    );
};

export default SidebarNavItem;
