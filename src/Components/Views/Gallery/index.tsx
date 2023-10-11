import React from 'react'
import Layout from '../../Common/Layout'
import Images from '../Home/Images'
import TimeLine from '../Home/Timeline'
import Hero from '../Home/Hero'
import AddImage from './AddImage'
import Section from './Section'


const Gallery = () => {
    return (
        <Layout>
            <div className='flex  2xl:gap-[90px] gap-10 w-full pr-5'>
                <div className=' flex-grow  mt-[50px]'>
                    <AddImage />
                </div>
                <Section />
            </div>
        </Layout>
    )
}

export default Gallery