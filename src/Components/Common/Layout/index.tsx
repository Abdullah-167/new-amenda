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
            <div className={` justify-between px-5 ${isBlogPage ? 'flex xl:hidden' : 'flex md:hidden'} `}>
                <Image className={` cursor-pointer pt-[25px] left-5 mb-[42px] ${isBlogPage ? 'xl:hidden block' : 'md:hidden block'} `} src={'/logo.svg'} width={128} height={100} alt='logo' />
                <div className={`right-5 text-3xl ml-2 pt-[25px] cursor-pointer z-[2000] text-black  ${isBlogPage ? 'xl:hidden block' : 'md:hidden block'}`} onClick={handleTab}><RxHamburgerMenu /></div>
            </div>
            <div className=''>
                <div className={`fixed z-[3000] top-0 w-full h-full max-w-[256px] bg-[#F3F4F6] transition-all duration-300 ${toggelTab ? 'left-0' : isBlogPage ? '-left-[400px]  xl:left-0' : ' -left-[400px]  md:left-0 '}`}>
                    <div className='absolute right-3 top-4 text-3xl ml-2 pt-3 cursor-pointer md:hidden block' onClick={handleTab}><RxCross1 /></div>
                    <Sidebar />
                </div>
            </div>
            <div className={` md:px-0 px-5 ${isBlogPage ? 'ml-[20px] xl:ml-0 xl:pl-[300px]' : 'md:pl-[300px]'}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout;