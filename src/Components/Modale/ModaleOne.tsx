import Image from 'next/image';
import React from 'react'

const ModaleOne = () => {
    return (
        <section>
            <div className='sidebar-bulkEdit w-full 2xl:min-w-[300px] sm:pl-[20px] 2xl:pl-[50px] lg:pr-[28px] '>
                <div className='grid grid-cols-3 gap-x-[14px] gap-y-[10px] mb-[15px] '>
                    {images.map((item, index) => {
                        return (
                            <Image className='' key={index} src={item.image} alt='image-grid' width={84} height={84} />
                        )
                    })}
                </div>
                <div className='2xl:max-w-[280px] w-full px-5 2xl:px-[60px] py-[23px] border border-dashed border-[#DBDBDB] bg-[#F6F6F6] mb-5 xl:mb-[124px]'>
                    <span className='flex justify-center mb-[10px]'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3" clip-path="url(#clip0_1_2511)">
                                <path d="M11 12.089C11.4142 12.089 11.75 11.7532 11.75 11.339C11.75 10.9248 11.4142 10.589 11 10.589C10.5858 10.589 10.25 10.9248 10.25 11.339C10.25 11.7532 10.5858 12.089 11 12.089Z" fill="#797F88" />
                                <path d="M27.6995 18.1631C27.6995 18.1631 29.7069 6.77462 29.708 6.76797C29.9669 5.29928 28.9465 3.84701 27.4795 3.59024C27.4795 3.59024 8.78459 0.292268 8.76854 0.289458C7.33019 0.0356776 5.83141 1.08395 5.58202 2.51798L5.22167 4.54728C5.1494 4.95451 5.42089 5.34416 5.82909 5.41642C6.23339 5.48869 6.62597 5.2172 6.69823 4.809C6.69823 4.809 7.05913 2.77909 7.05956 2.77677C7.17962 2.10142 7.83806 1.65342 8.50976 1.767C8.50976 1.767 27.1818 5.06009 27.2197 5.0668C27.8803 5.18332 28.346 5.85061 28.2314 6.50821L26.3557 17.1501C25.8568 16.8627 25.3182 16.6397 24.75 16.4867V9.67814C24.75 8.16154 23.5166 6.92814 22 6.92814H3C1.4834 6.92814 0.25 8.16154 0.25 9.67814V21.6781C0.25 23.1947 1.4834 24.4281 3 24.4281H14.0303C14.4443 24.4281 14.7803 24.0922 14.7803 23.6781C14.7803 23.2641 14.4443 22.9281 14.0303 22.9281H3C2.31055 22.9281 1.75 22.3676 1.75 21.6781V21.6488L8 15.3988L12.4697 19.8686C12.7627 20.1615 13.2373 20.1615 13.5303 19.8686C13.8232 19.5756 13.8232 19.101 13.5303 18.808L12.0606 17.3383L17.3301 12.0688L21.6464 16.3851C18.5711 17.0137 16.25 19.7403 16.25 22.9984C16.25 26.7201 19.2783 29.7484 23 29.7484C26.7217 29.7484 29.75 26.7201 29.75 22.9984C29.75 21.1031 28.9619 19.3904 27.6995 18.1631ZM17.8603 10.4779C17.5674 10.185 17.0928 10.185 16.7998 10.4779L11 16.2777L8.53027 13.808C8.2373 13.515 7.76269 13.515 7.46972 13.808L1.75 19.5277V9.67813C1.75 8.98868 2.31055 8.42813 3 8.42813H22C22.6894 8.42813 23.25 8.98868 23.25 9.67813V15.8676L17.8603 10.4779ZM23 28.2484C20.1055 28.2484 17.75 25.893 17.75 22.9984C17.75 20.1039 20.1055 17.7484 23 17.7484C25.8945 17.7484 28.25 20.1039 28.25 22.9984C28.25 25.893 25.8945 28.2484 23 28.2484Z" fill="#797F88" />
                                <path d="M23.5303 19.9682C23.2431 19.681 22.7563 19.6816 22.4697 19.9682L20.4697 21.9682C20.1768 22.2612 20.1768 22.7358 20.4697 23.0288C20.7627 23.3217 21.2373 23.3217 21.5303 23.0288L22.25 22.309V25.4985C22.25 25.9125 22.5859 26.2485 23 26.2485C23.4141 26.2485 23.75 25.9125 23.75 25.4985V22.309C23.75 22.309 24.4689 23.0278 24.4697 23.0288C24.7579 23.317 25.243 23.316 25.5303 23.0288C25.8233 22.7358 25.8233 22.2612 25.5303 21.9682C25.5303 21.9682 23.533 19.9708 23.5303 19.9682Z" fill="#797F88" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2511">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <h1 className="text-center text-[#797F88] text-sm">
                        Drop files here to upload, or{' '}
                        <label className="underline text-[#111827] cursor-pointer">
                            browse files
                            <input
                                type="file"
                                style={{ display: 'none' }}
                            />
                        </label>
                    </h1>
                </div>
                <div>
                    <h2 className='text-[#111827] text-sm font-bold pb-0.5'>General Tags</h2>
                    <p className='text-[#797F88] text-sm opacity-50 mb-5'>General Tags get applied to all those images</p>
                    <div className='bg-[#F3F4F6] py-[9px] px-[10px] mb-[20px] 2xl:max-w-[280px] sm:mx-auto'>
                        <div className='flex gap-2 items-center flex-wrap'>
                            <div className='flex gap-2 items-center bg-[#fff] px-2 py-[5px] cursor-pointer'>
                                <p className='text-[#797F88] text-sm block'>buildings</p>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 6.5L6.5 1.5M1.5 1.5L6.5 6.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='flex gap-2 items-center bg-[#fff] px-2 py-[5px] cursor-pointer'>
                                <p className='text-[#797F88] text-sm block'>buildings</p>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 6.5L6.5 1.5M1.5 1.5L6.5 6.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='flex gap-2 items-center bg-[#fff] px-2 py-[5px] cursor-pointer'>
                                <p className='text-[#797F88] text-sm block'>buildings</p>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 6.5L6.5 1.5M1.5 1.5L6.5 6.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className='text-[#797F88] text-sm block cursor-pointer'>Add A Tag</p>
                        </div>
                    </div>
                    <div className='sm:hidden pb-[20px]'>
                        <label className='text-[#111827] text-sm pb-0.5 block'>Copyright / Person</label>
                        <label className='text-[#797F88] text-sm pb-[12px] block'>Collection Name</label>
                        <input className='bg-[#F3F4F6] outline-none py-[12px] px-2 w-full' type="text" />
                    </div>
                    <div className='mb-10 sm:hidden flex text-center text-white justify-center gap-[20px] items-center py-[11px] px-[20px] cursor-pointer bg-[#111827] '>
                        <p>Apply</p>
                    </div>
                    <div className='fixed left-0 sm:hidden flex gap-[5px] py-[10px] justify-start items-center w-full bottom-0 bg-[#FFF]'>
                        <div className='flex text-[#C83F3F] justify-between gap-[20px] items-center  py-[12px] px-[36px]  cursor-pointer '>
                            <span>Delete</span>
                            <span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.055 6.75002L10.7955 13.5M7.2045 13.5L6.945 6.75002M14.421 4.34252C14.6775 4.38152 14.9325 4.42277 15.1875 4.46702M14.421 4.34252L13.62 14.7548C13.5873 15.1787 13.3958 15.5746 13.0838 15.8635C12.7717 16.1523 12.3622 16.3126 11.937 16.3125H6.063C5.63782 16.3126 5.22827 16.1523 4.91623 15.8635C4.6042 15.5746 4.41269 15.1787 4.38 14.7548L3.579 4.34252M14.421 4.34252C13.5554 4.21166 12.6853 4.11235 11.8125 4.04477M3.579 4.34252C3.3225 4.38077 3.0675 4.42202 2.8125 4.46627M3.579 4.34252C4.4446 4.21166 5.31468 4.11235 6.1875 4.04477M11.8125 4.04477V3.35777C11.8125 2.47277 11.13 1.73477 10.245 1.70702C9.41521 1.6805 8.58479 1.6805 7.755 1.70702C6.87 1.73477 6.1875 2.47352 6.1875 3.35777V4.04477M11.8125 4.04477C9.94029 3.90008 8.05971 3.90008 6.1875 4.04477" stroke="#C83F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className=' sm:hidden flex text-center text-white justify-center items-center py-[12px] px-[36px] cursor-pointer bg-[#111827] '>
                            <p>Apply</p>
                        </div>
                        <div className=' sm:hidden flex text-center text-white justify-center items-center py-[12px] px-[36px] cursor-pointer bg-[#111827] '>
                            <p>Apply</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModaleOne;


const images = [
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
    {
        image: '/img2.png'
    },
]