import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';


const Layout = ({ children }: any) => {

    const [toggelTab, settoggelTab] = useState(false);


    const handleTab = () => {
        settoggelTab(!toggelTab)
    }

    return (
        <div>
            <div className='flex md:hidden justify-between px-5 '>
                <Image className='md:hidden block cursor-pointer pt-[25px] left-5 mb-[42px]' src={'/logo.svg'} width={128} height={100} alt='logo' />
                <div className='right-5 text-3xl ml-2 pt-[25px] cursor-pointer z-[2000] text-black md:hidden block' onClick={handleTab}><RxHamburgerMenu /></div>
            </div>
            <div className=''>
                <div className={`fixed z-[3000] top-0 w-full h-full max-w-[256px] bg-[#F3F4F6] transition-all duration-300 ${toggelTab ? 'left-0' : ' -left-[400px]  md:left-0 '}`}>
                    <div className=' absolute right-3 top-4 text-3xl ml-2 pt-3 cursor-pointer md:hidden block' onClick={handleTab}><RxCross1 /></div>
                    <Sidebar />
                </div>
            </div>
            <div className=' md:pl-[300px] md:px-0 px-5'>
                {children}
            </div>
        </div>
    )
}

export default Layout;