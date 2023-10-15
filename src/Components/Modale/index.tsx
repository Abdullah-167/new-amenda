import React from 'react'
import ModaleOne from './ModaleOne'
import ImageSection from './ImageSection'
import ImageDetails from './ImageDetails'
import Image from 'next/image'

const Modale = () => {
    return (
        <div>
            <div className='flex justify-end p-[10px] '>
                <Image className='sm:block hidden' src={'/cross.svg'} alt='cross' width={50} height={50} />
                <svg className='sm:hidden block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </div>
            <div className='modal-one'>
                <div className=' flex-grow px-[30px]'>
                    <ModaleOne />
                </div>
                <div className='flex lg:flex-nowrap flex-wrap w-full'>
                    <div className=' flex-grow '>
                        <ImageSection />
                    </div>
                    <div className=' flex-grow lg:px-0 px-5'>
                        <ImageDetails />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modale