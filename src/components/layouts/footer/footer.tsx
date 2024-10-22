import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white box-container pt-[32px] border-t text-dark">
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div className='flex flex-col gap-3'>
                        <div className="flex items-center">
                            <Link className="flex items-center" href="/">
                                <Image src="/assets/logo.png" alt="Global Pay" width="40" height="40" unoptimized />
                                <span
                                    style={{
                                        display: 'inline-block',
                                        marginLeft: 8,
                                        fontWeight: 'bold',
                                    }}
                                    className='text-lg xl:text-[22px] text-nowrap'
                                >
                                    Global Pay Co., Ltd.
                                </span>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px]">
                                1-chome-20-17 Hyakunincho <br />
                                Shinjuku City, Tokyo 169-0073
                            </p>
                            <p className="mt-2">
                                <i className="text-theme fa-solid fa-phone pe-1" /> 03-6687-7736 <br />
                                <i className="text-theme fa-solid fa-envelope pe-1" /> info@globalpay.co.jp
                            </p>
                        </div>
                    </div>

                    <div className='flex lg:justify-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-2 text-[20px]">Useful Links</h4>
                            <ul className="text-[16px] space-y-2">
                                <li><Link href="/" className="hover:underline text-[#555555]">Home</Link></li>
                                <li><Link href="/about-us" className="hover:underline text-[#555555]">About Us</Link></li>
                                <li><Link href="/service/recruitment" className="hover:underline text-[#555555]">Recruitment Service</Link></li>
                                <li><Link href="/service/others" className="hover:underline text-[#555555]">Other Services</Link></li>
                                <li><Link href="/contact" className="hover:underline text-[#555555]">Contact Us</Link></li>
                                <li><Link href="/companyprofile" className="hover:underline text-[#555555]">Company Profile</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex lg:justify-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-2 text-[20px]">Our Services</h4>
                            <ul className="text-[16px] space-y-2">
                                <li><Link href="/service/recruitment" className="hover:underline text-[#555555]">Recruitment</Link></li>
                                <li><Link href="/service/others" className="hover:underline text-[#555555]">SSW</Link></li>
                                <li><Link href="/service/others" className="hover:underline text-[#555555]">Real Estate Consultant</Link></li>
                                <li><Link href="/service/others" className="hover:underline text-[#555555]">Educational Consultant</Link></li>
                                <li><Link href="/service/others" className="hover:underline text-[#555555]">Travel Consultant</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex lg:justify-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-2 text-[20px]">Legal</h4>
                            <ul className="text-[16px] space-y-2">
                                <li><Link href="/privacy-policy" className="hover:underline text-[#555555]">Privacy Policy</Link></li>
                                <li><Link href="/disclaimer" className="hover:underline text-[#555555]">Disclaimer</Link></li>
                                <li><Link href="/use-of-site" className="hover:underline text-[#555555]">Use of This Site</Link></li>
                            </ul>
                            <div className="mt-4">
                                <h5 className="font-bold text-[16px] mb-2">Follow Us</h5>
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/" target='_blank' className="w-[30px] h-[30px] transition-all delay-100 rounded-full flex items-center justify-center social-link-fb"><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/" target='_blank' className="w-[30px] h-[30px] transition-all delay-100 rounded-full flex items-center justify-center social-link-insta"><i className="fab fa-instagram"></i></a>
                                    <a href="https://x.com/" target='_blank' className="w-[30px] h-[30px] transition-all delay-100 rounded-full flex items-center justify-center social-link-tw">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3 text-[16px] text-gray-500 border-t">
                    © 2021 Global Pay Co., Ltd. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
