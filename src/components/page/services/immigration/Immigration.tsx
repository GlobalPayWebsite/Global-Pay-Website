"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ComingSoon: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 9,
        hours: 2,
        minutes: 1,
        seconds: 37,
    });

    // Function to format time with leading zeros
    const formatTime = (time: number) => {
        return time.toString().padStart(2, '0');
    };

    // Update countdown logic
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => {
                const { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    return { ...prevTime, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { ...prevTime, minutes: minutes - 1, seconds: 59 };
                } else if (hours > 0) {
                    return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
                } else if (days > 0) {
                    return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
                } else {
                    clearInterval(countdown);
                    return prevTime;
                }
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <div className='box-container py-[64px]'>
            <div className=" w-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1625558298116-38f0173a522c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")' }}>
                <div className="bg-black w-full bg-opacity-50 text-center p-5 rounded-md text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Immigration Lawyer Services Coming Soon!</h1>
                    <p className="text-lg mb-8">We are excited to announce that we will be launching soon and can’t wait to share our new platform for immigration law with you.</p>

                    <div className="flex justify-center space-x-4 text-3xl md:text-5xl font-bold mb-8">
                        <div className="text-center">
                            <span>{formatTime(timeLeft.days)}</span>
                            <div className="text-sm md:text-base">Days</div>
                        </div>
                        <div className="text-center">
                            <span>{formatTime(timeLeft.hours)}</span>
                            <div className="text-sm md:text-base">Hours</div>
                        </div>
                        <div className="text-center">
                            <span>{formatTime(timeLeft.minutes)}</span>
                            <div className="text-sm md:text-base">Minutes</div>
                        </div>
                        <div className="text-center">
                            <span>{formatTime(timeLeft.seconds)}</span>
                            <div className="text-sm md:text-base">Seconds</div>
                        </div>
                    </div>

                    <Link href={"/"} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white text-lg font-semibold">Return to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
