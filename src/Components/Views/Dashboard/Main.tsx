import Image from 'next/image';
import React from 'react'

const Main = () => {
    return (
        <section>
            <div className='sm:max-w-[1200px]'>
                <h1 className=' text-[#111827] font-bold text-2xl pt-[25px] pb-[31px] px-5'>Dashboard</h1>
                <div className=' sm:bg-[#F3F4F6] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[10px]  min-h-[250px] w-full outline-none max-w-[1168px] px-5 py-5 mb-[36px] sm:mb-[60px]'>
                    {textData.map((item, index) => {
                        return (
                            <div className='bg-[white] w-full pt-[18px] pb-[15px] pr-[14px] pl-5 border border-[#E5E7EB] sm:max-w-[274px]'
                                key={index}
                            >
                                <h1 className=' text-[#111827] text-base font-bold pb-[7px]'>{item.heading}</h1>
                                <p className='text-[#797F88] text-xs sm:text-sm pb-[10px]'>{item.text}</p>
                                <div className='flex gap-1 justify-end items-center text-[#797F88] text-xs'>
                                    <p>{item.btn}</p>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.4375 1.875L6.5625 5L3.4375 8.125" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] w-full max-w-[1168px] px-5'>
                    {data.map((item, index) => {
                        return (
                            <div className='pb-[28px] sm:pb-[60px]  flex justify-between gap-5 sm:items-start items-center' key={index}>
                                <div className='sm:block flex gap-[25px]'>
                                    <Image className='sm:mb-[40px]' src={item.img} alt='' width={48} height={48} />
                                    <div>
                                        <h2 className='text-[#111827] text-base font-bold pb-[5px] sm:pb-3'>{item.heading}</h2>
                                        <p className='text-[#797F88] text-sm font-normal'>{item.para}</p>
                                    </div>
                                </div>
                                <svg className=' cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
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



const textData = [
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
    {
        heading: '170 m²',
        text: 'Brutto-Grundfläche (BGF)',
        btn: 'Summe'
    },
]