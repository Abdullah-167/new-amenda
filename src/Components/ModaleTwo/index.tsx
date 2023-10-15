import React from 'react'
import ModaleTwoImage from './ModaleTwoImage'
import SideBar from './SideBar'

const ModaleTwo = () => {
    return (
        <div>
            <div className='flex 2xl:flex-nowrap flex-wrap'>
                <div className=''>
                    <ModaleTwoImage />
                </div>
                <div className=' flex-grow'>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default ModaleTwo