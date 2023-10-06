import React from 'react'
import Layout from '../../Common/Layout'
import Images from './Images'
import Hero from './Hero'
import TimeLine from './Timeline'

const Home = () => {
    return (
        <Layout>
            <div className='flex xl:flex-row flex-col flex-grow gap-[90px] w-full'>
                <Images />
                <Hero />
            </div>
            <TimeLine />
        </Layout>
    )
}

export default Home