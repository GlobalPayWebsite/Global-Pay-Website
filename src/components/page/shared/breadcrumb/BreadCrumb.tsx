"use client";
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const getUrl = (arr: string[]) => {
    console.log("arr ", arr)
    let str = "";
    arr.map((item) => {
        str += `${item}/`
    })
    return str;
}

const BreadCrumb = () => {
    const pathname = usePathname();
    const paths = pathname.split("/");
    return (
        <div className='relative'>
            <div className='w-full h-[220px]'>
                <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-full'>
                    <div className='box-container py-5 flex items-center justify-center h-full text-white'>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-4xl capitalize'>{paths[1] || ""}</h1>
                            <div className='flex items-center gap-2 font-semibold'>
                                <Link href='/'>Home</Link>
                                {paths.map((item, index) => (
                                    <>
                                        {item != "" && <div key={index} className='flex items-center gap-2'>
                                            <span>/</span>
                                            <Link href={`/${getUrl(paths.slice(1, index + 1))}`} className='capitalize'>{item}</Link>
                                        </div>}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Image width={100} unoptimized={true} height={700} src={"/assets/page-background.jpeg"} className='w-full h-[220px] object-cover object-center' alt='banner' />
            </div>
        </div>
    )
}

export default BreadCrumb