import Image from 'next/image'
import React, { useState } from 'react'


const SideBar = () => {

    const [handleModale, setHandleModale] = useState(false);
    const [activeTab, setactiveTab] = useState(1);
    const [groupTab, setGroupTab] = useState(null);

    const handleDropdoen = () => {
        setHandleModale(!handleModale)
    }

    const handleTab = (index: any) => {
        setactiveTab(index)
    }


    const handleGroupTab = (index: any) => {
        setGroupTab(groupTab === index ? null : index);
    };

    return (
        <aside className=' xl:fixed xl:left-auto left-5 xl:top-auto top-[64px] h-full'>
            <div className='pr-[50px] max-w-[300px] 2xl:max-w-[444px] relative h-full min-h-screen max-h-[100vh] border-r border-r-[#E5E7EB]'>
                <div className='flex gap-[15px] items-center cursor-pointer mb-[51px] mt-[25px]' onClick={handleDropdoen}>
                    <h1 className=' font-bold text-[#111827] text-[24px]'>Kontaktverzeichnis</h1>
                    <Image className={` transition-all duration-300 ${handleModale ? ' rotate-180 ' : ''}`} src={'/arrowdown.svg'} alt={'btn-arrow'} width={20} height={20} />
                </div>
                {handleModale && (
                    <div className='shadow-dropdown absolute z-[2000] top-[50px] min-w-[294px] max-w-[294px] bg-[#FFF] px-5 pt-5 pb-[30px]'>
                        <div className='mb-[30px] relative'>
                            <div className=' absolute top-5 pl-[15px]'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_3572)">
                                        <path d="M13.8672 13.2383L10.2526 9.68153C11.1991 8.65314 11.7807 7.29308 11.7807 5.79648C11.7803 2.59497 9.14327 0 5.89013 0C2.63699 0 0 2.59497 0 5.79648C0 8.99799 2.63699 11.593 5.89013 11.593C7.29571 11.593 8.58488 11.1068 9.59751 10.2985L13.2261 13.8694C13.4029 14.0435 13.6899 14.0435 13.8668 13.8694C14.044 13.6952 14.044 13.4125 13.8672 13.2383ZM5.89013 10.7011C3.13762 10.7011 0.906279 8.50525 0.906279 5.79648C0.906279 3.0877 3.13762 0.891822 5.89013 0.891822C8.64266 0.891822 10.874 3.0877 10.874 5.79648C10.874 8.50525 8.64266 10.7011 5.89013 10.7011Z" fill="#797F88" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_3572">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <input className='bg-[#F3F4F6]  outline-none py-[14px] pl-[37px] w-full max-w-[346px]' placeholder='Search contacts..' type="text" />
                        </div>
                        <div className='flex justify-between items-center pb-[15px] cursor-pointer'>
                            <p className='text-[#111827] text-lg font-bold  '>Contact List 1</p>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46666 13.5333V12.6C7.46666 12.3424 7.25759 12.1333 7 12.1333C6.74241 12.1333 6.53334 12.3424 6.53334 12.6V13.5333C6.53334 13.7909 6.74241 14 7 14C7.25759 14 7.46666 13.7909 7.46666 13.5333ZM6.13155 0.500733L4.37459 3.5868L0.808402 4.25927C0.45141 4.32647 0.162549 4.5794 0.0500851 4.91587C-0.0642457 5.25793 0.0202191 5.6336 0.272214 5.8968L2.74409 8.4714L2.30124 11.9639C2.25597 12.32 2.4109 12.6723 2.70909 12.8828C2.99935 13.0881 3.38108 13.1241 3.70587 12.9766L7 11.4814L10.2941 12.9766C10.6189 13.1241 11.0006 13.0881 11.2909 12.8828C11.5891 12.6723 11.744 12.32 11.6988 11.9639L11.2559 8.4714L13.7278 5.8968C13.9798 5.6336 14.0642 5.25793 13.9499 4.91587C13.8375 4.5794 13.5486 4.32647 13.1916 4.25927L9.62541 3.5868L7.86845 0.500733C7.69299 0.1932 7.36166 0 7 0C6.63834 0 6.30702 0.1932 6.13155 0.500733ZM1.19153 8.6828L0.258214 9.14947C0.0276856 9.26427 -0.0656457 9.5452 0.0496184 9.77527C0.164416 10.0058 0.445343 10.0991 0.675405 9.98387L1.60872 9.5172C1.83925 9.4024 1.93258 9.12147 1.81731 8.8914C1.70252 8.66087 1.42159 8.56753 1.19153 8.6828ZM12.3913 9.5172L13.3246 9.98387C13.5547 10.0991 13.8356 10.0058 13.9504 9.77527C14.0656 9.5452 13.9723 9.26427 13.7418 9.14947L12.8085 8.6828C12.5784 8.56753 12.2975 8.66087 12.1827 8.8914C12.0674 9.12147 12.1608 9.4024 12.3913 9.5172ZM3.83 2.23673L2.99329 1.4C2.81129 1.218 2.51543 1.218 2.33344 1.4C2.15144 1.582 2.15144 1.87787 2.33344 2.05987L3.17015 2.8966C3.35215 3.0786 3.64801 3.0786 3.83 2.8966C4.012 2.7146 4.012 2.41873 3.83 2.23673ZM10.8299 2.8966L11.6666 2.05987C11.8486 1.87787 11.8486 1.582 11.6666 1.4C11.4846 1.218 11.1887 1.218 11.0067 1.4L10.17 2.23673C9.988 2.41873 9.988 2.7146 10.17 2.8966C10.352 3.0786 10.6479 3.0786 10.8299 2.8966Z" fill="#FFB800" />
                            </svg>
                        </div>
                        <div className='flex justify-between pb-[15px]  cursor-pointer items-center'>
                            <p className='text-[#111827] text-lg font-bold '>VIP List</p>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46666 13.5333V12.6C7.46666 12.3424 7.25759 12.1333 7 12.1333C6.74241 12.1333 6.53334 12.3424 6.53334 12.6V13.5333C6.53334 13.7909 6.74241 14 7 14C7.25759 14 7.46666 13.7909 7.46666 13.5333ZM6.13155 0.500733L4.37459 3.5868L0.808402 4.25927C0.45141 4.32647 0.162549 4.5794 0.0500851 4.91587C-0.0642457 5.25793 0.0202191 5.6336 0.272214 5.8968L2.74409 8.4714L2.30124 11.9639C2.25597 12.32 2.4109 12.6723 2.70909 12.8828C2.99935 13.0881 3.38108 13.1241 3.70587 12.9766L7 11.4814L10.2941 12.9766C10.6189 13.1241 11.0006 13.0881 11.2909 12.8828C11.5891 12.6723 11.744 12.32 11.6988 11.9639L11.2559 8.4714L13.7278 5.8968C13.9798 5.6336 14.0642 5.25793 13.9499 4.91587C13.8375 4.5794 13.5486 4.32647 13.1916 4.25927L9.62541 3.5868L7.86845 0.500733C7.69299 0.1932 7.36166 0 7 0C6.63834 0 6.30702 0.1932 6.13155 0.500733ZM1.19153 8.6828L0.258214 9.14947C0.0276856 9.26427 -0.0656457 9.5452 0.0496184 9.77527C0.164416 10.0058 0.445343 10.0991 0.675405 9.98387L1.60872 9.5172C1.83925 9.4024 1.93258 9.12147 1.81731 8.8914C1.70252 8.66087 1.42159 8.56753 1.19153 8.6828ZM12.3913 9.5172L13.3246 9.98387C13.5547 10.0991 13.8356 10.0058 13.9504 9.77527C14.0656 9.5452 13.9723 9.26427 13.7418 9.14947L12.8085 8.6828C12.5784 8.56753 12.2975 8.66087 12.1827 8.8914C12.0674 9.12147 12.1608 9.4024 12.3913 9.5172ZM3.83 2.23673L2.99329 1.4C2.81129 1.218 2.51543 1.218 2.33344 1.4C2.15144 1.582 2.15144 1.87787 2.33344 2.05987L3.17015 2.8966C3.35215 3.0786 3.64801 3.0786 3.83 2.8966C4.012 2.7146 4.012 2.41873 3.83 2.23673ZM10.8299 2.8966L11.6666 2.05987C11.8486 1.87787 11.8486 1.582 11.6666 1.4C11.4846 1.218 11.1887 1.218 11.0067 1.4L10.17 2.23673C9.988 2.41873 9.988 2.7146 10.17 2.8966C10.352 3.0786 10.6479 3.0786 10.8299 2.8966Z" fill="#FFB800" />
                            </svg>
                        </div>
                        <p className='text-[#111827] text-lg pb-[15px] font-bold cursor-pointer'>My Contact List ABC</p>
                        <div className='flex justify-between items-center pb-[30px] cursor-pointer'>
                            <p className='text-[#111827] text-lg font-bold  '>List Name</p>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.46666 13.5333V12.6C7.46666 12.3424 7.25759 12.1333 7 12.1333C6.74241 12.1333 6.53334 12.3424 6.53334 12.6V13.5333C6.53334 13.7909 6.74241 14 7 14C7.25759 14 7.46666 13.7909 7.46666 13.5333ZM6.13155 0.500733L4.37459 3.5868L0.808402 4.25927C0.45141 4.32647 0.162549 4.5794 0.0500851 4.91587C-0.0642457 5.25793 0.0202191 5.6336 0.272214 5.8968L2.74409 8.4714L2.30124 11.9639C2.25597 12.32 2.4109 12.6723 2.70909 12.8828C2.99935 13.0881 3.38108 13.1241 3.70587 12.9766L7 11.4814L10.2941 12.9766C10.6189 13.1241 11.0006 13.0881 11.2909 12.8828C11.5891 12.6723 11.744 12.32 11.6988 11.9639L11.2559 8.4714L13.7278 5.8968C13.9798 5.6336 14.0642 5.25793 13.9499 4.91587C13.8375 4.5794 13.5486 4.32647 13.1916 4.25927L9.62541 3.5868L7.86845 0.500733C7.69299 0.1932 7.36166 0 7 0C6.63834 0 6.30702 0.1932 6.13155 0.500733ZM1.19153 8.6828L0.258214 9.14947C0.0276856 9.26427 -0.0656457 9.5452 0.0496184 9.77527C0.164416 10.0058 0.445343 10.0991 0.675405 9.98387L1.60872 9.5172C1.83925 9.4024 1.93258 9.12147 1.81731 8.8914C1.70252 8.66087 1.42159 8.56753 1.19153 8.6828ZM12.3913 9.5172L13.3246 9.98387C13.5547 10.0991 13.8356 10.0058 13.9504 9.77527C14.0656 9.5452 13.9723 9.26427 13.7418 9.14947L12.8085 8.6828C12.5784 8.56753 12.2975 8.66087 12.1827 8.8914C12.0674 9.12147 12.1608 9.4024 12.3913 9.5172ZM3.83 2.23673L2.99329 1.4C2.81129 1.218 2.51543 1.218 2.33344 1.4C2.15144 1.582 2.15144 1.87787 2.33344 2.05987L3.17015 2.8966C3.35215 3.0786 3.64801 3.0786 3.83 2.8966C4.012 2.7146 4.012 2.41873 3.83 2.23673ZM10.8299 2.8966L11.6666 2.05987C11.8486 1.87787 11.8486 1.582 11.6666 1.4C11.4846 1.218 11.1887 1.218 11.0067 1.4L10.17 2.23673C9.988 2.41873 9.988 2.7146 10.17 2.8966C10.352 3.0786 10.6479 3.0786 10.8299 2.8966Z" fill="#797F88" />
                            </svg>
                        </div>
                        <div className='flex text-white justify-between py-[11px] px-[20px] cursor-pointer bg-[#111827] '>
                            <span>Creat New Collection</span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="white" />
                                    <path d="M9 5H11V15H9V5Z" fill="#111827" />
                                    <path d="M5 9H15V11H5V9Z" fill="#111827" />
                                </svg>
                            </span>
                        </div>
                    </div>
                )}
                <div className=' flex gap-[10px] items-center mb-[22px]'>
                    <div className='border cursor-pointer text-[14px] max-h-[30px] border-[#111827] bg-[#111827] text-white py-[12px] px-[15px] flex justify-center items-center mb-2'>Büro</div>
                    <div className='border cursor-pointer text-[14px] max-h-[30px] border-[#E5E7EB] py-[12px] px-[15px] flex justify-center items-center mb-2'>Firmen</div>
                    <div className='border cursor-pointer text-[14px] max-h-[30px] border-[#E5E7EB] py-[12px] px-[15px] flex justify-center items-center mb-2'>Personen</div>
                </div>
                <div className='mb-[30px] relative'>
                    <div className=' absolute top-5 pl-[15px]'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_3572)">
                                <path d="M13.8672 13.2383L10.2526 9.68153C11.1991 8.65314 11.7807 7.29308 11.7807 5.79648C11.7803 2.59497 9.14327 0 5.89013 0C2.63699 0 0 2.59497 0 5.79648C0 8.99799 2.63699 11.593 5.89013 11.593C7.29571 11.593 8.58488 11.1068 9.59751 10.2985L13.2261 13.8694C13.4029 14.0435 13.6899 14.0435 13.8668 13.8694C14.044 13.6952 14.044 13.4125 13.8672 13.2383ZM5.89013 10.7011C3.13762 10.7011 0.906279 8.50525 0.906279 5.79648C0.906279 3.0877 3.13762 0.891822 5.89013 0.891822C8.64266 0.891822 10.874 3.0877 10.874 5.79648C10.874 8.50525 8.64266 10.7011 5.89013 10.7011Z" fill="#797F88" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_3572">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <input className='bg-[#F3F4F6]  outline-none py-[14px] pl-[37px] w-full max-w-[346px]' placeholder='Search contacts..' type="text" />
                </div>
                <div className='flex mb-[30px] border-b border-b-[#E5E7EB] justify-between'>
                    <p className={` text-xs font-bold pb-[10px] uppercase cursor-pointer border-b px-[20px] 2xl:px-[50px] ${activeTab === 1 ? 'text-[#111827] border-b-[#111827]' : 'text-[#797F88] border-b-[#E5E7EB]'}`} onClick={() => handleTab(1)}>Individuals</p>
                    <p className={` text-xs font-bold pb-[10px] uppercase cursor-pointer border-b px-[20px] 2xl:px-[60px] ${activeTab === 2 ? 'text-[#111827] border-b-[#111827]' : 'text-[#797F88] border-b-[#E5E7EB]'}`} onClick={() => handleTab(2)}>Groped</p>
                </div>
                <div className=' absolute bottom-[40px] cursor-pointer right-5'>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.15" cx="30" cy="30" r="30" fill="#2286E0" />
                        <circle cx="30" cy="30" r="23" fill="#111827" />
                        <path d="M28.4 22H31.6V38H28.4V22Z" fill="white" />
                        <path d="M22 28.4H38V31.6H22V28.4Z" fill="white" />
                    </svg>
                </div>
                {activeTab === 1 && (
                    <div className='max-h-[400px] overflow-auto tab-scroll'>
                        {data.map((item, index) => {
                            return (
                                <div className='flex  w-full' key={index}>
                                    <h2 className='min-w-[35px] text-base text-[#111827] font-bold'>{item.letter}</h2>
                                    <div className='flex flex-col justify-start w-full'>
                                        {item.detail.map((newItem, idx) => {
                                            return (
                                                <div className='flex gap-3 items-center mb-[26px]' key={idx}>
                                                    <Image src={newItem.img} alt={'btn-arrow'} width={40} height={40} />
                                                    <div>
                                                        <p className='text-sm text-[#111827] font-bold pb-[6px]'>{newItem.name}</p>
                                                        <p className='text-sm text-[#797F88]'>{newItem.email}</p>
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
                {activeTab === 2 && (
                    <div className='max-h-[400px] overflow-auto tab-scroll'>
                        {companyData.map((item, index) => {
                            return (
                                <div className='flex  w-full' key={index}>
                                    <h2 className='min-w-[18px] text-base text-[#111827] font-bold'>{item.letter}</h2>
                                    <div className='flex flex-col justify-start w-full'>
                                        {item.detail.map((newItem, idx) => {
                                            return (
                                                <div className={` px-[15px] transition-all duration-300 ${groupTab === index ? 'bg-[#F3F4F6] bg-opacity-50 h-full py-[13px] mb-[15px]' : ''}`} key={idx}>
                                                    <div className='flex justify-between cursor-pointer overflow-hidden' onClick={() => handleGroupTab(index)}>
                                                        <div className='flex gap-3 items-center mb-[26px]'>
                                                            <Image src={newItem.img} alt={'btn-arrow'} width={40} height={40} />
                                                            <div>
                                                                <p className='text-sm text-[#111827] font-bold pb-[6px]'>{newItem.name}</p>
                                                                <p className='text-sm text-[#797F88]'>{newItem.email}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-[13px] items-center'>
                                                            {groupTab === index && (
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_5_367)">
                                                                        <path d="M8.431 2.24338L9.2745 1.39938C9.45034 1.22354 9.68883 1.12476 9.9375 1.12476C10.1862 1.12476 10.4247 1.22354 10.6005 1.39938C10.7763 1.57522 10.8751 1.81371 10.8751 2.06238C10.8751 2.31105 10.7763 2.54954 10.6005 2.72538L3.416 9.90988C3.15166 10.1741 2.82568 10.3682 2.4675 10.4749L1.125 10.8749L1.525 9.53238C1.63164 9.1742 1.82582 8.84822 2.09 8.58388L8.4315 2.24338H8.431ZM8.431 2.24338L9.75 3.56238" stroke="#D0D5DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_5_367">
                                                                            <rect width="12" height="12" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            )}
                                                            <Image className={` transition-all duration-300 ${groupTab === index ? ' rotate-180' : ''}`} src={'/downarrow.svg'} alt={'btn-arrow'} width={14} height={14} />
                                                        </div>
                                                    </div>
                                                    <div className={` transition-all duration-500 pl-[10px] ${groupTab === index ? ' h-full' : 'h-0'}`}>
                                                        {groupTab === index && (
                                                            <div className={`  pl-[10px]`}>
                                                                {newItem.companyDetails.map((details, detailIdx) => {
                                                                    return (
                                                                        <div className='flex gap-3 items-center mb-[26px]' key={detailIdx}>
                                                                            <Image src={details.img} alt={'btn-arrow'} width={40} height={40} />
                                                                            <div>
                                                                                <p className='text-sm text-[#111827] font-bold pb-[6px]'>{details.name}</p>
                                                                                <p className='text-sm text-[#797F88]'>{details.email}</p>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </aside>
    )
}

export default SideBar;



const data = [
    {
        letter: 'J',
        detail: [
            {
                img: '/jack.svg',
                name: 'Jack Sparrow',
                email: 'jack@amenda.com'
            },
            {
                img: '/jack.svg',
                name: 'Jack Sparrow',
                email: 'jack@amenda.com'
            },
        ]
    },
    {
        letter: 'K',
        detail: [
            {
                img: '/jack.svg',
                name: 'Kata Sandera',
                email: 'jack@amenda.com'
            },
        ]
    },
    {
        letter: 'M',
        detail: [
            {
                img: '/jack.svg',
                name: 'Marie Jane',
                email: 'jack@amenda.com'
            },
            {
                img: '/jack.svg',
                name: 'Mickey Milkovich',
                email: 'jack@amenda.com'
            },
        ]
    },
    {
        letter: 'T',
        detail: [
            {
                img: '/jack.svg',
                name: 'Tony Stark',
                email: 'jack@amenda.com'
            },
        ]
    },
    {
        letter: 'Z',
        detail: [
            {
                img: '/jack.svg',
                name: 'Laverne',
                email: 'jack@amenda.com'
            },
        ]
    },
]
const companyData = [
    {
        letter: 'J',
        detail: [
            {
                img: '/jack.svg',
                name: 'Jack Sparrow',
                email: 'jack@amenda.com',
                companyDetails: [
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                ]
            },
        ]
    },
    {
        letter: 'K',
        detail: [
            {
                img: '/jack.svg',
                name: 'Jack Sparrow',
                email: 'jack@amenda.com',
                companyDetails: [
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                ]
            },
        ]
    },
    {
        letter: 'M',
        detail: [
            {
                img: '/jack.svg',
                name: 'Jack Sparrow',
                email: 'jack@amenda.com',
                companyDetails: [
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                ]
            },
        ]
    },
    {
        letter: 'T',
        detail: [
            {
                img: '/jack.svg',
                name: 'Jack Sparrow',
                email: 'jack@amenda.com',
                companyDetails: [
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                ]
            },
        ]
    },
    {
        letter: 'Z',
        detail: [
            {
                img: '/jack.svg',
                name: 'Jack Sparrow',
                email: 'jack@amenda.com',
                companyDetails: [
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                    {
                        img: '/jack.svg',
                        name: 'Jack Sparrow',
                        email: 'jack@amenda.com',
                    },
                ]
            },
        ]
    },
]