import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Layout = ({ children }: any) => {

    const [toggelTab, settoggelTab] = useState(false);

    const handleTab = () => {
        settoggelTab(!toggelTab)
    }

    const router = useRouter();

    const isBlogPage = router.pathname.startsWith('/jack');

    return (
        <div>
            <div className={` justify-between px-5 pt-[25px] mb-[42px]  ${isBlogPage ? 'flex xl:hidden' : 'flex md:hidden'} `}>
                <div className='xl:hidden flex items-center gap-[7px]'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM3.5 6.986C3.49882 6.9107 3.51284 6.83593 3.54123 6.76617C3.56961 6.69641 3.61178 6.63309 3.6652 6.58L5.9696 4.2826C6.02191 4.2302 6.08402 4.18862 6.15239 4.16023C6.22077 4.13183 6.29407 4.11719 6.3681 4.11712C6.44214 4.11706 6.51547 4.13158 6.58389 4.15985C6.65232 4.18812 6.7145 4.22959 6.7669 4.2819C6.8193 4.33421 6.86088 4.39632 6.88927 4.46469C6.91766 4.53307 6.93231 4.60637 6.93238 4.6804C6.93244 4.75444 6.91792 4.82776 6.88965 4.89619C6.86138 4.96462 6.81991 5.0268 6.7676 5.0792L5.418 6.4302H9.94C10.0885 6.4302 10.231 6.4892 10.336 6.59422C10.441 6.69924 10.5 6.84168 10.5 6.9902C10.5 7.13872 10.441 7.28116 10.336 7.38618C10.231 7.4912 10.0885 7.5502 9.94 7.5502H5.4054L6.7676 8.9124C6.87342 9.01822 6.93287 9.16175 6.93287 9.3114C6.93287 9.3855 6.91828 9.45888 6.88992 9.52734C6.86156 9.5958 6.82 9.658 6.7676 9.7104C6.7152 9.7628 6.653 9.80436 6.58454 9.83272C6.51608 9.86108 6.4427 9.87567 6.3686 9.87567C6.21895 9.87567 6.07542 9.81622 5.9696 9.7104L3.6652 7.413C3.61263 7.36074 3.57095 7.29856 3.54259 7.23006C3.51423 7.16157 3.49976 7.08813 3.5 7.014V6.986Z" fill="#111827" />
                    </svg>
                    <p className='text-xs text-[#111827] font-bold'>Back</p>
                </div>
                <Image className={` cursor-pointer left-5  ${isBlogPage ? 'xl:hidden block' : 'md:hidden block'} `} src={'/logo.svg'} width={128} height={100} alt='logo' />
                <div className={`right-5 text-3xl ml-2 cursor-pointer z-[2000] text-black  ${isBlogPage ? 'xl:hidden block' : 'md:hidden block'}`} onClick={handleTab}><RxHamburgerMenu /></div>
            </div>
            <div className=''>
                <div className={`fixed z-[3000] top-0 w-full h-full max-w-[256px] bg-[#F3F4F6] transition-all duration-300 ${toggelTab ? 'left-0' : isBlogPage ? '-left-[400px]  xl:left-0' : ' -left-[400px]  md:left-0 '}`}>
                    <div className='absolute right-3 top-4 text-3xl ml-2 pt-3 cursor-pointer md:hidden block' onClick={handleTab}><RxCross1 /></div>
                    <Sidebar />
                </div>
            </div>
            <div className={` md:px-0  ${isBlogPage ? 'ml-[20px] xl:ml-0 xl:pl-[300px]' : 'md:pl-[300px]'}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout;