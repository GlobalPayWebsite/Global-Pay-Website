"use client";

import { LanguageButton } from '@/components/utility/language/LanguageButton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { usePathname } from 'next/navigation';
import NavLinkWithDropdown from './NavItem';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

interface DropdownLink {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  className?: string;
  dropdownLinks?: DropdownLink[];
}




// Dynamic array of navigation links
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

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar starts closed
  const pathname = usePathname();
  const { toggleLanguage } = useToggleLanguageConversion();

  return (
    <>
      <header className='sticky top-0 left-0 z-40 shadow-xl box-container py-[14px] bg-background'>
        <nav className="flex items-center justify-between">

          {/* Left Side: Logo */}
          <div className="flex items-center mr-5">
            <Link className="flex items-center" href="/">
              <Image src="/assets/logo.png" alt="Global Pay" width="30" height="30" unoptimized />
              <span
                style={{
                  display: 'inline-block',
                  marginLeft: 8,
                  fontWeight: 'bold',
                }}
                className='text-lg'
              >
                Global Pay <strong style={{ fontSize: "12px", fontWeight: 500 }}>Co., Ltd.</strong>
              </span>
            </Link>
          </div>

          <div className='hidden lg:flex items-center gap-5'>
            {/* Center: Links */}
            <div className="flex gap-5 items-center">
              {navLinks.map((link) => {
                return link.dropdownLinks ? (
                  <NavLinkWithDropdown
                    key={link.name}
                    link={link}
                  />
                ) : (
                  <div key={link.name}>
                    <Link href={link.href} className={`${pathname == link.href ? "bg-theme text-white" : ""} py-1 px-4 rounded-full hover:underline`}>
                      {toggleLanguage({
                        i18Txt: link.name,
                      })}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div>
              <p className='text-2xl text-gray-200'>|</p>
            </div>

            {/* Right Side: Language Options */}
            <LanguageButton />

          </div>
          <div className='flex lg:hidden'>
            <button onClick={() => setIsSidebarOpen(true)} className='text-2xl text-gray-700 px-2 rounded-md border'>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

        </nav>
      </header>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Navbar;
