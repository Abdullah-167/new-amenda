import Image from 'next/image'
import React from 'react'

const RightBar = () => {
    return (
        <aside>
            <div className='min-w-[400px] h-full bg-[#F3F4F6] p-5 min-h-screen'>
                <div className=' max-w-[356px] max-h-[418px] bg-white overflow-y-scroll scroll-bar pb-[20px] pt-[13px] mb-[10px]'>
                    <h1 className=' text-[#111827]  px-5 font-bold text-base pt-[13px] pb-[17px] mb-[17px] border-b border-b-[#E5E7EB]'>Kürzliche Projekt Updates</h1>
                    <div className=" px-5">
                        {updates.map((item, index) => {
                            return (
                                <div className="flex gap-[15px] justify-between  px-[10px] mb-[20px]" key={index}>
                                    <div className='flex gap-[15px]  items-center '>
                                        <Image className='min-w-[50px] min-h-[50px] max-h-[50px]' src={item.mainImg} alt='' width={50} height={50} />
                                        <div className="">
                                            <h2 className="text-[#111827] text-sm pb-[6px]">{item.heading}</h2>
                                            <p className="text-[#4B5563] text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                                <path d="M2.625 11.375L11.375 2.625M11.375 2.625H4.8125M11.375 2.625V9.1875" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className=' max-w-[356px] bg-white px-5 max-h-[612px] overflow-y-scroll scroll-bar pb-[20px] pt-[13px]'>
                    <div className="flex items-center justify-between ">
                        <h3 className="text-base text-[#111827]">Timeline</h3>
                        <p className='border cursor-pointer text-[#797F88] border-[#E5E7EB] py-[7px] px-3 flex justify-center items-center mb-2'>Altersgerechtes Wohnen</p>
                    </div>
                    <div className="">
                        {resTimeline.map((item, index) => {
                            return (
                                <div className="relative overflow-hidden mb-[24px]" key={index}>
                                    <p className="text-[#111827] text-sm font-bold mb-[18px]">{item.date}</p>
                                    <div className=" rotate-90 absolute top-12 -left-[133px] border-syl w-full h-1 "></div>
                                    <div className="">
                                        {item.data.map((newItem, idx) => {
                                            return (
                                                <div key={idx} className=" flex  items-center justify-between  relative mb-[7px]">
                                                    <div className="bg-[#111827] text-[#fff] rounded-full text-[12px] inset-y-0 top-8 flex justify-center  z-[100] items-center h-[32px] min-w-[32px] mx-auto mb-2">{newItem.number}</div>
                                                    <div className="flex justify-between items-center px-[10px] py-[10px] border border-[#E5E7EB] max-w-[270px] min-w-[270px] ">
                                                        <div className="">
                                                            <h2 className="text-[#111827] text-sm pb-[6px]">{newItem.heading}</h2>
                                                            <p className="text-[#4B5563] text-sm">{newItem.description}</p>
                                                        </div>
                                                        <Image className='min-w-[50px] min-h-[50px] max-h-[50px]' src={newItem.mainImg} alt='' width={50} height={50} />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </aside >
    )
}

export default RightBar;


const resTimeline = [
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img2.png',
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img2.png',
                heading: '40 Mother’s Day ',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img2.png',
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img2.png',
                heading: '40 Mother’s Day ',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img2.png',
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img2.png',
                heading: '40 Mother’s Day ',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img2.png',
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img2.png',
                heading: '40 Mother’s Day ',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
]
const updates = [

    {
        mainImg: '/img2.png',
        heading: 'Event Name',
        description: 'ESBR Essig-Haus Bremen',
        number: '2',
        month: 'OCTOBER, 2023',
        line: '',
        imgName: 'pexels-photo-2525329.jpeg',

    },
    {
        mainImg: '/img2.png',
        heading: '40 Mother’s Day ',
        description: 'ESBR Essig-Haus Bremen',
        number: '2',
        month: 'OCTOBER, 2023',
        line: '',
        imgName: 'pexels-photo-2525329.jpeg',

    },

    {
        mainImg: '/img2.png',
        heading: 'Event Name',
        description: 'ESBR Essig-Haus Bremen',
        number: '2',
        month: 'OCTOBER, 2023',
        line: '',
        imgName: 'pexels-photo-2525329.jpeg',

    },
    {
        mainImg: '/img2.png',
        heading: '40 Mother’s Day ',
        description: 'ESBR Essig-Haus Bremen',
        number: '2',
        month: 'OCTOBER, 2023',
        line: '',
        imgName: 'pexels-photo-2525329.jpeg',

    },

]