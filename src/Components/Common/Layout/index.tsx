import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }: any) => {
    return (
        <div>
            <div className='fixed left-0 top-0 w-full h-full max-w-[256px]'>
                <Sidebar />
            </div>
            <div className='pl-[300px] pr-10'>
                {children}
            </div>
        </div>
    )
}

export default Layout;