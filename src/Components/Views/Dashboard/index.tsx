import Layout from '@/Components/Common/Layout'
import React from 'react'
import Main from './Main'
import RightBar from './RightBar'

const Dashboard = () => {
    return (
        <Layout>
            <div className='flex 2xl:flex-nowrap flex-wrap 2xl:gap-[px] w-full'>
                <div className='flex-grow 2xl:pr-0 sm:pr-5'>
                    <Main />
                </div>
                <div className=' 2xl:flex-grow-0 flex-grow 2xl:pr-0 pr-5'>
                    <RightBar />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard