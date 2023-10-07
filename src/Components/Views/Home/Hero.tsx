import React from 'react'
import TimeLine from './Timeline'

const Hero = () => {
    return (
        <header>
            <div className='md:flex md:justify-between gap-[144px] pt-8'>
                <div className='max-w-[640px] md:mb-0 mb-6'>
                    <div className='flex gap-[10px] items-center text-[#111827] text-sm font-bold cursor-pointer mb-[30px] 2xl:mb-[50px]'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM4.5 8.982C4.49848 8.88518 4.51651 8.78905 4.55301 8.69936C4.5895 8.60966 4.64371 8.52825 4.7124 8.46L7.6752 5.5062C7.74245 5.43883 7.82231 5.38537 7.91022 5.34886C7.99813 5.31236 8.09237 5.29353 8.18756 5.29344C8.28275 5.29336 8.37703 5.31203 8.465 5.34838C8.55298 5.38473 8.63293 5.43805 8.7003 5.5053C8.76767 5.57255 8.82113 5.65241 8.85763 5.74032C8.89414 5.82823 8.91297 5.92247 8.91305 6.01766C8.91314 6.11285 8.89447 6.20713 8.85812 6.2951C8.82177 6.38308 8.76845 6.46303 8.7012 6.5304L6.966 8.2674L12.78 8.2674C12.971 8.2674 13.1541 8.34326 13.2891 8.47828C13.4241 8.61331 13.5 8.79644 13.5 8.9874C13.5 9.17836 13.4241 9.36149 13.2891 9.49652C13.1541 9.63154 12.971 9.7074 12.78 9.7074L6.9498 9.7074L8.7012 11.4588C8.83726 11.5949 8.91369 11.7794 8.91369 11.9718C8.91369 12.0671 8.89493 12.1614 8.85847 12.2494C8.82201 12.3375 8.76857 12.4174 8.7012 12.4848C8.63383 12.5522 8.55385 12.6056 8.46583 12.6421C8.37781 12.6785 8.28347 12.6973 8.1882 12.6973C7.99579 12.6973 7.81126 12.6209 7.6752 12.4848L4.7124 9.531C4.6448 9.46381 4.59122 9.38386 4.55476 9.2958C4.5183 9.20774 4.49969 9.11331 4.5 9.018V8.982Z" fill="#111827" />
                        </svg>
                        <span>
                            Back
                        </span>
                    </div>
                    <div className='border-b border-b-[#E5E7EB] pb-5'>
                        <h1 className='text-[#111827] text-[28px] font-bold pb-[22px]'>GHB Grober Burstah Hamburg</h1>
                        <div className='flex gap-2 items-center text-[#797F88]'>
                            <span className='bg-[#F3F4F6] text-sm px-3 py-[7px] cursor-pointer max-w-[69px] text-center flex justify-center items-center'>GHB-G</span>
                            <div className='flex gap-2 items-center'>
                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 11.7209C13 14.1172 10.1474 16 6.5 16C2.85257 16 0 14.1172 0 11.7209C0 10.7833 0.445714 9.92 1.196 9.22047C1.38171 9.56279 1.58229 9.89023 1.79029 10.2102C1.35943 10.6642 1.11429 11.1777 1.11429 11.7209C1.11429 13.4326 3.58057 14.8837 6.5 14.8837C9.41943 14.8837 11.8857 13.4326 11.8857 11.7209C11.8857 11.1777 11.6406 10.6642 11.2097 10.2102C11.4177 9.89023 11.6183 9.56279 11.804 9.22047C12.5617 9.92 13 10.7758 13 11.7209ZM11.5143 5.02326C11.5143 8.96 7.04971 12.733 6.85657 12.8967C6.75257 12.986 6.62629 13.0233 6.5 13.0233C6.37371 13.0233 6.24743 12.9786 6.14343 12.8967C5.95029 12.7405 1.48571 8.96 1.48571 5.02326C1.48571 2.25488 3.73657 0 6.5 0C9.26343 0 11.5143 2.25488 11.5143 5.02326ZM7.98571 5.02326C7.98571 4.20465 7.31714 3.53488 6.5 3.53488C5.68286 3.53488 5.01429 4.20465 5.01429 5.02326C5.01429 5.84186 5.68286 6.51163 6.5 6.51163C7.31714 6.51163 7.98571 5.84186 7.98571 5.02326Z" fill="#797F88" />
                                </svg>
                                <p className='text-sm'>Holzmarktstrabe 3-5, 10179 Berlin, Germany</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-[#797F88] text-[15px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex flex-wrap justify-between max-w-[534px] text-[#797F88]'>
                        <div className='border cursor-pointer text-sm max-h-[30px] border-[#E5E7EB] py-[7px] px-3 flex justify-center items-center mb-2'>LP 6</div>
                        <div className='text-sm'>
                            <p className='border cursor-pointer border-[#E5E7EB] py-[7px] px-3 flex justify-center items-center mb-2'>Altersgerechtes Wohnen</p>
                            <div className='flex gap-2 mb-2'>
                                <p className='border cursor-pointer border-[#E5E7EB] py-[7px] px-3 flex justify-center items-center'>3-Feld Sporthalle</p>
                                <p className='border cursor-pointer border-[#E5E7EB] py-[7px] px-3 flex justify-center items-center'>Ausstellung</p>
                            </div>
                            <p className='border cursor-pointer border-[#E5E7EB] py-[7px] px-3 flex justify-center items-center'>Betreutes Wohnen </p>

                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-3 md:gap-0 md:flex-col'>
                    <div className='border border-[#E5E7EB] px-3 py-3 mb-[10px]'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.89252 6.51599C10.3799 6.74868 10.8043 7.09494 11.1301 7.52567C11.4559 7.9564 11.6736 8.45903 11.7648 8.99133C11.8561 9.52363 11.8183 10.0701 11.6546 10.5847C11.4909 11.0994 11.206 11.5672 10.824 11.949L7.44902 15.324C6.81608 15.9569 5.95763 16.3125 5.06252 16.3125C4.16741 16.3125 3.30896 15.9569 2.67602 15.324C2.04308 14.691 1.6875 13.8326 1.6875 12.9375C1.6875 12.0424 2.04308 11.1839 2.67602 10.551L3.99377 9.23324M14.0063 8.76674L15.324 7.44899C15.957 6.81605 16.3125 5.9576 16.3125 5.06249C16.3125 4.16738 15.957 3.30893 15.324 2.67599C14.6911 2.04305 13.8326 1.68747 12.9375 1.68747C12.0424 1.68747 11.184 2.04305 10.551 2.67599L7.17602 6.05099C6.794 6.43274 6.50917 6.9006 6.34546 7.41526C6.18175 7.92992 6.14393 8.47635 6.2352 9.00865C6.32646 9.54095 6.54414 10.0436 6.86994 10.4743C7.19574 10.905 7.62015 11.2513 8.10752 11.484" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className=' border border-[#E5E7EB] px-3 py-3 mb-[10px]'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_108)">
                                <path d="M12.6465 3.36525L13.9117 2.09925C14.1755 1.83549 14.5332 1.68732 14.9062 1.68732C15.2793 1.68732 15.637 1.83549 15.9008 2.09925C16.1645 2.36301 16.3127 2.72074 16.3127 3.09375C16.3127 3.46676 16.1645 3.82449 15.9008 4.08825L5.124 14.865C4.72749 15.2613 4.23852 15.5525 3.70125 15.7125L1.6875 16.3125L2.2875 14.2988C2.44746 13.7615 2.73873 13.2725 3.135 12.876L12.6473 3.36525H12.6465ZM12.6465 3.36525L14.625 5.34375" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_108">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className=' border border-[#E5E7EB] px-3 py-3 mb-[10px]'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.055 6.74999L10.7955 13.5M7.2045 13.5L6.945 6.74999M14.421 4.34249C14.6775 4.38149 14.9325 4.42274 15.1875 4.46699M14.421 4.34249L13.62 14.7547C13.5873 15.1787 13.3958 15.5746 13.0838 15.8634C12.7717 16.1522 12.3622 16.3126 11.937 16.3125H6.063C5.63782 16.3126 5.22827 16.1522 4.91623 15.8634C4.6042 15.5746 4.41269 15.1787 4.38 14.7547L3.579 4.34249M14.421 4.34249C13.5554 4.21163 12.6853 4.11232 11.8125 4.04474M3.579 4.34249C3.3225 4.38074 3.0675 4.42199 2.8125 4.46624M3.579 4.34249C4.4446 4.21163 5.31468 4.11232 6.1875 4.04474M11.8125 4.04474V3.35774C11.8125 2.47274 11.13 1.73474 10.245 1.70699C9.41521 1.68047 8.58479 1.68047 7.755 1.70699C6.87 1.73474 6.1875 2.47349 6.1875 3.35774V4.04474M11.8125 4.04474C9.94029 3.90005 8.05971 3.90005 6.1875 4.04474" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero