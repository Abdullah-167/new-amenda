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
    const [activeTab, setActiveTab] = useState(1)
    const [checkedImages5, setCheckedImages5] = useState<CheckedImages>({});

    const handleTab = (index: any) => {
        setActiveTab(index)
    }

    const handleDropdoen = () => {
        setHandleModale(!handleModale)
    }

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


    const toggelCollection = () => {
        setHandleCollection(!handleCollection)
        setHandleModale(false)
    }

    useEffect(() => {
        if (handleCollection) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [handleCollection]);

    return (
        <section>
            <div className='pt-[30px]'>
                <div className='flex gap-[15px] items-center cursor-pointer mb-[20px]'>
                    <h1 className=' font-bold text-[#111827] text-[24px]'>Medienübersicht</h1>
                </div>
                {handleModale && (
                    <div className='shadow-dropdown absolute z-[2000] top-[80px]  min-w-[294px] bg-[#FFF] px-[30px] pb-[30px]'>
                        <p className='text-[#111827] text-lg font-bold py-[20px] cursor-pointer'>Collection 1</p>
                        <p className='text-[#111827] text-lg font-bold pb-[20px] cursor-pointer'>Collection 1</p>
                        <p className='text-[#111827] text-lg font-bold pb-[20px] cursor-pointer'>Collection 1</p>
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
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 ${activeTab === 1 ? 'bg-[#E5E7EB]' : ''} cursor-pointer`} width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleTab(1)}>
                                <path d="M15.2 4C16.0828 4 16.82 3.36025 17.0325 2.5L18.525 2.5C18.7872 2.5 19 2.276 19 2C19 1.724 18.7872 1.5 18.525 1.5L17.0325 1.5C16.82 0.63975 16.0828 0 15.2 0C14.3172 0 13.58 0.63975 13.3675 1.5L11.3326 1.5C11.12 0.63975 10.3828 0 9.5 0C8.61721 0 7.88001 0.63975 7.66745 1.5L5.63255 1.5C5.41999 0.63975 4.68279 0 3.8 0C2.91721 0 2.18001 0.63975 1.96745 1.5L0.475 1.5C0.212801 1.5 0 1.724 0 2C0 2.276 0.212801 2.5 0.475 2.5H1.96745C2.18001 3.36025 2.91721 4 3.8 4C4.68279 4 5.41999 3.36025 5.63255 2.5H7.66745C7.88001 3.36025 8.61721 4 9.5 4C10.3828 4 11.12 3.36025 11.3326 2.5L13.3675 2.5C13.58 3.36025 14.3172 4 15.2 4ZM15.2 1C15.7239 1 16.15 1.4485 16.15 2C16.15 2.5515 15.7239 3 15.2 3C14.6761 3 14.25 2.5515 14.25 2C14.25 1.4485 14.6761 1 15.2 1ZM3.8 3C3.27608 3 2.85 2.5515 2.85 2C2.85 1.4485 3.27608 1 3.8 1C4.32393 1 4.75 1.4485 4.75 2C4.75 2.5515 4.32393 3 3.8 3ZM9.5 3C8.97608 3 8.55 2.5515 8.55 2C8.55 1.4485 8.97608 1 9.5 1C10.0239 1 10.45 1.4485 10.45 2C10.45 2.5515 10.0239 3 9.5 3ZM17.1 14.5L17.1 7C17.1 6.8675 17.0499 6.74025 16.9608 6.6465L15.5358 5.1465C15.3503 4.95125 15.0497 4.95125 14.8642 5.1465L13.4392 6.6465C13.3501 6.74025 13.3 6.8675 13.3 7L13.3 14.5C13.3 14.776 13.5128 15 13.775 15L16.625 15C16.8872 15 17.1 14.776 17.1 14.5ZM14.25 14L14.25 7.207L15.2 6.207L16.15 7.207L16.15 14H14.25ZM11.4 14.5L11.4 7C11.4 6.8675 11.3499 6.74025 11.2608 6.6465L9.83583 5.1465C9.65034 4.95125 9.34966 4.95125 9.16418 5.1465L7.73917 6.6465C7.65011 6.74025 7.6 6.8675 7.6 7V14.5C7.6 14.776 7.8128 15 8.075 15H10.925C11.1872 15 11.4 14.776 11.4 14.5ZM8.55 14V7.207L9.5 6.207L10.45 7.207V14H8.55ZM5.7 14.5V7C5.7 6.8675 5.64989 6.74025 5.56083 6.6465L4.13583 5.1465C3.95034 4.95125 3.64966 4.95125 3.46418 5.1465L2.03918 6.6465C1.95011 6.74025 1.9 6.8675 1.9 7L1.9 14.5C1.9 14.776 2.1128 15 2.375 15L5.225 15C5.4872 15 5.7 14.776 5.7 14.5ZM2.85 14L2.85 7.207L3.8 6.207L4.75 7.207V14L2.85 14Z" fill="#111827" />
                            </svg>
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 ${activeTab === 2 ? 'bg-[#E5E7EB]' : ''} cursor-pointer`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleTab(2)}>
                                <path d="M3.125 5C3.125 4.50272 3.32254 4.02581 3.67417 3.67417C4.02581 3.32254 4.50272 3.125 5 3.125H6.875C7.37228 3.125 7.84919 3.32254 8.20082 3.67417C8.55246 4.02581 8.75 4.50272 8.75 5V6.875C8.75 7.37228 8.55246 7.84919 8.20082 8.20082C7.84919 8.55246 7.37228 8.75 6.875 8.75H5C4.50272 8.75 4.02581 8.55246 3.67417 8.20082C3.32254 7.84919 3.125 7.37228 3.125 6.875V5ZM3.125 13.125C3.125 12.6277 3.32254 12.1508 3.67417 11.7992C4.02581 11.4475 4.50272 11.25 5 11.25H6.875C7.37228 11.25 7.84919 11.4475 8.20082 11.7992C8.55246 12.1508 8.75 12.6277 8.75 13.125V15C8.75 15.4973 8.55246 15.9742 8.20082 16.3258C7.84919 16.6775 7.37228 16.875 6.875 16.875H5C4.50272 16.875 4.02581 16.6775 3.67417 16.3258C3.32254 15.9742 3.125 15.4973 3.125 15V13.125ZM11.25 5C11.25 4.50272 11.4475 4.02581 11.7992 3.67417C12.1508 3.32254 12.6277 3.125 13.125 3.125H15C15.4973 3.125 15.9742 3.32254 16.3258 3.67417C16.6775 4.02581 16.875 4.50272 16.875 5V6.875C16.875 7.37228 16.6775 7.84919 16.3258 8.20082C15.9742 8.55246 15.4973 8.75 15 8.75H13.125C12.6277 8.75 12.1508 8.55246 11.7992 8.20082C11.4475 7.84919 11.25 7.37228 11.25 6.875V5ZM11.25 13.125C11.25 12.6277 11.4475 12.1508 11.7992 11.7992C12.1508 11.4475 12.6277 11.25 13.125 11.25H15C15.4973 11.25 15.9742 11.4475 16.3258 11.7992C16.6775 12.1508 16.875 12.6277 16.875 13.125V15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875H13.125C12.6277 16.875 12.1508 16.6775 11.7992 16.3258C11.4475 15.9742 11.25 15.4973 11.25 15V13.125Z" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 ${activeTab === 3 ? 'bg-[#E5E7EB]' : ''} cursor-pointer`} width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleTab(3)}>
                                <path d="M5.5 2C5.22386 2 5 1.77614 5 1.5C5 1.22386 5.22386 1 5.5 1H18.5C18.7761 1 19 1.22386 19 1.5C19 1.77614 18.7761 2 18.5 2H5.5ZM5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H18.5C18.7761 6 19 6.22386 19 6.5C19 6.77614 18.7761 7 18.5 7H5.5ZM5.5 12C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11H18.5C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H5.5ZM0 1.5C0 0.671589 0.671126 0 1.5 0C2.32887 0 3 0.671589 3 1.5C3 2.32841 2.32887 3 1.5 3C0.671126 3 0 2.32841 0 1.5ZM1 1.5C1 1.77628 1.22357 2 1.5 2C1.77643 2 2 1.77628 2 1.5C2 1.22372 1.77643 1 1.5 1C1.22357 1 1 1.22372 1 1.5ZM0 6.5C0 5.67159 0.671126 5 1.5 5C2.32887 5 3 5.67159 3 6.5C3 7.32841 2.32887 8 1.5 8C0.671126 8 0 7.32841 0 6.5ZM1 6.5C1 6.77628 1.22357 7 1.5 7C1.77643 7 2 6.77628 2 6.5C2 6.22372 1.77643 6 1.5 6C1.22357 6 1 6.22372 1 6.5ZM0 11.5C0 10.6716 0.671126 10 1.5 10C2.32887 10 3 10.6716 3 11.5C3 12.3284 2.32887 13 1.5 13C0.671126 13 0 12.3284 0 11.5ZM1 11.5C1 11.7763 1.22357 12 1.5 12C1.77643 12 2 11.7763 2 11.5C2 11.2237 1.77643 11 1.5 11C1.22357 11 1 11.2237 1 11.5Z" fill="#797F88" />
                            </svg>
                        </div>
                        <div className='flex text-white justify-between gap-[20px] items-center py-[11px] px-[20px] cursor-pointer bg-[#111827] '>
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
                <div className='flex gap-2 items-center mb-10 '>
                    <div className='flex gap-2 items-center bg-[#111827] px-2 py-[5px] cursor-pointer'>
                        <p className='text-white text-sm block'>buildings</p>
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 7L6.5 2M1.5 2L6.5 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='flex gap-2 items-center bg-[#111827] px-2 py-[5px] cursor-pointer'>
                        <p className='text-white text-sm block'>buildings</p>
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 7L6.5 2M1.5 2L6.5 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='flex gap-2 items-center bg-[#111827] px-2 py-[5px] cursor-pointer'>
                        <p className='text-white text-sm block'>buildings</p>
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 7L6.5 2M1.5 2L6.5 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='flex gap-3 mb-10'>
                    <span className=' text-[#111827] text-sm font-bold'>Filter by Tags: </span>
                    <span className=' text-[#2286E0] text-sm font-bold'>#building</span>
                    <span className=' text-[#2286E0] text-sm font-bold'>#construction</span>
                    <span className=' text-[#2286E0] text-sm font-bold'>#amenda</span>
                    <span className=' text-[#2286E0] text-sm font-bold'>#projects</span>
                    <span className=' text-[#2286E0] text-sm font-bold'>#tag</span>
                    <span className=' text-[#2286E0] text-sm font-bold'>#germany</span>
                    <span className=' text-[#2286E0] text-sm font-bold'>#betreutes wohnen</span>
                </div>
                {/* <div className='flex justify-between items-center pb-[61px] 2xl:flex-nowrap flex-wrap 2xl:gap-y-0 gap-y-5'>
                    <div className='flex sm:flex-nowrap flex-wrap gap-4 sm:gap-10 2xl:gap-20'>
                        <div className='flex items-center gap-[10px] cursor-pointer'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58804 0 0 3.58804 0 8C0 12.412 3.58804 16 8 16C12.412 16 16 12.412 16 8C16 3.58804 12.412 0 8 0ZM8 1.06667C11.8355 1.06667 14.9333 4.16451 14.9333 8C14.9333 11.8355 11.8355 14.9333 8 14.9333C4.16451 14.9333 1.06667 11.8355 1.06667 8C1.06667 4.16451 4.16451 1.06667 8 1.06667ZM4.73889 4.26111C4.63838 4.27189 4.54301 4.311 4.46387 4.37389C4.38474 4.43679 4.32511 4.52087 4.29192 4.61635C4.25874 4.71183 4.25337 4.81477 4.27644 4.91319C4.2995 5.0116 4.35006 5.10144 4.42222 5.17222L7.24444 8L4.42222 10.8222C4.36765 10.8706 4.32358 10.9296 4.29273 10.9957C4.26187 11.0618 4.24489 11.1334 4.24283 11.2063C4.24077 11.2792 4.25367 11.3517 4.28075 11.4194C4.30782 11.4871 4.34849 11.5486 4.40024 11.5999C4.45198 11.6513 4.51371 11.6915 4.58161 11.7181C4.64952 11.7447 4.72214 11.757 4.79501 11.7544C4.86788 11.7518 4.93944 11.7343 5.00527 11.703C5.07111 11.6717 5.12982 11.6271 5.17778 11.5722L8 8.75L10.8222 11.5722C10.8702 11.6271 10.9289 11.6717 10.9947 11.703C11.0606 11.7343 11.1321 11.7518 11.205 11.7544C11.2779 11.757 11.3505 11.7447 11.4184 11.7181C11.4863 11.6915 11.548 11.6513 11.5998 11.5999C11.6515 11.5486 11.6922 11.4871 11.7193 11.4194C11.7463 11.3517 11.7592 11.2792 11.7572 11.2063C11.7551 11.1334 11.7381 11.0618 11.7073 10.9957C11.6764 10.9296 11.6323 10.8706 11.5778 10.8222L8.75556 8L11.5778 5.17222C11.6578 5.0942 11.7113 4.99302 11.7307 4.88297C11.7501 4.77291 11.7344 4.65954 11.6859 4.55886C11.6374 4.45817 11.5585 4.37527 11.4604 4.32184C11.3622 4.26842 11.2498 4.24718 11.1389 4.26111C11.018 4.27705 10.9063 4.33391 10.8222 4.42222L8 7.24444L5.17778 4.42222C5.12166 4.3638 5.05297 4.31893 4.97693 4.29102C4.90088 4.2631 4.81948 4.25288 4.73889 4.26111Z" fill="#797F88" />
                            </svg>
                            <p className='text-[#797F88] text-sm font-normal'>Auswahl zurücksetzen</p>
                        </div>
                        <div className='flex items-center gap-[10px] cursor-pointer'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58804 0 0 3.58804 0 8C0 12.412 3.58804 16 8 16C12.412 16 16 12.412 16 8C16 3.58804 12.412 0 8 0ZM8 1.06667C11.8355 1.06667 14.9333 4.16451 14.9333 8C14.9333 11.8355 11.8355 14.9333 8 14.9333C4.16451 14.9333 1.06667 11.8355 1.06667 8C1.06667 4.16451 4.16451 1.06667 8 1.06667ZM4.73889 4.26111C4.63838 4.27189 4.54301 4.311 4.46387 4.37389C4.38474 4.43679 4.32511 4.52087 4.29192 4.61635C4.25874 4.71183 4.25337 4.81477 4.27644 4.91319C4.2995 5.0116 4.35006 5.10144 4.42222 5.17222L7.24444 8L4.42222 10.8222C4.36765 10.8706 4.32358 10.9296 4.29273 10.9957C4.26187 11.0618 4.24489 11.1334 4.24283 11.2063C4.24077 11.2792 4.25367 11.3517 4.28075 11.4194C4.30782 11.4871 4.34849 11.5486 4.40024 11.5999C4.45198 11.6513 4.51371 11.6915 4.58161 11.7181C4.64952 11.7447 4.72214 11.757 4.79501 11.7544C4.86788 11.7518 4.93944 11.7343 5.00527 11.703C5.07111 11.6717 5.12982 11.6271 5.17778 11.5722L8 8.75L10.8222 11.5722C10.8702 11.6271 10.9289 11.6717 10.9947 11.703C11.0606 11.7343 11.1321 11.7518 11.205 11.7544C11.2779 11.757 11.3505 11.7447 11.4184 11.7181C11.4863 11.6915 11.548 11.6513 11.5998 11.5999C11.6515 11.5486 11.6922 11.4871 11.7193 11.4194C11.7463 11.3517 11.7592 11.2792 11.7572 11.2063C11.7551 11.1334 11.7381 11.0618 11.7073 10.9957C11.6764 10.9296 11.6323 10.8706 11.5778 10.8222L8.75556 8L11.5778 5.17222C11.6578 5.0942 11.7113 4.99302 11.7307 4.88297C11.7501 4.77291 11.7344 4.65954 11.6859 4.55886C11.6374 4.45817 11.5585 4.37527 11.4604 4.32184C11.3622 4.26842 11.2498 4.24718 11.1389 4.26111C11.018 4.27705 10.9063 4.33391 10.8222 4.42222L8 7.24444L5.17778 4.42222C5.12166 4.3638 5.05297 4.31893 4.97693 4.29102C4.90088 4.2631 4.81948 4.25288 4.73889 4.26111Z" fill="#797F88" />
                            </svg>
                            <p className='text-[#797F88] text-sm font-normal'>Auswahl zurücksetzen</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 border border-dashed border-[#111827] py-[11px] px-[15px] max-w-[195px] cursor-pointer'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92857 0C0.871265 0 0 0.871265 0 1.92857V10.9286C0 11.9859 0.871265 12.8571 1.92857 12.8571H2.57143V13.5C2.57143 14.5573 3.44269 15.4286 4.5 15.4286H5.14286V16.0714C5.14286 17.1287 6.01412 18 7.07143 18H16.0714C17.1287 18 18 17.1287 18 16.0714V7.07143C18 6.01412 17.1287 5.14286 16.0714 5.14286H15.4286V4.5C15.4286 3.44269 14.5573 2.57143 13.5 2.57143H12.8571V1.92857C12.8571 0.871265 11.9859 0 10.9286 0H1.92857ZM1.92857 1.28571H10.9286C11.2958 1.28571 11.5714 1.56131 11.5714 1.92857V2.57143H4.5C3.44269 2.57143 2.57143 3.44269 2.57143 4.5V11.5714H1.92857C1.56131 11.5714 1.28571 11.2958 1.28571 10.9286V1.92857C1.28571 1.56131 1.56131 1.28571 1.92857 1.28571ZM4.5 3.85714H13.5C13.8673 3.85714 14.1429 4.13274 14.1429 4.5V5.14286H7.07143C6.01412 5.14286 5.14286 6.01412 5.14286 7.07143V14.1429H4.5C4.13274 14.1429 3.85714 13.8673 3.85714 13.5V4.5C3.85714 4.13274 4.13274 3.85714 4.5 3.85714ZM7.07143 6.42857C10.0714 6.42857 13.0714 6.42857 16.0714 6.42857C16.4387 6.42857 16.7143 6.70417 16.7143 7.07143V16.0714C16.7143 16.4387 16.4387 16.7143 16.0714 16.7143H7.07143C6.70417 16.7143 6.42857 16.4387 6.42857 16.0714C6.42857 13.0714 6.42857 10.0714 6.42857 7.07143C6.42857 6.70417 6.70417 6.42857 7.07143 6.42857Z" fill="#111827" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5715 7.71426C11.401 7.71426 11.2375 7.78199 11.1169 7.90255C10.9964 8.02311 10.9286 8.18662 10.9286 8.35712V10.9285H8.35721C8.18672 10.9285 8.0232 10.9963 7.90264 11.1168C7.78208 11.2374 7.71436 11.4009 7.71436 11.5714C7.71436 11.7419 7.78208 11.9054 7.90264 12.026C8.0232 12.1465 8.18672 12.2143 8.35721 12.2143H10.9286V14.7857C10.9286 14.9562 10.9964 15.1197 11.1169 15.2403C11.2375 15.3608 11.401 15.4285 11.5715 15.4285C11.742 15.4285 11.9055 15.3608 12.0261 15.2403C12.1466 15.1197 12.2144 14.9562 12.2144 14.7857V12.2143H14.7858C14.9563 12.2143 15.1198 12.1465 15.2404 12.026C15.3609 11.9054 15.4286 11.7419 15.4286 11.5714C15.4286 11.4009 15.3609 11.2374 15.2404 11.1168C15.1198 10.9963 14.9563 10.9285 14.7858 10.9285H12.2144V8.35712C12.2144 8.18662 12.1466 8.02311 12.0261 7.90255C11.9055 7.78199 11.742 7.71426 11.5715 7.71426Z" fill="#111827" />
                        </svg>
                        <span className='text-[#111827] text-sm font-bold'>Sort into Collection</span>
                    </div>
                    <div className='flex sm:flex-nowrap flex-wrap gap-4 sm:gap-[30px]'>
                        <div className='flex items-center gap-[10px] cursor-pointer'>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 14.1714C0 15.1726 0.844641 16 1.86667 16H19.1333C20.1554 16 21 15.1726 21 14.1714C21 10.8191 21 7.46668 21 4.11429C21 2.86096 19.9461 1.82857 18.6667 1.82857H10.1281C9.87157 1.3645 9.57195 0.861515 9.24583 0.549986C8.93046 0.254167 8.47283 0 7.93333 0H1.86667C0.844641 0 0 0.827415 0 1.82857M1.4 1.82857C1.4 1.56346 1.59602 1.37143 1.86667 1.37143H7.93333C8.04017 1.37143 8.13037 1.40622 8.27604 1.54286C9.01052 2.47261 9.5248 3.60101 10.1208 4.67143C10.2403 4.88576 10.4841 5.02789 10.7333 5.02857H19.1333C19.404 5.02857 19.6 5.22059 19.6 5.48571V14.1714C19.6 14.4365 19.404 14.6286 19.1333 14.6286H1.86667C1.59602 14.6286 1.4 14.4365 1.4 14.1714M10.8938 3.2H18.6667C18.9811 3.2 19.2898 3.40953 19.4615 3.68571C19.3542 3.66651 19.2457 3.65714 19.1333 3.65714H11.149L10.8938 3.2Z" fill="#111827" />
                                <path d="M8.35124 13C8.05092 13 7.75061 12.929 7.48273 12.787C7.28497 12.6824 7.12801 12.5385 6.81618 12.2526C6.50331 11.9658 6.3474 11.8228 6.2323 11.6406C5.92257 11.1493 5.92257 10.5392 6.2323 10.048C6.34636 9.86665 6.50331 9.72274 6.81514 9.43684L8.0436 8.31052C8.35542 8.02462 8.51238 7.88072 8.71015 7.77614C9.2459 7.49216 9.91141 7.49216 10.4472 7.77614C10.6449 7.88072 10.8019 8.02462 11.1137 8.31052C11.4255 8.59642 11.5825 8.74033 11.6965 8.92165C12.0063 9.41286 12.0063 10.023 11.6965 10.5142C11.6338 10.613 11.5542 10.708 11.4276 10.8318C11.2644 10.993 10.9892 11.0006 10.8134 10.851C10.6376 10.7013 10.6282 10.449 10.7925 10.2878C10.8709 10.2111 10.9159 10.1593 10.9431 10.1161C11.098 9.87048 11.098 9.5654 10.9431 9.3198C10.8856 9.22865 10.7485 9.10297 10.4984 8.87368C10.2483 8.64439 10.1102 8.51775 10.0108 8.46498C9.74294 8.32299 9.41018 8.32299 9.14231 8.46498C9.0429 8.51775 8.90583 8.64343 8.65574 8.87272L7.42728 9.99904C7.17719 10.2283 7.03907 10.355 6.98256 10.4452C6.82769 10.6908 6.82769 10.9958 6.98256 11.2414C7.04011 11.3326 7.17719 11.4583 7.42728 11.6876C7.67736 11.9169 7.81549 12.0435 7.91385 12.0953C8.18172 12.2373 8.51448 12.2373 8.78235 12.0953C8.83049 12.0704 8.88594 12.0291 8.9707 11.9571C9.14649 11.8075 9.42065 11.8161 9.58493 11.9763C9.74817 12.1375 9.73875 12.3889 9.564 12.5395C9.42902 12.6546 9.32543 12.7285 9.21765 12.7861C8.94977 12.928 8.64946 12.999 8.34915 12.999L8.35124 13ZM11.4224 12.4368C11.1221 12.4368 10.8218 12.3658 10.5539 12.2239C10.3561 12.1193 10.1992 11.9754 9.88734 11.6895C9.57551 11.4036 9.41856 11.2597 9.30345 11.0774C8.99372 10.5862 8.99372 9.97602 9.30345 9.48481C9.36624 9.38599 9.44576 9.29101 9.57238 9.16725C9.73561 9.00608 10.0108 8.9984 10.1866 9.14807C10.3624 9.29773 10.3708 9.55005 10.2075 9.71122C10.1291 9.78798 10.0841 9.83978 10.0569 9.88295C9.90199 10.1286 9.90199 10.4336 10.0569 10.6792C10.1144 10.7704 10.2515 10.8961 10.5016 11.1254C10.7517 11.3547 10.8898 11.4813 10.9881 11.5331C11.256 11.6751 11.5888 11.6751 11.8566 11.5331C11.9561 11.4803 12.0931 11.3547 12.3432 11.1254L13.5717 9.99904C13.8218 9.76975 13.9599 9.64311 14.0164 9.55293C14.1713 9.30732 14.1713 9.00224 14.0164 8.75664C13.9588 8.66549 13.8218 8.53981 13.5717 8.31052C13.3216 8.08123 13.1835 7.95459 13.0851 7.90278C12.8172 7.76079 12.4845 7.76079 12.2166 7.90278C12.1685 7.92773 12.113 7.96898 12.0283 8.04189C11.8525 8.19156 11.5783 8.18292 11.414 8.02271C11.2508 7.86153 11.2602 7.61017 11.4349 7.45955C11.5699 7.34442 11.6735 7.27055 11.7813 7.21298C12.3171 6.92901 12.9826 6.92901 13.5183 7.21298C13.7161 7.31756 13.873 7.46146 14.1849 7.74736C14.4967 8.03326 14.6536 8.17717 14.7677 8.35849C15.0774 8.8497 15.0774 9.45987 14.7677 9.95107C14.6536 10.1324 14.4967 10.2763 14.1849 10.5622L12.9564 11.6885C12.6446 11.9744 12.4876 12.1183 12.2899 12.2229C12.022 12.3649 11.7217 12.4359 11.4213 12.4359L11.4224 12.4368Z" fill="#111827" />
                            </svg>
                            <p className='text-[#111827] text-sm font-normal'>Auswahl zurücksetzen</p>
                        </div>
                        <div className='flex items-center gap-[10px] cursor-pointer'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.055 6.74999L10.7955 13.5M7.2045 13.5L6.945 6.74999M14.421 4.34249C14.6775 4.38149 14.9325 4.42274 15.1875 4.46699M14.421 4.34249L13.62 14.7547C13.5873 15.1787 13.3958 15.5746 13.0838 15.8634C12.7717 16.1522 12.3622 16.3126 11.937 16.3125H6.063C5.63782 16.3126 5.22827 16.1522 4.91623 15.8634C4.6042 15.5746 4.41269 15.1787 4.38 14.7547L3.579 4.34249M14.421 4.34249C13.5554 4.21163 12.6853 4.11232 11.8125 4.04474M3.579 4.34249C3.3225 4.38074 3.0675 4.42199 2.8125 4.46624M3.579 4.34249C4.4446 4.21163 5.31468 4.11232 6.1875 4.04474M11.8125 4.04474V3.35774C11.8125 2.47274 11.13 1.73474 10.245 1.70699C9.41521 1.68047 8.58479 1.68047 7.755 1.70699C6.87 1.73474 6.1875 2.47349 6.1875 3.35774V4.04474M11.8125 4.04474C9.94029 3.90005 8.05971 3.90005 6.1875 4.04474" stroke="#C83F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-[#C83F3F] text-sm font-normal'>Auswahl zurücksetzen</p>
                        </div>
                        <svg className='ml-[10px] cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2.5C12.2958 2.5 14.5458 2.69334 16.7358 3.065C17.18 3.14 17.5 3.52834 17.5 3.97834V4.84834C17.5 5.09456 17.4515 5.33838 17.3573 5.56587C17.2631 5.79336 17.1249 6.00006 16.9508 6.17417L12.4242 10.7008C12.2501 10.8749 12.1119 11.0816 12.0177 11.3091C11.9235 11.5366 11.875 11.7804 11.875 12.0267V14.4658C11.8751 14.8141 11.7781 15.1556 11.595 15.4519C11.4119 15.7482 11.1499 15.9876 10.8383 16.1433L8.125 17.5V12.0267C8.125 11.7804 8.07651 11.5366 7.98228 11.3091C7.88805 11.0816 7.74994 10.8749 7.57583 10.7008L3.04917 6.17417C2.87506 6.00006 2.73695 5.79336 2.64272 5.56587C2.54849 5.33838 2.5 5.09456 2.5 4.84834V3.97834C2.5 3.52834 2.82 3.14 3.26417 3.065C5.48964 2.68821 7.74286 2.49921 10 2.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div> */}
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
                                <h2 className=' text-2xl text-[#111827] pb-[30px] font-bold text-center'>Create New Collection</h2>
                                <div className='pb-[20px]'>
                                    <label className='text-[#797F88] text-sm pb-[12px] block'>Collection Name</label>
                                    <input className='bg-[#F3F4F6]  outline-none py-[12px] px-2 w-full' type="text" />
                                </div>
                                <div className='pb-[20px]'>
                                    <label className='text-[#797F88] text-sm pb-[12px] block'>Description</label>
                                    <textarea className='bg-[#F3F4F6]  outline-none py-[10px] px-2 min-h-[130px] w-full' />
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-[#797F88] text-sm pb-[12px] block'>Auto Create from Tags</p>
                                    <sup className='pt-2'>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216641 4.00021 -0.0968502 5.00555 0.0960758 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.23479 3.05465 9.711 4.02455 9.90392C4.99445 10.0969 5.99979 9.99783 6.91342 9.6194C7.82705 9.24096 8.60794 8.60009 9.15735 7.77785C9.70676 6.9556 10 5.98891 10 5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526784 6.32608 0 5 0ZM5.86 7.579C5.83811 7.60674 5.81215 7.63101 5.783 7.651C5.38117 7.93812 4.90084 8.09485 4.407 8.1C3.955 8.1 3.707 7.785 3.807 7.345C3.933 6.817 4.064 6.291 4.192 5.764C4.20993 5.71757 4.21855 5.66806 4.21734 5.6183C4.21614 5.56854 4.20515 5.51951 4.185 5.474C4.14631 5.41154 4.08736 5.36424 4.018 5.34C3.97942 5.32931 3.93991 5.32227 3.9 5.319C3.852 5.308 3.781 5.3 3.746 5.247L3.735 5.23C3.72258 5.21194 3.71394 5.19157 3.70957 5.17009C3.70521 5.14861 3.70522 5.12648 3.70961 5.10501C3.714 5.08354 3.72267 5.06317 3.73511 5.04513C3.74755 5.02709 3.7635 5.01174 3.782 5L3.873 4.94L4.008 4.865C4.08834 4.82301 4.17116 4.78594 4.256 4.754C4.42928 4.68548 4.60878 4.63391 4.792 4.6C4.90273 4.58028 5.01464 4.56792 5.127 4.563C5.2178 4.56262 5.30836 4.57235 5.397 4.592C5.722 4.67 5.885 4.959 5.797 5.311C5.672 5.843 5.539 6.373 5.409 6.9C5.347 7.152 5.409 7.262 5.663 7.33C5.701 7.34 5.74 7.347 5.779 7.356C5.91 7.39 5.941 7.472 5.86 7.579ZM5.433 3.607C5.26385 3.6062 5.09874 3.55517 4.95862 3.46041C4.8185 3.36564 4.70968 3.23139 4.64596 3.07469C4.58224 2.918 4.5665 2.7459 4.60072 2.58024C4.63494 2.41458 4.71759 2.26282 4.83818 2.14419C4.95877 2.02557 5.11188 1.94543 5.27808 1.91394C5.44428 1.88245 5.61609 1.90102 5.77171 1.96731C5.92734 2.0336 6.05978 2.14461 6.15223 2.28627C6.24468 2.42793 6.29298 2.59385 6.291 2.763C6.28784 2.98829 6.19599 3.20324 6.03537 3.36124C5.87475 3.51924 5.65831 3.60755 5.433 3.607Z" fill="#797F88" />
                                        </svg>
                                    </sup>
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
                                <p className='text-[#797F88] text-sm block cursor-pointer pb-3'>Share with</p>
                                <div className='flex gap-2 items-center bg-[#F3F4F6] py-[9px] px-[10px] mb-[30px]'>
                                    <div className='flex gap-2 items-center bg-[#fff] px-2 py-[5px] cursor-pointer'>
                                        <Image src={'/vin.svg'} alt='' width={26} height={26} />
                                        <p className='text-[#797F88] text-sm block'>buildings</p>
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 6.5L6.5 1.5M1.5 1.5L6.5 6.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className='text-[#797F88] text-sm block cursor-pointer'>Add more</p>
                                </div>
                                <div className='flex text-white text-center justify-center py-[11px] px-[20px] cursor-pointer bg-[#111827] ' onClick={toggelCollection}>
                                    <span>Creat New Collection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
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
                )}
                {activeTab === 2 && (
                    <div>
                        {DataE.map((item, index) => {
                            return (
                                <div className="sm:block hidden relative" key={index}
                                >
                                    <div
                                        className={`transition-all duration-1000 relative ${activeTab ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        <div className={` grid grid-cols-2 xl:grid-cols-4 gap-5 pb-5 relative`}>
                                            {item.data.map((newItem, idx) => {
                                                return (
                                                    <div key={idx} className="z-[1000] relative">
                                                        <div className="time-line-tags relative max-w-[376px] max-h-[376px] overflow-hidden">
                                                            <Image className=" object-cover" src={newItem.mainImg} width={376} height={376} alt="time-line-image" />
                                                            <section className={` absolute w-full bottom-0 pb-1 px-1`}>
                                                                {newItem.isImgname && (
                                                                    <p className="text-sm text-white pb-2">{newItem.imgName}</p>
                                                                )}
                                                                <div className="flex flex-wrap gap-2 ">
                                                                    {newItem.isBtnOne && (
                                                                        <p className='time-line-tags-btn  text-white font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnOne}</p>
                                                                    )}
                                                                    {newItem.isBtnTwo && (
                                                                        <p className='bg-white text-black  font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnTwo}</p>
                                                                    )}
                                                                    {newItem.isBtnThree && (

                                                                        <p className='time-line-tags-btn  text-white font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnThree}</p>
                                                                    )}
                                                                    {newItem.isBtnFour && (
                                                                        <p className='time-line-tags-btn  text-white font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnFour}</p>
                                                                    )}
                                                                </div>
                                                            </section>
                                                            <section className={` absolute w-full top-0 right-0 pb-1 px-1`}>
                                                                <div className="flex justify-end flex-wrap gap-2 ">
                                                                    {newItem.isImgTopBtn && (
                                                                        <div className='flex gap-[10px] px-3 py-[10px] items-center bg-[#FFF] opacity-75 '>
                                                                            <span className=" text-[#111827] text-[13px] font-bold">{newItem.imgTopBtn}</span>
                                                                            <span>
                                                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M4 0H6V10H4V0Z" fill="#111827" />
                                                                                    <path d="M0 4H10V6H0V4Z" fill="#111827" />
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </section>
                                                            <main className="bg-black flex justify-center items-center inset-y-0 bg-opacity-40 absolute w-full h-full top-0 cursor-pointer">
                                                                <div className="flex justify-center gap-1 py-1 max-w-[120px] px-2 mx-auto bg-white items-center">
                                                                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22208 0.729675C4.84042 0.729858 1.71996 2.55531 0.0621249 5.50267C0.0214265 5.57502 3.20479e-05 5.65662 3.59768e-08 5.73963C-3.19759e-05 5.82263 0.0212995 5.90425 0.0619421 5.97663C1.71813 8.92637 4.83914 10.754 8.2219 10.7555C8.22171 10.7555 8.22208 10.7555 8.2219 10.7555C11.6036 10.7542 14.7242 8.92765 16.3809 5.97955C16.4216 5.90719 16.443 5.82558 16.443 5.74257C16.443 5.65957 16.4216 5.57796 16.3809 5.5056C14.7242 2.5575 11.6037 0.731138 8.22208 0.729675C8.2222 0.729675 8.22196 0.729675 8.22208 0.729675ZM8.2219 1.69696C11.1643 1.69806 13.8821 3.23727 15.3992 5.74267C13.8821 8.24788 11.1645 9.78691 8.22245 9.78819C5.2791 9.78709 2.56058 8.24678 1.04367 5.73992C2.56167 3.23544 5.27983 1.69714 8.2219 1.69696ZM8.22153 2.81065C6.60793 2.81065 5.28952 4.12906 5.28952 5.74267C5.28952 7.35609 6.60793 8.6745 8.22153 8.6745C9.83495 8.6745 11.1534 7.35609 11.1534 5.74267C11.1534 4.12906 9.83495 2.81065 8.22153 2.81065ZM8.22153 3.77794C9.31219 3.77794 10.1861 4.65182 10.1861 5.74267C10.1861 6.83333 9.31219 7.70721 8.22153 7.70721C7.13069 7.70721 6.2568 6.83333 6.2568 5.74267C6.2568 4.65182 7.13069 3.77794 8.22153 3.77794Z" fill="black" />
                                                                    </svg>
                                                                    <p className="text-[13px] text-[#111827] font-medium">View Images</p>
                                                                </div>
                                                            </main>
                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {activeTab === 3 && (
                    <div>
                        {
                            DataE.map((item, index) => {
                                return (
                                    <div className="sm:block hidden relative" key={index}
                                    >
                                        <div
                                            className={`transition-all duration-1000 relative ${activeTab ? "opacity-100" : "opacity-0"
                                                }`}
                                        >
                                            <div className={` pb-5 relative`}>
                                                {item.data.map((newItem, idx) => {
                                                    return (
                                                        <div className=" border-b border-b-[#E5E7EB] flex items-center 2xl:flex-nowrap flex-wrap justify-between pb-[30px] mb-[30px]"
                                                            key={idx}
                                                        >
                                                            <div className="flex justify-between gap-10 items-center 2xl:mb-0 mb-5">
                                                                <Image className=" object-cover" src={newItem.mainImg} width={100} height={100} alt="time-line-image" />
                                                                <div>
                                                                    <p className=" 2xl:whitespace-nowrap text-[#111827] text-base font-normal pb-[7px]">{newItem.imgName}</p>
                                                                    <span className="text-[#797F88] text-[14px]">Created: 9/27/2023</span>
                                                                </div>
                                                                <p className="max-w-[570px] pl-[21px] text-[#797F88] text-[15px]">{newItem.description}</p>
                                                            </div>
                                                            <div className=" flex gap-[5px]">
                                                                <p className='cursor-pointer text-[14px] text-[#797F88] bg-[#F3F4F6] py-[7px] px-3 flex justify-center items-center mb-2'>{newItem.btnOne}</p>
                                                                <p className='cursor-pointer text-[14px] text-[#797F88] bg-[#F3F4F6] py-[7px] px-3 flex justify-center items-center mb-2'>{newItem.btnTwo}</p>
                                                                <p className='cursor-pointer text-[14px] text-[#797F88] bg-[#F3F4F6] py-[7px] px-3 flex justify-center items-center mb-2'>{newItem.btnThree}</p>
                                                                <p className='cursor-pointer text-[14px] text-[#797F88] bg-[#F3F4F6] py-[7px] px-3 flex justify-center items-center mb-2'>{newItem.btnFour}</p>
                                                            </div>
                                                            {/* <section className={` absolute w-full h-full top-[130px] pb-1 px-1`}>
                                                            {newItem.isImgname && (
                                                                <p className="text-sm text-white pb-2">{newItem.imgName}</p>
                                                            )}
                                                            <div className="flex flex-wrap gap-2 ">
                                                                {newItem.isBtnOne && (
                                                                    <p className='time-line-tags-btn  text-white font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnOne}</p>
                                                                )}
                                                                {newItem.isBtnTwo && (
                                                                    <p className='bg-white text-black  font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnTwo}</p>
                                                                )}
                                                                {newItem.isBtnThree && (

                                                                    <p className='time-line-tags-btn  text-white font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnThree}</p>
                                                                )}
                                                                {newItem.isBtnFour && (
                                                                    <p className='time-line-tags-btn  text-white font-medium cursor-pointer py-[5px] px-1.5 flex justify-center items-center'>{newItem.btnFour}</p>
                                                                )}
                                                            </div>
                                                        </section> */}
                                                            {/* <main className="bg-black inset-y-0 bg-opacity-40 absolute w-full h-full top-0 cursor-pointer">
                                                            <div className="flex gap-1 py-1 max-w-[120px] mt-[110px] px-2 mx-auto bg-white items-center justify-center">
                                                                <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22208 0.729675C4.84042 0.729858 1.71996 2.55531 0.0621249 5.50267C0.0214265 5.57502 3.20479e-05 5.65662 3.59768e-08 5.73963C-3.19759e-05 5.82263 0.0212995 5.90425 0.0619421 5.97663C1.71813 8.92637 4.83914 10.754 8.2219 10.7555C8.22171 10.7555 8.22208 10.7555 8.2219 10.7555C11.6036 10.7542 14.7242 8.92765 16.3809 5.97955C16.4216 5.90719 16.443 5.82558 16.443 5.74257C16.443 5.65957 16.4216 5.57796 16.3809 5.5056C14.7242 2.5575 11.6037 0.731138 8.22208 0.729675C8.2222 0.729675 8.22196 0.729675 8.22208 0.729675ZM8.2219 1.69696C11.1643 1.69806 13.8821 3.23727 15.3992 5.74267C13.8821 8.24788 11.1645 9.78691 8.22245 9.78819C5.2791 9.78709 2.56058 8.24678 1.04367 5.73992C2.56167 3.23544 5.27983 1.69714 8.2219 1.69696ZM8.22153 2.81065C6.60793 2.81065 5.28952 4.12906 5.28952 5.74267C5.28952 7.35609 6.60793 8.6745 8.22153 8.6745C9.83495 8.6745 11.1534 7.35609 11.1534 5.74267C11.1534 4.12906 9.83495 2.81065 8.22153 2.81065ZM8.22153 3.77794C9.31219 3.77794 10.1861 4.65182 10.1861 5.74267C10.1861 6.83333 9.31219 7.70721 8.22153 7.70721C7.13069 7.70721 6.2568 6.83333 6.2568 5.74267C6.2568 4.65182 7.13069 3.77794 8.22153 3.77794Z" fill="black" />
                                                                </svg>
                                                                <p className="text-[13px] text-[#111827] font-medium">View Images</p>
                                                            </div>
                                                        </main> */}
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                )}

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



const DataE = [
    {
        data: [
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',
                isImgname: true,
                btnOne: 'buildings',
                btnTwo: 'construction',
                btnThree: 'amenda',
                btnFour: 'this is a long tag',
                isBtnOne: true,
                isBtnTwo: true,
                isBtnThree: true,
                isBtnFour: true
            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',
                isImgname: true,
                btnOne: 'buildings',
                btnTwo: 'construction',
                btnThree: 'amenda',
                btnFour: 'this is a long tag',
                isBtnOne: true,
                isBtnTwo: true,
                isBtnThree: true,
                isBtnFour: true
            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',
                isImgname: true,
                btnOne: 'buildings',
                btnTwo: 'construction',
                btnThree: 'amenda',
                btnFour: 'this is a long tag',
                isBtnOne: true,
                isBtnTwo: true,
                isBtnThree: true,
                isBtnFour: true
            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',
                isImgname: true,
                btnOne: 'buildings',
                btnTwo: 'construction',
                btnThree: 'amenda',
                btnFour: 'this is a long tag',
                isBtnOne: true,
                isBtnTwo: true,
                isBtnThree: true,
                isBtnFour: true
            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',
                isImgname: true,
                btnOne: 'buildings',
                btnTwo: 'construction',
                btnThree: 'amenda',
                btnFour: 'this is a long tag',
                isBtnOne: true,
                isBtnTwo: true,
                isBtnThree: true,
                isBtnFour: true
            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',
                isImgname: true,
                btnOne: 'buildings',
                btnTwo: 'construction',
                btnThree: 'amenda',
                btnFour: 'this is a long tag',
                isBtnOne: true,
                isBtnTwo: true,
                isBtnThree: true,
                isBtnFour: true
            },

        ],
    },
];