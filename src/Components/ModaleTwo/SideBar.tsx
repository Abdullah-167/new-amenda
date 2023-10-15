import Image from 'next/image';
import React, { useState } from 'react';

const SideBar = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableDescriptions, setEditableDescriptions] = useState({
        title1: "Title",
        description1: "Title",
        title2: "Title",
        description2: "Title",
    });

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    }

    const handleDescriptionChange = (e: any, fieldName: any) => {
        setEditableDescriptions((prevDescriptions) => ({
            ...prevDescriptions,
            [fieldName]: e.target.value,
        }));
    }

    return (
        <section className='2xl:max-w-[380px] min-w-[380px] bg-[#F3F4F6] p-5'>
            <div className=' bg-[#FFF] max-h-[885px] mb-[10px]'>
                <div className='bg-[#FFF]'>
                    <div className='flex gap-2 items-center justify-between py-[11px] border-b border-b-[#E5E7EB] px-5 mb-[30px]'>
                        <p className='text-[#797F88] text-sm block'>Info</p>
                        <div className='flex gap-2 items-center cursor-pointer'  onClick={handleEditClick}>
                            <div>
                                {isEditing ? (
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_2887)">
                                            <path d="M0.833374 9.16668L9.16671 0.833344M0.833374 0.833344L9.16671 9.16668" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_2887">
                                                <rect width="10" height="10" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ) : (
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_2684)">
                                            <path d="M8.431 2.2435L9.2745 1.3995C9.45034 1.22366 9.68883 1.12488 9.9375 1.12488C10.1862 1.12488 10.4247 1.22366 10.6005 1.3995C10.7763 1.57534 10.8751 1.81383 10.8751 2.0625C10.8751 2.31117 10.7763 2.54966 10.6005 2.7255L3.416 9.91C3.15166 10.1742 2.82568 10.3684 2.4675 10.475L1.125 10.875L1.525 9.5325C1.63164 9.17432 1.82582 8.84834 2.09 8.584L8.4315 2.2435H8.431ZM8.431 2.2435L9.75 3.5625" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_2684">
                                                <rect width="12" height="12" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )}
                            </div>
                            <p className='text-[#2286E0] text-sm block'>
                                {isEditing ? 'Cancel' : 'Edit'}
                            </p>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='pb-[30px]'>
                            <label className='text-[#797F88] opacity-50 leading-normal text-sm pb-[12px] block'>
                                Title 1
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    className='bg-[#F3F4F6] outline-none text-sm p-[12px] block w-full'
                                    value={editableDescriptions.title1}
                                    onChange={(e) => handleDescriptionChange(e, "title1")}
                                />
                            ) : (
                                <label className=' text-sm block'>
                                    {editableDescriptions.title1}
                                </label>
                            )}
                        </div>
                        <div className='pb-[30px]'>
                            <label className='text-[#797F88] opacity-50 leading-normal text-sm pb-[12px] block'>
                                Description 1
                            </label>
                            {isEditing ? (
                                <textarea
                                    className='bg-[#F3F4F6] outline-none text-sm p-[12px] block w-full'
                                    value={editableDescriptions.description1}
                                    onChange={(e) => handleDescriptionChange(e, "description1")}
                                />
                            ) : (
                                <label className=' text-sm block'>
                                    {editableDescriptions.description1}
                                </label>
                            )}
                        </div>
                        <p className='text-[#797F88] text-sm block cursor-pointer mb-3 opacity-50'>Tags</p>
                        <div className='bg-[#fff] py-[9px] px-[10px] mb-[20px] mx-auto'>
                            <div className='flex gap-2 items-center flex-wrap'>
                                <div className='flex gap-2 items-center bg-[#F3F4F6] px-2 py-[5px] cursor-pointer'>
                                    <p className='text-[#797F88] text-sm block'>buildings</p>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 6.5L6.5 1.5M1.5 1.5L6.5 6.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className='flex gap-2 items-center bg-[#F3F4F6] px-2 py-[5px] cursor-pointer'>
                                    <p className='text-[#797F88] text-sm block'>buildings</p>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 6.5L6.5 1.5M1.5 1.5L6.5 6.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className='flex gap-2 items-center bg-[#F3F4F6] px-2 py-[5px] cursor-pointer'>
                                    <p className='text-[#797F88] text-sm block'>buildings</p>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 6.5L6.5 1.5M1.5 1.5L6.5 6.5" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className='text-[#797F88] text-sm block cursor-pointer mb-3 opacity-50'>Copyright</p>
                        <div className='border border-[#E5E7EB] pl-[5px] w-full  pr-[15px] py-[5px] flex justify-between items-center max-w-[400px]  mb-[25px]'>
                            <div className='flex gap-[15px] max-w-[212px] cursor-pointer min-w-[212px] items-center '>
                                <Image className='min-w-[50px] min-h-[50px] max-h-[50px]' src={'/jhon.svg'} alt='' width={53} height={53} />
                                <div className="">
                                    <h2 className="text-[#111827] text-sm pb-[3px]">Johnny Cash</h2>
                                    <p className="text-[#797F88] text-[13px]">chief executive officer</p>
                                </div>
                            </div>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8713 2.12874C11.0742 1.3316 9.78177 1.3316 8.98469 2.12874L7.00003 4.11332C6.7011 4.41225 6.21642 4.41225 5.91748 4.11332C5.61865 3.8144 5.61865 3.32975 5.91748 3.03082L7.90214 1.04624C9.29709 -0.34874 11.5588 -0.348751 12.9538 1.04624C14.3488 2.44122 14.3488 4.70293 12.9538 6.09789L10.9692 8.08253C10.6703 8.38146 10.1856 8.38146 9.88669 8.08253C9.58776 7.7836 9.58776 7.29892 9.88669 6.99999L11.8713 5.01544C12.6684 4.21828 12.6684 2.92587 11.8713 2.12874Z" fill="#DADBDD" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12875 11.8713C1.33161 11.0741 1.33161 9.78171 2.12875 8.98452L4.11335 6.99998C4.41227 6.70105 4.41227 6.21637 4.11335 5.91744C3.81442 5.6185 3.32977 5.6185 3.03084 5.91744L1.04624 7.90208C-0.348746 9.29703 -0.348746 11.5588 1.04624 12.9537C2.44123 14.3488 4.70295 14.3488 6.09793 12.9537L8.08258 10.9692C8.38151 10.6702 8.38151 10.1856 8.08258 9.88662C7.78365 9.58769 7.29897 9.58769 7.00003 9.88662L5.01548 11.8713C4.2183 12.6683 2.92588 12.6683 2.12875 11.8713Z" fill="#DADBDD" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52567 4.47419C9.82461 4.77311 9.82461 5.25772 9.52567 5.55665L5.55647 9.52584C5.25753 9.82477 4.77288 9.82477 4.47395 9.52584C4.17503 9.22691 4.17503 8.74233 4.47395 8.4434L8.44313 4.47419C8.74206 4.17527 9.22674 4.17527 9.52567 4.47419Z" fill="#DADBDD" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.719 9.7063C13.719 10.129 13.3763 10.4717 12.9536 10.4717H11.5102C11.0875 10.4717 10.7448 10.129 10.7448 9.7063C10.7448 9.28347 11.0875 8.94086 11.5102 8.94086H12.9536C13.3763 8.94086 13.719 9.28347 13.719 9.7063ZM9.70612 10.745C10.1289 10.745 10.4716 11.0877 10.4716 11.5104V12.9537C10.4716 13.3766 10.1289 13.7192 9.70612 13.7192C9.28329 13.7192 8.94067 13.3765 8.94067 12.9537V11.5104C8.94067 11.0877 9.28329 10.745 9.70612 10.745Z" fill="#DADBDD" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29349 0.280823C3.87075 0.280823 3.52804 0.623517 3.52804 1.04627V2.4896C3.52804 2.91234 3.87075 3.25504 4.29349 3.25504C4.71624 3.25504 5.05899 2.91234 5.05899 2.4896V1.04627C5.05899 0.623517 4.71624 0.280823 4.29349 0.280823ZM3.25477 4.29377C3.25477 3.87102 2.91206 3.52833 2.48932 3.52833H1.04597C0.623224 3.52833 0.280518 3.87102 0.280518 4.29377C0.280518 4.71651 0.623224 5.05923 1.04597 5.05923H2.48932C2.91206 5.05923 3.25477 4.71651 3.25477 4.29377Z" fill="#DADBDD" />
                            </svg>
                        </div>
                        <div className='pb-[30px]'>
                            <label className='text-[#797F88] opacity-50 leading-normal text-sm pb-[12px] block'>
                                Title 2
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    className='bg-[#F3F4F6] outline-none text-sm p-[12px] block w-full'
                                    value={editableDescriptions.title2}
                                    onChange={(e) => handleDescriptionChange(e, "title2")}
                                />
                            ) : (
                                <label className=' text-sm block'>
                                    {editableDescriptions.title2}
                                </label>
                            )}
                        </div>
                        <div className='pb-[30px]'>
                            <label className='text-[#797F88] opacity-50 leading-normal text-sm pb-[12px] block'>
                                Description 2
                            </label>
                            {isEditing ? (
                                <textarea
                                    className='bg-[#F3F4F6] outline-none text-sm p-[12px] block w-full'
                                    value={editableDescriptions.description2}
                                    onChange={(e) => handleDescriptionChange(e, "description2")}
                                />
                            ) : (
                                <label className=' text-sm block whitespace-pre-wrap'>
                                    {editableDescriptions.description2}
                                </label>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className=' bg-[#FFF]'>
                <h2 className='text-[#111827] text-base font-bold border-b border-b-[#E5E7EB] pb-[17px] mb-[19px]  p-5'>dem Projekt zuordnen</h2>
                <div className=' p-5  w-full  pr-[15px] flex justify-between items-center max-w-[400px]  mb-[25px]'>
                    <div className='flex gap-[15px] max-w-[212px] cursor-pointer min-w-[212px] items-center '>
                        <Image className='min-w-[50px] min-h-[50px] max-h-[50px]' src={'/jhon.svg'} alt='' width={53} height={53} />
                        <div className="">
                            <h2 className="text-[#111827] text-sm pb-[3px]">Johnny Cash</h2>
                            <p className="text-[#797F88] text-[13px]">chief executive officer</p>
                        </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8713 2.12874C11.0742 1.3316 9.78177 1.3316 8.98469 2.12874L7.00003 4.11332C6.7011 4.41225 6.21642 4.41225 5.91748 4.11332C5.61865 3.8144 5.61865 3.32975 5.91748 3.03082L7.90214 1.04624C9.29709 -0.34874 11.5588 -0.348751 12.9538 1.04624C14.3488 2.44122 14.3488 4.70293 12.9538 6.09789L10.9692 8.08253C10.6703 8.38146 10.1856 8.38146 9.88669 8.08253C9.58776 7.7836 9.58776 7.29892 9.88669 6.99999L11.8713 5.01544C12.6684 4.21828 12.6684 2.92587 11.8713 2.12874Z" fill="#DADBDD" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12875 11.8713C1.33161 11.0741 1.33161 9.78171 2.12875 8.98452L4.11335 6.99998C4.41227 6.70105 4.41227 6.21637 4.11335 5.91744C3.81442 5.6185 3.32977 5.6185 3.03084 5.91744L1.04624 7.90208C-0.348746 9.29703 -0.348746 11.5588 1.04624 12.9537C2.44123 14.3488 4.70295 14.3488 6.09793 12.9537L8.08258 10.9692C8.38151 10.6702 8.38151 10.1856 8.08258 9.88662C7.78365 9.58769 7.29897 9.58769 7.00003 9.88662L5.01548 11.8713C4.2183 12.6683 2.92588 12.6683 2.12875 11.8713Z" fill="#DADBDD" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52567 4.47419C9.82461 4.77311 9.82461 5.25772 9.52567 5.55665L5.55647 9.52584C5.25753 9.82477 4.77288 9.82477 4.47395 9.52584C4.17503 9.22691 4.17503 8.74233 4.47395 8.4434L8.44313 4.47419C8.74206 4.17527 9.22674 4.17527 9.52567 4.47419Z" fill="#DADBDD" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.719 9.7063C13.719 10.129 13.3763 10.4717 12.9536 10.4717H11.5102C11.0875 10.4717 10.7448 10.129 10.7448 9.7063C10.7448 9.28347 11.0875 8.94086 11.5102 8.94086H12.9536C13.3763 8.94086 13.719 9.28347 13.719 9.7063ZM9.70612 10.745C10.1289 10.745 10.4716 11.0877 10.4716 11.5104V12.9537C10.4716 13.3766 10.1289 13.7192 9.70612 13.7192C9.28329 13.7192 8.94067 13.3765 8.94067 12.9537V11.5104C8.94067 11.0877 9.28329 10.745 9.70612 10.745Z" fill="#DADBDD" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29349 0.280823C3.87075 0.280823 3.52804 0.623517 3.52804 1.04627V2.4896C3.52804 2.91234 3.87075 3.25504 4.29349 3.25504C4.71624 3.25504 5.05899 2.91234 5.05899 2.4896V1.04627C5.05899 0.623517 4.71624 0.280823 4.29349 0.280823ZM3.25477 4.29377C3.25477 3.87102 2.91206 3.52833 2.48932 3.52833H1.04597C0.623224 3.52833 0.280518 3.87102 0.280518 4.29377C0.280518 4.71651 0.623224 5.05923 1.04597 5.05923H2.48932C2.91206 5.05923 3.25477 4.71651 3.25477 4.29377Z" fill="#DADBDD" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default SideBar;
