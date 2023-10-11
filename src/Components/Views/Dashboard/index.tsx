import Layout from '@/Components/Common/Layout'
import React from 'react'
import Main from './Main'
import RightBar from './RightBar'

const Dashboard = () => {
    return (
        <Layout>
            <div className='flex 2xl:gap-[px] w-full'>
                <div className=' flex-grow'>
                    <Main />
                </div>
                <RightBar />
            </div>
        </Layout>
    )
}

export default Dashboard