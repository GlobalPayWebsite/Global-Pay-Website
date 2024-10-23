import React from 'react'

interface IntroCardProps {
    date: string;
    title: string;
}
const IntroCard = ({ date, title }: IntroCardProps) => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                {title && <div className="rounded-md bg-theme px-5 py-1 text-white">
                    {title}
                </div>}
                <div className="flex flex-col gap-2">
                    <h1 className='text-[#D3AF68]'>{date ? date?.split("T")[0] : ""}</h1>
                    {/* <p>Founder and CEO of Possible Consulting</p> */}
                </div>
            </div>
        </div>
    )
}

export default IntroCard