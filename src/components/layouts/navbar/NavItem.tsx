"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
interface NavLink {
    name: string;
    href: string;
    className?: string;
    dropdownLinks?: DropdownLink[];
}

interface NavLinkWithDropdownProps {
    link: NavLink;
}

interface DropdownLink {
    name: string;
    href: string;
}
const NavLinkWithDropdown: React.FC<NavLinkWithDropdownProps> = ({ link }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();
    const { t } = useTranslation();

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeDropdown();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);


    return (
        <div className="relative" ref={dropdownRef}>
            <button  className={`${pathname.includes(link.href) ? "nav_link_active" : "nav_link"} py-1 rounded-full flex items-center gap-2`} onClick={toggleDropdown}>
                {t(link.name)}
                {link.dropdownLinks && (
                    <span className="ml-2">
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                )}
            </button>

            {link.dropdownLinks && isOpen && (
                <div
                    className="absolute z-[40] left-0 mt-2 w-48 py-2 bg-white border border-gray-300 rounded shadow-md"
                >
                    {link.dropdownLinks.map((dropdownLink) => (
                        <Link
                            key={dropdownLink.name}
                            href={dropdownLink.href}
                            className={`${pathname == dropdownLink.href ? "bg-gray-300 text-black" : ""} block px-4 py-1 text-gray-700 hover:bg-gray-200 text-sm`}
                            onClick={closeDropdown} // Close dropdown on link click
                        >
                            {t(dropdownLink.name)}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavLinkWithDropdown;