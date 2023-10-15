import React from 'react'
import Layout from '../../Common/Layout'
import SideBar from './SideBar'
import Details from './Details'


const Jack = () => {

    return (
        <Layout>
            <div className='flex 2xl:gap-[90px] gap-10 w-full'>
                <div className='flex flex-grow'>
                    <div className=' flex-grow'>
                        <SideBar />
                    </div>
                    <div className='lg:block hidden flex-grow'>
                        <Details />
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Jack