import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface CheckedImages {
    [index: number]: boolean;
}


const Section = () => {

    const [handleModale, setHandleModale] = useState(false);
    const [handleCollection, setHandleCollection] = useState(false);
    const [checkedImages, setCheckedImages] = useState<CheckedImages>({});
    const [checkedImages2, setCheckedImages2] = useState<CheckedImages>({});
    const [checkedImages3, setCheckedImages3] = useState<CheckedImages>({});
    const [checkedImages4, setCheckedImages4] = useState<CheckedImages>({});
    const [checkedImages5, setCheckedImages5] = useState<CheckedImages>({});
    const [checkedRadio, setCheckedRadio] = useState<CheckedImages>({});
    const [activeTab, setactiveTab] = useState(1);
    const [createdCollection, setcreatedCollection] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };


    const handleNewCollection = () => {
        setcreatedCollection(!createdCollection)
    }


    const handleTab = (index: any) => {
        setactiveTab(index)
    }

    const handleCheckedRadio = (index: any) => {
        setCheckedRadio((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleChecked = (index: any) => {
        setCheckedImages((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleChecked2 = (index: any) => {
        setCheckedImages2((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleChecked3 = (index: any) => {
        setCheckedImages3((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleChecked4 = (index: any) => {
        setCheckedImages4((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const handleChecked5 = (index: any) => {
        setCheckedImages5((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };



    const handleDropdoen = () => {
        setHandleModale(!handleModale)
    }


    const toggelCollection = () => {
        setHandleCollection(!handleCollection)
        setHandleModale(false)
    }

    return (
        <section>
            <div className='pt-[30px]'>
                <div className='flex justify-between items-center  mb-[32px] '>
                    <div className='flex gap-[26px] items-center'>
                        <div className='flex gap-[15px] items-center cursor-pointer ' onClick={handleDropdoen}>
                            <h1 className=' font-bold text-[#111827] text-[24px]'>Medienübersicht</h1>
                            <Image className={` transition-all duration-300 ${handleModale ? '' : ' -rotate-90'}`} src={'/arrowdown.svg'} alt={'btn-arrow'} width={20} height={20} />
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_3168)">
                                    <path d="M8.431 2.2435L9.2745 1.3995C9.45034 1.22366 9.68883 1.12488 9.9375 1.12488C10.1862 1.12488 10.4247 1.22366 10.6005 1.3995C10.7763 1.57534 10.8751 1.81383 10.8751 2.0625C10.8751 2.31117 10.7763 2.54966 10.6005 2.7255L3.416 9.91C3.15166 10.1742 2.82568 10.3684 2.4675 10.475L1.125 10.875L1.525 9.5325C1.63164 9.17432 1.82582 8.84834 2.09 8.584L8.4315 2.2435H8.431ZM8.431 2.2435L9.75 3.5625" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_3168">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='text-[#797F88] text-sm'>Edit</span>
                        </div>
                    </div>
                    <div className='flex gap-[15px] items-center cursor-pointer '>
                        <h1 className=' font-bold text-[#111827] text-sm'>Share with:</h1>
                        <Image className={` min-w-[150px]`} src={'/profiles.svg'} alt={'btn-arrow'} width={150} height={150} />
                        <Image className={` transition-all duration-300 `} src={'/share.svg'} alt={'btn-arrow'} width={34} height={34} />
                    </div>
                </div>
                {handleModale && (
                    <div className='shadow-dropdown absolute z-[2000] top-[90px] min-w-[294px] max-w-[294px] bg-[#FFF] px-5 pt-5 pb-[30px]'>
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
                        <div className='flex text-white justify-between py-[11px] px-[20px] cursor-pointer bg-[#111827] ' onClick={toggelCollection}>
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
                <div className='flex justify-between items-center pb-[20px] 2xl:flex-nowrap flex-wrap 2xl:gap-y-0 gap-y-5'>
                    <div className='flex sm:flex-nowrap flex-wrap gap-[10px]'>
                        <div className='flex items-center gap-[18px] border border-[#E5E7EB] py-[11px] px-[10px] cursor-pointer'>
                            <span className='text-[#797F88] text-sm font-bold'>Copyright</span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.375 5.3125L7 9.6875L2.625 5.3125" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='flex items-center gap-[18px] border border-[#E5E7EB] py-[11px] px-[10px] cursor-pointer'>
                            <span className='text-[#797F88] text-sm font-bold'>Copyright</span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.375 5.3125L7 9.6875L2.625 5.3125" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='flex items-center gap-[18px] border border-[#E5E7EB] py-[11px] px-[10px] cursor-pointer'>
                            <span className='text-[#797F88] text-sm font-bold'>Copyright</span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.375 5.3125L7 9.6875L2.625 5.3125" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex items-center sm:flex-nowrap flex-wrap gap-4 sm:gap-[30px]'>
                        <svg className='ml-[10px] cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2.5C12.2958 2.5 14.5458 2.69334 16.7358 3.065C17.18 3.14 17.5 3.52834 17.5 3.97834V4.84834C17.5 5.09456 17.4515 5.33838 17.3573 5.56587C17.2631 5.79336 17.1249 6.00006 16.9508 6.17417L12.4242 10.7008C12.2501 10.8749 12.1119 11.0816 12.0177 11.3091C11.9235 11.5366 11.875 11.7804 11.875 12.0267V14.4658C11.8751 14.8141 11.7781 15.1556 11.595 15.4519C11.4119 15.7482 11.1499 15.9876 10.8383 16.1433L8.125 17.5V12.0267C8.125 11.7804 8.07651 11.5366 7.98228 11.3091C7.88805 11.0816 7.74994 10.8749 7.57583 10.7008L3.04917 6.17417C2.87506 6.00006 2.73695 5.79336 2.64272 5.56587C2.54849 5.33838 2.5 5.09456 2.5 4.84834V3.97834C2.5 3.52834 2.82 3.14 3.26417 3.065C5.48964 2.68821 7.74286 2.49921 10 2.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex gap-2 items-center">
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 cursor-pointer`} width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2 4C16.0828 4 16.82 3.36025 17.0325 2.5L18.525 2.5C18.7872 2.5 19 2.276 19 2C19 1.724 18.7872 1.5 18.525 1.5L17.0325 1.5C16.82 0.63975 16.0828 0 15.2 0C14.3172 0 13.58 0.63975 13.3675 1.5L11.3326 1.5C11.12 0.63975 10.3828 0 9.5 0C8.61721 0 7.88001 0.63975 7.66745 1.5L5.63255 1.5C5.41999 0.63975 4.68279 0 3.8 0C2.91721 0 2.18001 0.63975 1.96745 1.5L0.475 1.5C0.212801 1.5 0 1.724 0 2C0 2.276 0.212801 2.5 0.475 2.5H1.96745C2.18001 3.36025 2.91721 4 3.8 4C4.68279 4 5.41999 3.36025 5.63255 2.5H7.66745C7.88001 3.36025 8.61721 4 9.5 4C10.3828 4 11.12 3.36025 11.3326 2.5L13.3675 2.5C13.58 3.36025 14.3172 4 15.2 4ZM15.2 1C15.7239 1 16.15 1.4485 16.15 2C16.15 2.5515 15.7239 3 15.2 3C14.6761 3 14.25 2.5515 14.25 2C14.25 1.4485 14.6761 1 15.2 1ZM3.8 3C3.27608 3 2.85 2.5515 2.85 2C2.85 1.4485 3.27608 1 3.8 1C4.32393 1 4.75 1.4485 4.75 2C4.75 2.5515 4.32393 3 3.8 3ZM9.5 3C8.97608 3 8.55 2.5515 8.55 2C8.55 1.4485 8.97608 1 9.5 1C10.0239 1 10.45 1.4485 10.45 2C10.45 2.5515 10.0239 3 9.5 3ZM17.1 14.5L17.1 7C17.1 6.8675 17.0499 6.74025 16.9608 6.6465L15.5358 5.1465C15.3503 4.95125 15.0497 4.95125 14.8642 5.1465L13.4392 6.6465C13.3501 6.74025 13.3 6.8675 13.3 7L13.3 14.5C13.3 14.776 13.5128 15 13.775 15L16.625 15C16.8872 15 17.1 14.776 17.1 14.5ZM14.25 14L14.25 7.207L15.2 6.207L16.15 7.207L16.15 14H14.25ZM11.4 14.5L11.4 7C11.4 6.8675 11.3499 6.74025 11.2608 6.6465L9.83583 5.1465C9.65034 4.95125 9.34966 4.95125 9.16418 5.1465L7.73917 6.6465C7.65011 6.74025 7.6 6.8675 7.6 7V14.5C7.6 14.776 7.8128 15 8.075 15H10.925C11.1872 15 11.4 14.776 11.4 14.5ZM8.55 14V7.207L9.5 6.207L10.45 7.207V14H8.55ZM5.7 14.5V7C5.7 6.8675 5.64989 6.74025 5.56083 6.6465L4.13583 5.1465C3.95034 4.95125 3.64966 4.95125 3.46418 5.1465L2.03918 6.6465C1.95011 6.74025 1.9 6.8675 1.9 7L1.9 14.5C1.9 14.776 2.1128 15 2.375 15L5.225 15C5.4872 15 5.7 14.776 5.7 14.5ZM2.85 14L2.85 7.207L3.8 6.207L4.75 7.207V14L2.85 14Z" fill="#111827" />
                            </svg>
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 cursor-pointer`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.125 5C3.125 4.50272 3.32254 4.02581 3.67417 3.67417C4.02581 3.32254 4.50272 3.125 5 3.125H6.875C7.37228 3.125 7.84919 3.32254 8.20082 3.67417C8.55246 4.02581 8.75 4.50272 8.75 5V6.875C8.75 7.37228 8.55246 7.84919 8.20082 8.20082C7.84919 8.55246 7.37228 8.75 6.875 8.75H5C4.50272 8.75 4.02581 8.55246 3.67417 8.20082C3.32254 7.84919 3.125 7.37228 3.125 6.875V5ZM3.125 13.125C3.125 12.6277 3.32254 12.1508 3.67417 11.7992C4.02581 11.4475 4.50272 11.25 5 11.25H6.875C7.37228 11.25 7.84919 11.4475 8.20082 11.7992C8.55246 12.1508 8.75 12.6277 8.75 13.125V15C8.75 15.4973 8.55246 15.9742 8.20082 16.3258C7.84919 16.6775 7.37228 16.875 6.875 16.875H5C4.50272 16.875 4.02581 16.6775 3.67417 16.3258C3.32254 15.9742 3.125 15.4973 3.125 15V13.125ZM11.25 5C11.25 4.50272 11.4475 4.02581 11.7992 3.67417C12.1508 3.32254 12.6277 3.125 13.125 3.125H15C15.4973 3.125 15.9742 3.32254 16.3258 3.67417C16.6775 4.02581 16.875 4.50272 16.875 5V6.875C16.875 7.37228 16.6775 7.84919 16.3258 8.20082C15.9742 8.55246 15.4973 8.75 15 8.75H13.125C12.6277 8.75 12.1508 8.55246 11.7992 8.20082C11.4475 7.84919 11.25 7.37228 11.25 6.875V5ZM11.25 13.125C11.25 12.6277 11.4475 12.1508 11.7992 11.7992C12.1508 11.4475 12.6277 11.25 13.125 11.25H15C15.4973 11.25 15.9742 11.4475 16.3258 11.7992C16.6775 12.1508 16.875 12.6277 16.875 13.125V15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875H13.125C12.6277 16.875 12.1508 16.6775 11.7992 16.3258C11.4475 15.9742 11.25 15.4973 11.25 15V13.125Z" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5  cursor-pointer`} width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 2C5.22386 2 5 1.77614 5 1.5C5 1.22386 5.22386 1 5.5 1H18.5C18.7761 1 19 1.22386 19 1.5C19 1.77614 18.7761 2 18.5 2H5.5ZM5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H18.5C18.7761 6 19 6.22386 19 6.5C19 6.77614 18.7761 7 18.5 7H5.5ZM5.5 12C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11H18.5C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H5.5ZM0 1.5C0 0.671589 0.671126 0 1.5 0C2.32887 0 3 0.671589 3 1.5C3 2.32841 2.32887 3 1.5 3C0.671126 3 0 2.32841 0 1.5ZM1 1.5C1 1.77628 1.22357 2 1.5 2C1.77643 2 2 1.77628 2 1.5C2 1.22372 1.77643 1 1.5 1C1.22357 1 1 1.22372 1 1.5ZM0 6.5C0 5.67159 0.671126 5 1.5 5C2.32887 5 3 5.67159 3 6.5C3 7.32841 2.32887 8 1.5 8C0.671126 8 0 7.32841 0 6.5ZM1 6.5C1 6.77628 1.22357 7 1.5 7C1.77643 7 2 6.77628 2 6.5C2 6.22372 1.77643 6 1.5 6C1.22357 6 1 6.22372 1 6.5ZM0 11.5C0 10.6716 0.671126 10 1.5 10C2.32887 10 3 10.6716 3 11.5C3 12.3284 2.32887 13 1.5 13C0.671126 13 0 12.3284 0 11.5ZM1 11.5C1 11.7763 1.22357 12 1.5 12C1.77643 12 2 11.7763 2 11.5C2 11.2237 1.77643 11 1.5 11C1.22357 11 1 11.2237 1 11.5Z" fill="#797F88" />
                            </svg>
                        </div>
                        <div className='flex text-white justify-between gap-[20px] items-center py-[11px] px-[20px] cursor-pointer bg-[#111827] ' onClick={handleNewCollection}>
                            <span>Add new Images</span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="white" />
                                    <path d="M9 5H11V15H9V5Z" fill="#111827" />
                                    <path d="M5 9H15V11H5V9Z" fill="#111827" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>
                <div className=' relative max-h-[300px] mb-10'>
                    <Image className={` transition-all duration-300 w-full min-h-[300px] max-h-[300px]`} src={'/building.png'} alt={'btn-arrow'} width={1000} height={1000} />
                    <div className='parent-bg w-full h-full absolute top-0'></div>
                    <p className=' absolute bottom-[25px] left-[25px] max-w-[762px] text-[#FFF] text-sm leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                {handleCollection && (
                    <div className='fixed bg-opacity-50 flex justify-center items-center inset-0 pt-5 bg-black mx-auto z-[4000]'>
                        <div className=' relative bg-[white] px-[50px] pb-[50px] max-w-[500px] max-h-[698px] mx-auto'>
                            <div className=' absolute right-[10px] flex justify-end px-[10px] py-[10px]'>
                                <svg className=' cursor-pointer' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggelCollection}>
                                    <g opacity="0.5">
                                        <path d="M7.5 22.5L22.5 7.5M7.5 7.5L22.5 22.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className='pt-[40px]'>
                                <h2 className=' text-2xl text-[#111827] pb-[30px] font-bold text-center'>Sort into Collection</h2>
                                <div className='flex mb-[30px] border-b border-b-[#E5E7EB] justify-between'>
                                    <p className={` text-xs font-bold pb-[10px] uppercase cursor-pointer border-b px-[20px] 2xl:px-[20px] ${activeTab === 1 ? 'text-[#111827] border-b-[#111827]' : 'text-[#797F88] border-b-[#E5E7EB]'}`} onClick={() => handleTab(1)}>Existing Collection</p>
                                    <p className={` text-xs font-bold pb-[10px] uppercase cursor-pointer border-b px-[20px] 2xl:px-[20px] ${activeTab === 2 ? 'text-[#111827] border-b-[#111827]' : 'text-[#797F88] border-b-[#E5E7EB]'}`} onClick={() => handleTab(2)}>New Collection</p>
                                </div>
                                {sortCol.map((item, index) => {
                                    const isCheckedRadio = checkedRadio[index] || false;
                                    return (
                                        <div className=' flex items-center gap-3 cursor-pointer mb-[10px] border border-[#E5E7EB] p-[15px]' key={index} onClick={() => handleCheckedRadio(index)}>
                                            {isCheckedRadio ? (
                                                <div className='max-w-[20px] max-h-[20px] relative cursor-pointer'>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#F3F4F6" stroke="#E5E7EB" />
                                                    </svg>
                                                    <div className=' absolute inset-0 flex items-center justify-center'>
                                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="4" cy="4" r="4" fill="#111827" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            ) : (
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="9.5" fill="#F3F4F6" stroke="#E5E7EB" />
                                                </svg>
                                            )}
                                            <p className='text-base text-[#111827] font-bold'>{item.heading}</p>
                                        </div>
                                    )
                                })}
                                <div className='flex text-white text-center justify-center py-[11px] px-[20px] cursor-pointer bg-[#111827] ' onClick={toggelCollection}>
                                    <span>Creat New Collection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {createdCollection && (
                    <div className='fixed bg-opacity-50 flex justify-center items-center inset-0 pt-5 bg-black mx-auto z-[4000] '>
                        <div className=' relative bg-[white] px-[50px] pb-[50px] max-w-[500px]  mx-auto'>
                            <div className=' absolute right-[10px] flex justify-end px-[10px] py-[10px]'>
                                <svg className=' cursor-pointer' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNewCollection}>
                                    <g opacity="0.5">
                                        <path d="M7.5 22.5L22.5 7.5M7.5 7.5L22.5 22.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className='pt-[40px]'>
                                <h2 className=' text-2xl text-[#111827] pb-[30px] font-bold text-center'>Create New Collection</h2>
                                <div className='pb-[20px]'>
                                    <label className='text-[#797F88] text-sm pb-[12px] block'>Collection Name</label>
                                    <input className='bg-[#F3F4F6]  outline-none py-[12px] px-2 w-full' type="text" value={inputValue}
                                        onChange={handleInputChange} />
                                </div>
                                <div className='pb-[20px]'>
                                    <label className='text-[#797F88] text-sm pb-[12px] block'>Collection Name</label>
                                    <input className='bg-[#F3F4F6]  outline-none py-[12px] px-2 w-full' type="text" value={inputValue}
                                        onChange={handleInputChange} />
                                </div>
                                <div className='pb-[20px]'>
                                    <label className='text-[#797F88] text-sm pb-[12px] block'>Description</label>
                                    <textarea className='bg-[#F3F4F6]  outline-none py-[10px] px-2 min-h-[130px] w-full' value={inputValue}
                                        onChange={handleInputChange} />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-1'>
                                        <p className='text-[#797F88] text-sm pb-[12px] block'>Auto Create from Tags</p>
                                        <sup className='pt-2'>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216641 4.00021 -0.0968502 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.23479 3.05465 9.711 4.02455 9.90392C4.99445 10.0969 5.99979 9.99783 6.91342 9.6194C7.82705 9.24096 8.60794 8.60009 9.15735 7.77785C9.70676 6.9556 10 5.98891 10 5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526784 6.32608 0 5 0ZM5.86 7.579C5.83811 7.60674 5.81215 7.63101 5.783 7.651C5.38117 7.93812 4.90084 8.09485 4.407 8.1C3.955 8.1 3.707 7.785 3.807 7.345C3.933 6.817 4.064 6.291 4.192 5.764C4.20993 5.71757 4.21855 5.66806 4.21734 5.6183C4.21614 5.56854 4.20515 5.51951 4.185 5.474C4.14631 5.41154 4.08736 5.36424 4.018 5.34C3.97942 5.32931 3.93991 5.32227 3.9 5.319C3.852 5.308 3.781 5.3 3.746 5.247L3.735 5.23C3.72258 5.21194 3.71394 5.19157 3.70957 5.17009C3.70521 5.14861 3.70522 5.12648 3.70961 5.10501C3.714 5.08354 3.72267 5.06317 3.73511 5.04513C3.74755 5.02709 3.7635 5.01174 3.782 5L3.873 4.94L4.008 4.865C4.08834 4.82301 4.17116 4.78594 4.256 4.754C4.42928 4.68548 4.60878 4.63391 4.792 4.6C4.90273 4.58028 5.01464 4.56792 5.127 4.563C5.2178 4.56262 5.30836 4.57235 5.397 4.592C5.722 4.67 5.885 4.959 5.797 5.311C5.672 5.843 5.539 6.373 5.409 6.9C5.347 7.152 5.409 7.262 5.663 7.33C5.701 7.34 5.74 7.347 5.779 7.356C5.91 7.39 5.941 7.472 5.86 7.579ZM5.433 3.607C5.26385 3.6062 5.09874 3.55517 4.95862 3.46041C4.8185 3.36564 4.70968 3.23139 4.64596 3.07469C4.58224 2.918 4.5665 2.7459 4.60072 2.58024C4.63494 2.41458 4.71759 2.26282 4.83818 2.14419C4.95877 2.02557 5.11188 1.94543 5.27808 1.91394C5.44428 1.88245 5.61609 1.90102 5.77171 1.96731C5.92734 2.0336 6.05978 2.14461 6.15223 2.28627C6.24468 2.42793 6.29298 2.59385 6.291 2.763C6.28784 2.98829 6.19599 3.20324 6.03537 3.36124C5.87475 3.51924 5.65831 3.60755 5.433 3.607Z" fill="#797F88" />
                                            </svg>
                                        </sup>
                                    </div>
                                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" className="sr-only peer"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        />
                                        <div className="w-9 h-5 bg-[#FFF] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#E5E7EB] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#E5E7EB]"></div>
                                    </label>
                                </div>
                                <div className='bg-[#F3F4F6] py-[9px] px-[10px] mb-[20px]'>
                                    <div className='flex gap-2 items-center  '>
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
                                <div className='pb-[20px]'>
                                    <div className='flex justify-between  pb-[10px]'>
                                        <label className='text-[#797F88] text-sm block'>Share With</label>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="w-9 h-5 bg-[#FFF] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#E5E7EB] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#E5E7EB]"></div>
                                        </label>
                                    </div>
                                    <input
                                        className='bg-[#F3F4F6] outline-none py-[12px] px-2 w-full'
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='mb-5'>
                                    {data.map((item, index) => {
                                        return (
                                            <div className='border border-[#E5E7EB] pl-[5px] w-full  pr-[15px] py-[5px] flex justify-between items-center max-w-[400px] min-w-[400px] mb-[5px]' key={index}>
                                                <div className='flex gap-[15px] max-w-[212px] cursor-pointer min-w-[212px] items-center '>
                                                    <Image className='min-w-[50px] min-h-[50px] max-h-[50px]' src={item.img} alt='' width={53} height={53} />
                                                    <div className="">
                                                        <h2 className="text-[#111827] text-sm pb-[3px]">{item.name}</h2>
                                                        <p className="text-[#797F88] text-[13px]">{item.company}</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center gap-[17px]'>
                                                    <div className='flex items-center gap-[5px]'>
                                                        <p>{item.owner}</p>
                                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1_424)">
                                                                <path d="M3.99998 6.28013C3.8566 6.28013 3.71324 6.22539 3.60393 6.11613L0.164113 2.67628C-0.0547044 2.45746 -0.0547044 2.10269 0.164113 1.88396C0.382842 1.66523 0.737546 1.66523 0.956381 1.88396L3.99998 4.92773L7.04359 1.88406C7.26241 1.66533 7.61708 1.66533 7.83579 1.88406C8.05471 2.10279 8.05471 2.45757 7.83579 2.67638L4.39602 6.11624C4.28666 6.22551 4.1433 6.28013 3.99998 6.28013Z" fill="#797F88" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_424">
                                                                    <rect width="8" height="8" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.7857 0H1.21429C0.892237 0 0.583379 0.126428 0.355656 0.351472C0.127933 0.576515 0 0.88174 0 1.2V10.8C0 11.1183 0.127933 11.4235 0.355656 11.6485C0.583379 11.8736 0.892237 12 1.21429 12H15.7857C16.1078 12 16.4166 11.8736 16.6443 11.6485C16.8721 11.4235 17 11.1183 17 10.8V1.2C17 0.88174 16.8721 0.576515 16.6443 0.351472C16.4166 0.126428 16.1078 0 15.7857 0ZM1.21429 3L5.17893 6L1.21429 9.954V3ZM6.15036 6.75L8.12964 8.256C8.23581 8.33677 8.36602 8.38056 8.5 8.38056C8.63398 8.38056 8.76419 8.33677 8.87036 8.256L10.8496 6.75L14.9296 10.8H2.07036L6.15036 6.75ZM15.7857 9.954L11.8211 6.03L15.7857 3V9.954ZM15.7857 1.2V1.506L8.5 7.044L1.21429 1.506V1.2H15.7857Z" fill="#DADBDD" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {!inputValue && (
                                    <div className='flex text-white text-center justify-center py-[11px] px-[20px] cursor-pointer bg-[#111827] '>
                                        <span>Creat New Collection</span>
                                    </div>
                                )}
                                {inputValue && (
                                    <div className='flex gap-[10px] justify-center'>
                                        <div className='flex text-white text-center justify-center py-[11px] px-[20px] cursor-pointer bg-[#C83F3F] '>
                                            <span>Creat New Collection</span>
                                        </div>
                                        <div className='flex text-white text-center justify-center py-[11px] px-[20px] cursor-pointer bg-[#111827] '>
                                            <span>Creat New Collection</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[10px]'>
                    <div className=' columns-1'>
                        {images.map((item, index) => {

                            const isChecked = checkedImages[index] || false;

                            return (
                                <div key={index} className="z-[1000] relative mb-[10px] max-w-[304px] sm:mx-0 mx-auto" onClick={() => handleChecked(index)}>
                                    <div className="time-line-tags relative  overflow-hidden">
                                        <Image className={`max-w-[304px] min-w-[304px] ${index === 0 ? 'min-h-[296px]' :
                                            index === 1 ? ' min-h-[304px]' :
                                                index === 2 ? 'min-h-[322px]' :
                                                    ''}`} src={item.img} width={500} height={500} alt="time-line-image" />
                                        <main className="bg-black inset-y-0 bg-opacity-40 max-w-[304px] flex justify-center items-center absolute w-full h-full">
                                            <div className=''>
                                                <p className='text-[#FFF] text-lg font-bold pb-[25px]  cursor-pointer'>{item.imgName}</p>
                                                <div className=" cursor-pointer flex gap-1 py-1 max-w-[120px] px-2 mx-auto bg-white items-center justify-center">
                                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22208 0.729675C4.84042 0.729858 1.71996 2.55531 0.0621249 5.50267C0.0214265 5.57502 3.20479e-05 5.65662 3.59768e-08 5.73963C-3.19759e-05 5.82263 0.0212995 5.90425 0.0619421 5.97663C1.71813 8.92637 4.83914 10.754 8.2219 10.7555C8.22171 10.7555 8.22208 10.7555 8.2219 10.7555C11.6036 10.7542 14.7242 8.92765 16.3809 5.97955C16.4216 5.90719 16.443 5.82558 16.443 5.74257C16.443 5.65957 16.4216 5.57796 16.3809 5.5056C14.7242 2.5575 11.6037 0.731138 8.22208 0.729675C8.2222 0.729675 8.22196 0.729675 8.22208 0.729675ZM8.2219 1.69696C11.1643 1.69806 13.8821 3.23727 15.3992 5.74267C13.8821 8.24788 11.1645 9.78691 8.22245 9.78819C5.2791 9.78709 2.56058 8.24678 1.04367 5.73992C2.56167 3.23544 5.27983 1.69714 8.2219 1.69696ZM8.22153 2.81065C6.60793 2.81065 5.28952 4.12906 5.28952 5.74267C5.28952 7.35609 6.60793 8.6745 8.22153 8.6745C9.83495 8.6745 11.1534 7.35609 11.1534 5.74267C11.1534 4.12906 9.83495 2.81065 8.22153 2.81065ZM8.22153 3.77794C9.31219 3.77794 10.1861 4.65182 10.1861 5.74267C10.1861 6.83333 9.31219 7.70721 8.22153 7.70721C7.13069 7.70721 6.2568 6.83333 6.2568 5.74267C6.2568 4.65182 7.13069 3.77794 8.22153 3.77794Z" fill="black" />
                                                    </svg>
                                                    <p className="text-[13px] text-[#111827] font-medium">View Images</p>
                                                </div>
                                            </div>
                                        </main>
                                        {isChecked && (
                                            <div className=' absolute top-0 left-0 p-[7px]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" fill="white" />
                                                    <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' columns-1 gap-x-[10px]'>
                        {images.map((item, index) => {

                            const isChecked2 = checkedImages2[index] || false;

                            return (
                                <div key={index} className="z-[1000] relative mb-[10px] max-w-[304px] sm:mx-0 mx-auto">
                                    <div className="time-line-tags relative  overflow-hidden" onClick={() => handleChecked2(index)}>
                                        <Image className={`2xl:max-w-[304px] ${index === 0 ? 'min-h-[456px]' :
                                            index === 1 ? ' min-h-[456px]' :
                                                index === 2 ? 'min-h-[202px]' :
                                                    index === 3 ? 'min-h-[150px] max-h-[252px]' :
                                                        index === 4 ? 'min-h-[430px] max-h-[430px]' :
                                                            ''}`} src={item.img} width={500} height={500} alt="time-line-image" />
                                        <main className="bg-black inset-y-0 bg-opacity-40  flex justify-center items-center absolute w-full h-full">
                                            <div className=''>
                                                <p className='text-[#FFF] text-lg font-bold pb-[25px]  cursor-pointer'>{item.imgName}</p>
                                                <div className=" cursor-pointer flex gap-1 py-1 max-w-[120px] px-2 mx-auto bg-white items-center justify-center">
                                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22208 0.729675C4.84042 0.729858 1.71996 2.55531 0.0621249 5.50267C0.0214265 5.57502 3.20479e-05 5.65662 3.59768e-08 5.73963C-3.19759e-05 5.82263 0.0212995 5.90425 0.0619421 5.97663C1.71813 8.92637 4.83914 10.754 8.2219 10.7555C8.22171 10.7555 8.22208 10.7555 8.2219 10.7555C11.6036 10.7542 14.7242 8.92765 16.3809 5.97955C16.4216 5.90719 16.443 5.82558 16.443 5.74257C16.443 5.65957 16.4216 5.57796 16.3809 5.5056C14.7242 2.5575 11.6037 0.731138 8.22208 0.729675C8.2222 0.729675 8.22196 0.729675 8.22208 0.729675ZM8.2219 1.69696C11.1643 1.69806 13.8821 3.23727 15.3992 5.74267C13.8821 8.24788 11.1645 9.78691 8.22245 9.78819C5.2791 9.78709 2.56058 8.24678 1.04367 5.73992C2.56167 3.23544 5.27983 1.69714 8.2219 1.69696ZM8.22153 2.81065C6.60793 2.81065 5.28952 4.12906 5.28952 5.74267C5.28952 7.35609 6.60793 8.6745 8.22153 8.6745C9.83495 8.6745 11.1534 7.35609 11.1534 5.74267C11.1534 4.12906 9.83495 2.81065 8.22153 2.81065ZM8.22153 3.77794C9.31219 3.77794 10.1861 4.65182 10.1861 5.74267C10.1861 6.83333 9.31219 7.70721 8.22153 7.70721C7.13069 7.70721 6.2568 6.83333 6.2568 5.74267C6.2568 4.65182 7.13069 3.77794 8.22153 3.77794Z" fill="black" />
                                                    </svg>
                                                    <p className="text-[13px] text-[#111827] font-medium">View Images</p>
                                                </div>
                                            </div>
                                        </main>
                                        {isChecked2 && (
                                            <div className=' absolute top-0 left-0 p-[7px]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" fill="white" />
                                                    <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' columns-1 gap-x-[10px]'>
                        {images.map((item, index) => {

                            const isChecked3 = checkedImages3[index] || false;

                            return (
                                <div key={index} className="z-[1000] relative mb-[10px] max-w-[304px] sm:mx-0 mx-auto" onClick={() => handleChecked3(index)}>
                                    <div className="time-line-tags relative  overflow-hidden">
                                        <Image className={`2xl:max-w-[304px] ${index === 0 ? 'min-h-[202px]' :
                                            index === 1 ? ' min-h-[304px]' :
                                                index === 2 ? 'min-h-[250px]' :
                                                    index === 3 ? 'min-h-[252px] max-h-[252px]' :
                                                        index === 4 ? 'min-h-[430px] max-h-[430px]' :
                                                            ''}`} src={item.img} width={500} height={500} alt="time-line-image" />
                                        <main className="bg-black inset-y-0 bg-opacity-40  flex justify-center items-center absolute w-full h-full">
                                            <div className=''>
                                                <p className='text-[#FFF] text-lg font-bold pb-[25px]  cursor-pointer'>{item.imgName}</p>
                                                <div className=" cursor-pointer flex gap-1 py-1 max-w-[120px] px-2 mx-auto bg-white items-center justify-center">
                                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22208 0.729675C4.84042 0.729858 1.71996 2.55531 0.0621249 5.50267C0.0214265 5.57502 3.20479e-05 5.65662 3.59768e-08 5.73963C-3.19759e-05 5.82263 0.0212995 5.90425 0.0619421 5.97663C1.71813 8.92637 4.83914 10.754 8.2219 10.7555C8.22171 10.7555 8.22208 10.7555 8.2219 10.7555C11.6036 10.7542 14.7242 8.92765 16.3809 5.97955C16.4216 5.90719 16.443 5.82558 16.443 5.74257C16.443 5.65957 16.4216 5.57796 16.3809 5.5056C14.7242 2.5575 11.6037 0.731138 8.22208 0.729675C8.2222 0.729675 8.22196 0.729675 8.22208 0.729675ZM8.2219 1.69696C11.1643 1.69806 13.8821 3.23727 15.3992 5.74267C13.8821 8.24788 11.1645 9.78691 8.22245 9.78819C5.2791 9.78709 2.56058 8.24678 1.04367 5.73992C2.56167 3.23544 5.27983 1.69714 8.2219 1.69696ZM8.22153 2.81065C6.60793 2.81065 5.28952 4.12906 5.28952 5.74267C5.28952 7.35609 6.60793 8.6745 8.22153 8.6745C9.83495 8.6745 11.1534 7.35609 11.1534 5.74267C11.1534 4.12906 9.83495 2.81065 8.22153 2.81065ZM8.22153 3.77794C9.31219 3.77794 10.1861 4.65182 10.1861 5.74267C10.1861 6.83333 9.31219 7.70721 8.22153 7.70721C7.13069 7.70721 6.2568 6.83333 6.2568 5.74267C6.2568 4.65182 7.13069 3.77794 8.22153 3.77794Z" fill="black" />
                                                    </svg>
                                                    <p className="text-[13px] text-[#111827] font-medium">View Images</p>
                                                </div>
                                            </div>
                                        </main>
                                        {isChecked3 && (
                                            <div className=' absolute top-0 left-0 p-[7px]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" fill="white" />
                                                    <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' columns-1 gap-x-[10px]'>
                        {images.map((item, index) => {

                            const isChecked4 = checkedImages4[index] || false;

                            return (
                                <div key={index} className="z-[1000] relative mb-[10px] max-w-[304px] sm:mx-0 mx-auto" onClick={() => handleChecked4(index)}>
                                    <div className="time-line-tags relative  overflow-hidden">
                                        <Image className={`2xl:max-w-[304px] ${index === 0 ? 'min-h-[150px]  max-h-[150px] ' :
                                            index === 1 ? ' min-h-[456px]' :
                                                index === 2 ? 'min-h-[274px]' :
                                                    index === 3 ? 'min-h-[150px] max-h-[150px]' :
                                                        index === 4 ? 'min-h-[430px] max-h-[430px]' :
                                                            ''}`} src={item.img} width={500} height={500} alt="time-line-image" />
                                        <main className="bg-black inset-y-0 bg-opacity-40  flex justify-center items-center absolute w-full h-full">
                                            <div className=''>
                                                <p className='text-[#FFF] text-lg font-bold pb-[25px]  cursor-pointer'>{item.imgName}</p>
                                                <div className=" cursor-pointer flex gap-1 py-1 max-w-[120px] px-2 mx-auto bg-white items-center justify-center">
                                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22208 0.729675C4.84042 0.729858 1.71996 2.55531 0.0621249 5.50267C0.0214265 5.57502 3.20479e-05 5.65662 3.59768e-08 5.73963C-3.19759e-05 5.82263 0.0212995 5.90425 0.0619421 5.97663C1.71813 8.92637 4.83914 10.754 8.2219 10.7555C8.22171 10.7555 8.22208 10.7555 8.2219 10.7555C11.6036 10.7542 14.7242 8.92765 16.3809 5.97955C16.4216 5.90719 16.443 5.82558 16.443 5.74257C16.443 5.65957 16.4216 5.57796 16.3809 5.5056C14.7242 2.5575 11.6037 0.731138 8.22208 0.729675C8.2222 0.729675 8.22196 0.729675 8.22208 0.729675ZM8.2219 1.69696C11.1643 1.69806 13.8821 3.23727 15.3992 5.74267C13.8821 8.24788 11.1645 9.78691 8.22245 9.78819C5.2791 9.78709 2.56058 8.24678 1.04367 5.73992C2.56167 3.23544 5.27983 1.69714 8.2219 1.69696ZM8.22153 2.81065C6.60793 2.81065 5.28952 4.12906 5.28952 5.74267C5.28952 7.35609 6.60793 8.6745 8.22153 8.6745C9.83495 8.6745 11.1534 7.35609 11.1534 5.74267C11.1534 4.12906 9.83495 2.81065 8.22153 2.81065ZM8.22153 3.77794C9.31219 3.77794 10.1861 4.65182 10.1861 5.74267C10.1861 6.83333 9.31219 7.70721 8.22153 7.70721C7.13069 7.70721 6.2568 6.83333 6.2568 5.74267C6.2568 4.65182 7.13069 3.77794 8.22153 3.77794Z" fill="black" />
                                                    </svg>
                                                    <p className="text-[13px] text-[#111827] font-medium">View Images</p>
                                                </div>
                                            </div>
                                        </main>
                                        {isChecked4 && (
                                            <div className=' absolute top-0 left-0 p-[7px]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" fill="white" />
                                                    <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' columns-1 gap-x-[10px]'>
                        {images.map((item, index) => {

                            const isChecked5 = checkedImages5[index] || false;

                            return (
                                <div key={index} className="z-[1000] relative mb-[10px] max-w-[304px] sm:mx-0 mx-auto" onClick={() => handleChecked5(index)}>
                                    <div className="time-line-tags relative  overflow-hidden">
                                        <Image className={`2xl:max-w-[304px] ${index === 0 ? 'min-h-[430px]' :
                                            index === 1 ? ' min-h-[171px]  max-h-[171px]' :
                                                index === 2 ? 'min-h-[257px]' :
                                                    index === 3 ? 'min-h-[150px] max-h-[150px]' :
                                                        index === 4 ? 'min-h-[430px] max-h-[430px]' :
                                                            ''}`} src={item.img} width={500} height={500} alt="time-line-image" />
                                        <main className="bg-black inset-y-0 bg-opacity-40  flex justify-center items-center absolute w-full h-full">
                                            <div className=''>
                                                <p className='text-[#FFF] text-lg font-bold pb-[25px]  cursor-pointer'>{item.imgName}</p>
                                                <div className=" cursor-pointer flex gap-1 py-1 max-w-[120px] px-2 mx-auto bg-white items-center justify-center">
                                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22208 0.729675C4.84042 0.729858 1.71996 2.55531 0.0621249 5.50267C0.0214265 5.57502 3.20479e-05 5.65662 3.59768e-08 5.73963C-3.19759e-05 5.82263 0.0212995 5.90425 0.0619421 5.97663C1.71813 8.92637 4.83914 10.754 8.2219 10.7555C8.22171 10.7555 8.22208 10.7555 8.2219 10.7555C11.6036 10.7542 14.7242 8.92765 16.3809 5.97955C16.4216 5.90719 16.443 5.82558 16.443 5.74257C16.443 5.65957 16.4216 5.57796 16.3809 5.5056C14.7242 2.5575 11.6037 0.731138 8.22208 0.729675C8.2222 0.729675 8.22196 0.729675 8.22208 0.729675ZM8.2219 1.69696C11.1643 1.69806 13.8821 3.23727 15.3992 5.74267C13.8821 8.24788 11.1645 9.78691 8.22245 9.78819C5.2791 9.78709 2.56058 8.24678 1.04367 5.73992C2.56167 3.23544 5.27983 1.69714 8.2219 1.69696ZM8.22153 2.81065C6.60793 2.81065 5.28952 4.12906 5.28952 5.74267C5.28952 7.35609 6.60793 8.6745 8.22153 8.6745C9.83495 8.6745 11.1534 7.35609 11.1534 5.74267C11.1534 4.12906 9.83495 2.81065 8.22153 2.81065ZM8.22153 3.77794C9.31219 3.77794 10.1861 4.65182 10.1861 5.74267C10.1861 6.83333 9.31219 7.70721 8.22153 7.70721C7.13069 7.70721 6.2568 6.83333 6.2568 5.74267C6.2568 4.65182 7.13069 3.77794 8.22153 3.77794Z" fill="black" />
                                                    </svg>
                                                    <p className="text-[13px] text-[#111827] font-medium">View Images</p>
                                                </div>
                                            </div>
                                        </main>
                                        {isChecked5 && (
                                            <div className=' absolute top-0 left-0 p-[7px]'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" fill="white" />
                                                    <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;

const images = [
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },

]
const images2 = [
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },

]
const images3 = [
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },

]
const images4 = [
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },

]
const images5 = [
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },
    {
        img: '/1.png',
        imgName: 'Collection Name Here'
    },

]


const sortCol = [
    {
        heading: 'Collection 1'
    },
    {
        heading: 'Lorem ipsum dolor'
    },
    {
        heading: 'Collection Number 3'
    },
    {
        heading: 'Collection Name'
    },
]



const data = [
    {
        img: '/jhon.svg',
        name: 'Johny Cash',
        company: 'Company Name',
        owner: 'view only'
    },
    {
        img: '/jhon.svg',
        name: 'Johny Cash',
        company: 'Company Name',
        owner: 'view only'
    },
    {
        img: '/jhon.svg',
        name: 'Johny Cash',
        company: 'Company Name',
        owner: 'view only'
    },

]