import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
    name: string;
    role: string;
    description: string;
    imgSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imgSrc }) => {
    return (
        <div className="max-w-full cursor-pointer bg-background rounded-lg border hover:shadow-2xl">
            <Image className="rounded-t-lg w-full h-56 object-cover" src={imgSrc} alt={`${name}`} width={40} height={40} unoptimized />
            <div className="p-5">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">{name}</h5>
                <p className="text-gray-700 font-medium">{role}</p>
                {/* <p className="mt-3 mb-4 text-gray-600">{description}</p> */}
                <div className="flex space-x-2 text-gray-500 mt-2">
                    {/* <a href="https://www.facebook.com/" target="_blank" className="hover:text-theme">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="hover:text-theme">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://x.com/" target="_blank" className="hover:text-theme">
                        <i className="fab fa-twitter"></i>
                    </a> */}

                    <a href="https://www.facebook.com/" target='_blank' className="w-[25px] h-[25px] transition-all delay-100 rounded-full flex items-center justify-center social-link-fb"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" target='_blank' className="w-[25px] h-[25px] transition-all delay-100 rounded-full flex items-center justify-center social-link-insta"><i className="fab fa-instagram"></i></a>
                    <a href="https://x.com/" target='_blank' className="w-[25px] h-[25px] transition-all delay-100 rounded-full flex items-center justify-center social-link-tw">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
