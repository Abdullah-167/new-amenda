import Image from 'next/image';
import React from 'react'

const Main = () => {
    return (
        <section>
            <div className='max-w-[1200px]'>
                <h1 className=' text-[#111827] font-bold text-2xl pt-[25px] pb-[31px]'>Dashboard</h1>
                <textarea className=' bg-[#F3F4F6] max-h-[250px] min-h-[250px] w-full outline-none max-w-[1168px] px-5 py-5 mb-[60px]'></textarea>
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] w-full max-w-[1168px]'>
                    {data.map((item, index) => {
                        return (
                            <div className='pb-[60px] gap-5' key={index}>
                                <div className=' flex justify-between'>
                                    <Image className='mb-[40px]' src={item.img} alt='' width={48} height={48} />
                                    <svg className=' cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <path d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                                <h2 className='text-[#111827] text-base font-bold  pb-3'>{item.heading}</h2>
                                <p className='text-[#797F88] text-sm font-normal'>{item.para}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Main;

const data = [
    {
        heading: 'Kontaktverzeichnis',
        para: 'Ihre Bürokontakte und Firmen.',
        img: '/icon1.svg'
    },
    {
        heading: 'Projekte',
        para: 'Alle Ihre Projekte an einem Ort.',
        img: '/icon1.svg'
    },
    {
        heading: 'Kontaktverzeichnis',
        para: 'Ihre Bürokontakte und Firmen..',
        img: '/icon1.svg'
    },
    {
        heading: 'Hilfe',
        para: 'Das Hilfe Zentrum rund um die Funktionen von amenda.',
        img: '/icon1.svg'
    },
]