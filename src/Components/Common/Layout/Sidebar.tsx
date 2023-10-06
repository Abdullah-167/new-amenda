import { errorToJSON } from 'next/dist/server/render'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <aside className='bg-[#F3F4F6] pl-5 h-full'>
            <div>
                <Image className=' cursor-pointer pt-[30px] mb-[42px]' src={'/logo.svg'} width={128} height={100} alt='logo' />
                <Image className='mb-[25px] cursor-pointer' src={'/magnify.svg'} width={25} height={25} alt='logo' />
                <div>
                    {data.map((item, index) => {
                        return (
                            <p className={`py-4 pl-5 cursor-pointer rounded-l-[5px] text-[15px] font-medium ${index === 0 ? ' bg-[#FFF] text-[#111827]' : 'text-[#797F88]'}`}
                                key={index}
                            >
                                {item.link}
                            </p>
                        )
                    })}
                </div>
                <div className=' absolute bottom-[30px]'>
                    <div className='flex gap-1 items-center mb-4'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9.05V9C18 7.4087 17.3678 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88257 3.63214 7.75735 4.75736C6.63213 5.88258 5.99999 7.4087 5.99999 9V9.75C6.00301 11.9746 5.17898 14.121 3.68799 15.772C5.42099 16.412 7.24799 16.857 9.14299 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14299 17.082M14.857 17.082C15.0011 17.5319 15.0369 18.0094 14.9616 18.4757C14.8862 18.942 14.7018 19.384 14.4234 19.7656C14.1449 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85506 20.1472 9.57661 19.7656C9.29816 19.384 9.11375 18.942 9.0384 18.4757C8.96305 18.0094 8.99889 17.5319 9.14299 17.082" stroke="#B8B8B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#4B5563] text-sm'>Benachrichtigungen</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 9V5.25C15.75 4.65326 15.5129 4.08097 15.091 3.65901C14.669 3.23705 14.0967 3 13.5 3H7.5C6.90326 3 6.33097 3.23705 5.90901 3.65901C5.48705 4.08097 5.25 4.65326 5.25 5.25V18.75C5.25 19.3467 5.48705 19.919 5.90901 20.341C6.33097 20.7629 6.90326 21 7.5 21H13.5C14.0967 21 14.669 20.7629 15.091 20.341C15.5129 19.919 15.75 19.3467 15.75 18.75V15M18.75 15L21.75 12M21.75 12L18.75 9M21.75 12H9" stroke="#B8B8B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#4B5563] text-sm'>Abmelden</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar


const data = [
    {
        link: 'Dashboard'
    },
    {
        link: 'Projekte'
    },
    {
        link: 'Medien'
    },
    {
        link: 'Kontakte'
    },
    {
        link: 'Einstellungen'
    },
    {
        link: 'Administration'
    },
]