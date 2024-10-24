import React from 'react'

interface IntroCardProps {
    date: string;
    title: string;
    showDate?: boolean;
}
const IntroCard = ({ date, title, showDate }: IntroCardProps) => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                {title && <div className="rounded-md bg-theme px-5 py-1 text-white">
                    {title}
                </div>}
                <div className="flex flex-col gap-2">
                    {showDate && <h1 className='text-[#D3AF68]'>{date ? date?.split("T")[0] : ""}</h1>}
                    {/* <p>Founder and CEO of Possible Consulting</p> */}
                </div>
            </div>
        </div>
    )
}

export default IntroCard