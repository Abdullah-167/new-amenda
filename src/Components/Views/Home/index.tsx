import React from 'react'
import Layout from '../../Common/Layout'
import Images from './Images'
import Hero from './Hero'
import TimeLine from './Timeline'

const Home = () => {
    return (
        <Layout>
            <div className='hero-header flex  2xl:gap-[90px] gap-10 w-full sm:pr-5'>
                <div className=' flex-grow'>
                    <Images />
                </div>
                <Hero />
            </div>
            <TimeLine />
        </Layout>
    )
}

export default Home