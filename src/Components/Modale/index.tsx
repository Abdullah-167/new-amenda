import React from 'react'
import ModaleOne from './ModaleOne'
import ImageSection from './ImageSection'
import ImageDetails from './ImageDetails'
import Image from 'next/image'

const Modale = () => {
    return (
        <div>
            <div className='flex justify-end p-[10px] '>
                <Image src={'/cross.svg'} alt='cross' width={50} height={50} />
            </div>
            <div className='modal-one'>
                <ModaleOne />
                <div className='flex w-full'>
                    <ImageSection />
                    <ImageDetails />
                </div>
            </div>
        </div>
    )
}

export default Modale