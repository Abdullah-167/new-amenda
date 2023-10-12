import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


const TimeLine = () => {
    const [activeTab, setActiveTab] = useState(DataA[0].id);
    const [activeIconsIdx, setActiveIconsIdx] = useState(null);
    const [isHovered, setIsHovered] = useState(true);
    const [toggelDesign, setToggelDesign] = useState(null);
    const [text, setText] = useState(0);


    const handleTextBorder = (index: any) => {
        setText(index)
    }


    const handleTabClick = (tabId: any) => {
        setActiveTab(tabId);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(true);
    };
    const toggleIcons = (idx: any) => {
        if (activeIconsIdx === idx) {
            setActiveIconsIdx(null);
        } else {
            setActiveIconsIdx(idx);
        }
    };

    const handleClick = (itemId: any) => {
        setActiveTab(itemId);
    };



    function generateSlug(str: any) {
        return str
            .toLowerCase()
            .replace(/ /g, '-')
            ;
    }


    return (
        <div className="py-12 pr-5">
            <div className=" mx-auto relative ">
                <div className=" pb-10">
                    <div className=" flex 2xl:gap-0 gap-5 justify-between border-t border-t-[#E5E7EB] border-b border-b-[#E5E7EB] py-5 mb-5">
                        <div className="flex gap-4 px-5 xl:overflow-auto overflow-x-scroll">
                            {DataA.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={` py-3 px-3 cursor-pointer ${activeTab === item.id ? 'bg-[#111827] text-white' : 'text-[#797F88]'}`}
                                        onClick={() => handleClick(item.id)}
                                    >
                                        <h2 className="text-sm whitespace-nowrap">{item.btnHeading}</h2>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 ${text === 0 ? 'bg-[#E5E7EB]' : ''} cursor-pointer`} width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleTextBorder(0)}>
                                <path d="M15.2 4C16.0828 4 16.82 3.36025 17.0325 2.5L18.525 2.5C18.7872 2.5 19 2.276 19 2C19 1.724 18.7872 1.5 18.525 1.5L17.0325 1.5C16.82 0.63975 16.0828 0 15.2 0C14.3172 0 13.58 0.63975 13.3675 1.5L11.3326 1.5C11.12 0.63975 10.3828 0 9.5 0C8.61721 0 7.88001 0.63975 7.66745 1.5L5.63255 1.5C5.41999 0.63975 4.68279 0 3.8 0C2.91721 0 2.18001 0.63975 1.96745 1.5L0.475 1.5C0.212801 1.5 0 1.724 0 2C0 2.276 0.212801 2.5 0.475 2.5H1.96745C2.18001 3.36025 2.91721 4 3.8 4C4.68279 4 5.41999 3.36025 5.63255 2.5H7.66745C7.88001 3.36025 8.61721 4 9.5 4C10.3828 4 11.12 3.36025 11.3326 2.5L13.3675 2.5C13.58 3.36025 14.3172 4 15.2 4ZM15.2 1C15.7239 1 16.15 1.4485 16.15 2C16.15 2.5515 15.7239 3 15.2 3C14.6761 3 14.25 2.5515 14.25 2C14.25 1.4485 14.6761 1 15.2 1ZM3.8 3C3.27608 3 2.85 2.5515 2.85 2C2.85 1.4485 3.27608 1 3.8 1C4.32393 1 4.75 1.4485 4.75 2C4.75 2.5515 4.32393 3 3.8 3ZM9.5 3C8.97608 3 8.55 2.5515 8.55 2C8.55 1.4485 8.97608 1 9.5 1C10.0239 1 10.45 1.4485 10.45 2C10.45 2.5515 10.0239 3 9.5 3ZM17.1 14.5L17.1 7C17.1 6.8675 17.0499 6.74025 16.9608 6.6465L15.5358 5.1465C15.3503 4.95125 15.0497 4.95125 14.8642 5.1465L13.4392 6.6465C13.3501 6.74025 13.3 6.8675 13.3 7L13.3 14.5C13.3 14.776 13.5128 15 13.775 15L16.625 15C16.8872 15 17.1 14.776 17.1 14.5ZM14.25 14L14.25 7.207L15.2 6.207L16.15 7.207L16.15 14H14.25ZM11.4 14.5L11.4 7C11.4 6.8675 11.3499 6.74025 11.2608 6.6465L9.83583 5.1465C9.65034 4.95125 9.34966 4.95125 9.16418 5.1465L7.73917 6.6465C7.65011 6.74025 7.6 6.8675 7.6 7V14.5C7.6 14.776 7.8128 15 8.075 15H10.925C11.1872 15 11.4 14.776 11.4 14.5ZM8.55 14V7.207L9.5 6.207L10.45 7.207V14H8.55ZM5.7 14.5V7C5.7 6.8675 5.64989 6.74025 5.56083 6.6465L4.13583 5.1465C3.95034 4.95125 3.64966 4.95125 3.46418 5.1465L2.03918 6.6465C1.95011 6.74025 1.9 6.8675 1.9 7L1.9 14.5C1.9 14.776 2.1128 15 2.375 15L5.225 15C5.4872 15 5.7 14.776 5.7 14.5ZM2.85 14L2.85 7.207L3.8 6.207L4.75 7.207V14L2.85 14Z" fill="#111827" />
                            </svg>
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 ${text === 1 ? 'bg-[#E5E7EB]' : ''} cursor-pointer`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleTextBorder(1)}>
                                <path d="M3.125 5C3.125 4.50272 3.32254 4.02581 3.67417 3.67417C4.02581 3.32254 4.50272 3.125 5 3.125H6.875C7.37228 3.125 7.84919 3.32254 8.20082 3.67417C8.55246 4.02581 8.75 4.50272 8.75 5V6.875C8.75 7.37228 8.55246 7.84919 8.20082 8.20082C7.84919 8.55246 7.37228 8.75 6.875 8.75H5C4.50272 8.75 4.02581 8.55246 3.67417 8.20082C3.32254 7.84919 3.125 7.37228 3.125 6.875V5ZM3.125 13.125C3.125 12.6277 3.32254 12.1508 3.67417 11.7992C4.02581 11.4475 4.50272 11.25 5 11.25H6.875C7.37228 11.25 7.84919 11.4475 8.20082 11.7992C8.55246 12.1508 8.75 12.6277 8.75 13.125V15C8.75 15.4973 8.55246 15.9742 8.20082 16.3258C7.84919 16.6775 7.37228 16.875 6.875 16.875H5C4.50272 16.875 4.02581 16.6775 3.67417 16.3258C3.32254 15.9742 3.125 15.4973 3.125 15V13.125ZM11.25 5C11.25 4.50272 11.4475 4.02581 11.7992 3.67417C12.1508 3.32254 12.6277 3.125 13.125 3.125H15C15.4973 3.125 15.9742 3.32254 16.3258 3.67417C16.6775 4.02581 16.875 4.50272 16.875 5V6.875C16.875 7.37228 16.6775 7.84919 16.3258 8.20082C15.9742 8.55246 15.4973 8.75 15 8.75H13.125C12.6277 8.75 12.1508 8.55246 11.7992 8.20082C11.4475 7.84919 11.25 7.37228 11.25 6.875V5ZM11.25 13.125C11.25 12.6277 11.4475 12.1508 11.7992 11.7992C12.1508 11.4475 12.6277 11.25 13.125 11.25H15C15.4973 11.25 15.9742 11.4475 16.3258 11.7992C16.6775 12.1508 16.875 12.6277 16.875 13.125V15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875H13.125C12.6277 16.875 12.1508 16.6775 11.7992 16.3258C11.4475 15.9742 11.25 15.4973 11.25 15V13.125Z" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className={` min-w-[30px] min-h-[30px] p-0.5 ${text === 2 ? 'bg-[#E5E7EB]' : ''} cursor-pointer`} width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleTextBorder(2)}>
                                <path d="M5.5 2C5.22386 2 5 1.77614 5 1.5C5 1.22386 5.22386 1 5.5 1H18.5C18.7761 1 19 1.22386 19 1.5C19 1.77614 18.7761 2 18.5 2H5.5ZM5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H18.5C18.7761 6 19 6.22386 19 6.5C19 6.77614 18.7761 7 18.5 7H5.5ZM5.5 12C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11H18.5C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H5.5ZM0 1.5C0 0.671589 0.671126 0 1.5 0C2.32887 0 3 0.671589 3 1.5C3 2.32841 2.32887 3 1.5 3C0.671126 3 0 2.32841 0 1.5ZM1 1.5C1 1.77628 1.22357 2 1.5 2C1.77643 2 2 1.77628 2 1.5C2 1.22372 1.77643 1 1.5 1C1.22357 1 1 1.22372 1 1.5ZM0 6.5C0 5.67159 0.671126 5 1.5 5C2.32887 5 3 5.67159 3 6.5C3 7.32841 2.32887 8 1.5 8C0.671126 8 0 7.32841 0 6.5ZM1 6.5C1 6.77628 1.22357 7 1.5 7C1.77643 7 2 6.77628 2 6.5C2 6.22372 1.77643 6 1.5 6C1.22357 6 1 6.22372 1 6.5ZM0 11.5C0 10.6716 0.671126 10 1.5 10C2.32887 10 3 10.6716 3 11.5C3 12.3284 2.32887 13 1.5 13C0.671126 13 0 12.3284 0 11.5ZM1 11.5C1 11.7763 1.22357 12 1.5 12C1.77643 12 2 11.7763 2 11.5C2 11.2237 1.77643 11 1.5 11C1.22357 11 1 11.2237 1 11.5Z" fill="#797F88" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div className="mb-[26px] flex gap-2 items-center cursor-pointer border border-[#111827] px-3 py-2 max-w-[130px] justify-center">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.97469 0.551252C3.97469 0.397029 3.91832 0.266643 3.80575 0.160092C3.70492 0.0533641 3.57759 0 3.42341 0C3.26337 0 3.12697 0.053542 3.0144 0.160092C2.91375 0.266821 2.86325 0.397029 2.86325 0.551252V2.56148C2.85133 2.57322 2.84244 2.58229 2.83657 2.58816C2.66461 2.75395 2.57872 2.94979 2.57872 3.17499C2.57872 3.40641 2.66461 3.6019 2.83657 3.76217C2.99075 3.9164 3.18637 3.99324 3.42341 3.99324C3.64268 3.99324 3.83527 3.9164 4.00136 3.76217C4.16141 3.60208 4.24144 3.40641 4.24144 3.17499C4.24144 2.94979 4.16141 2.75395 4.00136 2.58816C3.99532 2.58229 3.9866 2.57322 3.97469 2.56148V0.551252ZM4.50818 0.995953V2.11678H6.3754V0.995953H4.50818ZM8.55382 0.995953V2.11678H10.4833V0.995953H8.55382ZM8.02033 0.551252C8.02033 0.397029 7.96396 0.266643 7.85139 0.160092C7.75056 0.0533641 7.62021 0 7.46017 0C7.30599 0 7.17262 0.053542 7.06005 0.160092C6.9594 0.266821 6.90889 0.397029 6.90889 0.551252V2.56148C6.89698 2.57322 6.88506 2.58229 6.87333 2.58816C6.70723 2.75395 6.62436 2.94979 6.62436 3.17499C6.62436 3.40641 6.70723 3.6019 6.87333 3.76217C7.03337 3.9164 7.22899 3.99324 7.46017 3.99324C7.68548 3.99324 7.88109 3.9164 8.04701 3.76217C8.20705 3.60208 8.28708 3.40641 8.28708 3.17499C8.28708 2.94979 8.20705 2.75395 8.04701 2.58816C8.04096 2.58229 8.03225 2.57322 8.02033 2.56148V0.551252ZM12.6617 1.03171V2.16125C13.4797 2.28559 13.8887 2.8283 13.8887 3.78886V5.15836H1.12051V3.78886C1.12051 2.84004 1.52365 2.29733 2.32976 2.16125V1.03171C0.776764 1.16796 0 2.08689 0 3.78886V13.2165C0 15.0722 0.930588 16 2.79194 16H12.217C14.0724 16 15 15.072 15 13.2165V4.57135C15.0002 2.3836 14.2207 1.20372 12.6617 1.03171ZM12.1282 0.551252C12.1282 0.397029 12.0749 0.266643 11.9682 0.160092C11.8615 0.053542 11.7311 0 11.5769 0C11.4169 0 11.2805 0.053542 11.1679 0.160092C11.0673 0.266821 11.0168 0.397029 11.0168 0.551252V2.56148C11.005 2.57322 10.996 2.58229 10.9901 2.58816C10.8242 2.75395 10.7411 2.94979 10.7411 3.17499C10.7411 3.40641 10.8242 3.6019 10.9901 3.76217C11.1501 3.9164 11.3458 3.99324 11.5769 3.99324C11.7962 3.99324 11.9918 3.9164 12.1638 3.76217C12.318 3.60208 12.395 3.40641 12.395 3.17499C12.395 2.94979 12.318 2.75395 12.1638 2.58816C12.1519 2.58229 12.1401 2.57322 12.1282 2.56148V0.551252ZM4.50818 7.52435V8.97372H5.9575V7.52435H4.50818ZM6.76663 11.2598H8.21595V9.81011H6.76663V11.2598ZM4.50818 11.2598H5.9575V9.81011H4.50818V11.2598ZM4.50818 12.2115V13.6612H5.9575V12.2115H4.50818ZM3.77908 9.81011H2.32976V11.2598H3.77908V9.81011ZM3.77908 8.9739V7.52453H2.32976V8.9739H3.77908ZM6.76663 8.9739H8.21595V7.52453H6.76663V8.9739ZM1.12051 13.2165V6.27011H13.8887V13.2165C13.8887 14.3311 13.3314 14.8882 12.2171 14.8882H2.79212C1.67765 14.8884 1.12051 14.3311 1.12051 13.2165ZM6.76663 13.6612H8.21595V12.2115H6.76663V13.6612ZM8.97173 7.52435V8.97372H10.421V7.52435H8.97173ZM11.2302 9.81011V11.2598H12.6795V9.81011H11.2302ZM11.2302 12.2115V13.6612H12.6795V12.2115H11.2302ZM8.97173 9.81011V11.2598H10.421V9.81011H8.97173ZM8.97173 12.2115V13.6612H10.421V12.2115H8.97173Z" fill="#111827" />
                            </svg>
                            <p className="text-[13px] font-bold">Pick a Date</p>
                        </div>
                        {DataA.map((item, index) => {
                            return (
                                <div className="sm:block hidden relative" key={index}
                                >
                                    <div
                                        className={`transition-all duration-1000 relative ${activeTab === item.id ? "opacity-100" : "opacity-0"
                                            }`}
                                    >

                                        {activeTab === item.id && text === 0 && (
                                            <div className={`flex gap-5 overflow-x-auto  pb-5 relative`}>
                                                <div className=" absolute top-12 border-syl w-full h-1 "></div>
                                                {item.data.map((newItem, idx) => {
                                                    return (
                                                        <div key={idx} className="z-[1000] relative">
                                                            <p className=" text-sm text-center font-bold mb-4">{newItem.month}</p>
                                                            <div className="bg-[#111827] text-[#fff] rounded-full text-[12px] flex justify-center z-[100] items-center h-[32px] max-w-[32px] mx-auto mb-2">{newItem.number}</div>
                                                            <div className="w-[2px] h-[15px]  mx-auto z-[1000]  bg-black inset-x-0">{newItem.line}</div>
                                                            <div className="time-line-tags relative max-w-[300px] max-h-[300px] overflow-hidden">
                                                                <div className="w-[2px] h-[15px] absolute mx-auto z-[1000]  bg-black inset-x-0">{newItem.line}</div>
                                                                <Image className="min-w-[244px] min-h-[244px] object-cover" src={newItem.mainImg} width={500} height={500} alt="time-line-image" />
                                                                <div className={` ${idx === 0 ? 'bg-black' : ''} bg-opacity-30 absolute w-full h-full top-0`}></div>
                                                                <section className={` absolute w-full h-full top-[130px] pb-1 px-1`}>
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
                                                                <main className="bg-black inset-y-0 bg-opacity-40 absolute w-full h-full top-0 cursor-pointer">
                                                                    <div className="flex gap-1 py-1 max-w-[120px] mt-[110px] px-2 mx-auto bg-white items-center justify-center">
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
                                        )}
                                        {activeTab === item.id && text === 1 && (
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
                                        )}
                                        {activeTab === item.id && text === 2 && (
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
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        <div>
                            <div className="flex sm:hidden items-center justify-between ">
                                <h3 className="text-base text-[#111827]">Timeline</h3>
                                <p className='border cursor-pointer text-[#797F88] border-[#E5E7EB] py-[7px] px-3 flex justify-center items-center mb-2'>Altersgerechtes Wohnen</p>
                            </div>
                            <div className="sm:hidden block">
                                {resTimeline.map((item, index) => {
                                    return (
                                        <div className="relative overflow-hidden mb-[24px]" key={index}>
                                            <p className="text-[#111827] text-sm font-bold mb-[18px]">{item.date}</p>
                                            <div className=" rotate-90 absolute top-12 -left-[133px] border-syl w-full h-1 "></div>
                                            <div className=" ">
                                                {item.data.map((newItem, idx) => {
                                                    return (
                                                        <div key={idx} className=" flex  items-center justify-between  relative mb-[7px]">
                                                            <div className="bg-[#111827] text-[#fff] rounded-full text-[12px] inset-y-0 top-8 flex justify-center  z-[100] items-center h-[32px] min-w-[32px] mx-auto mb-2">{newItem.number}</div>
                                                            <div className="flex justify-between px-[10px] py-[10px] border border-[#E5E7EB] max-w-[270px] min-w-[270px] ">
                                                                <div className="">
                                                                    <h2 className="text-[#111827] text-sm pb-[6px]">{newItem.heading}</h2>
                                                                    <p className="text-[#4B5563] text-sm">{newItem.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TimeLine;


const social = [
    {
        platform: 'facebook',
    },
    {
        platform: 'twitter',
    },
    {
        platform: 'pinterest',
    },
];


const resTimeline = [
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
    {
        date: 'September, 2023',
        data: [
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: 'Event Name',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },
            {
                mainImg: '/img1.png',
                imgTopBtn: 'Add to Gallery',
                isImgTopBtn: true,
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'ESBR Essig-Haus Bremen',
                number: '2',
                month: 'OCTOBER, 2023',
                line: '',
                imgName: 'pexels-photo-2525329.jpeg',

            },

        ]
    },
]

const DataA = [
    {
        id: 1,
        btnHeading: "Allgemeine Information ",
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
    {
        id: 2,
        btnHeading: "Beteiligte",
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
    {
        id: 3,
        btnHeading: "Spezifische Information",
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
    {
        id: 4,
        btnHeading: "Kosten nach DIN 276",
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
    {
        id: 5,
        btnHeading: "Medien",
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
    {
        id: 6,
        btnHeading: "Designs",
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
    {
        id: 7,
        btnHeading: "Timeline",
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
            }

        ],
    },
];



