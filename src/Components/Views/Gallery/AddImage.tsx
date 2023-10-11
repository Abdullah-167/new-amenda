import Image from 'next/image'
import React, { useState } from 'react'

interface ImageData {
    img: string;
    checkedTrue: string;
    checkedFalse: string;
}

interface CheckedImages {
    [index: number]: boolean;
}



const AddImage: React.FC = () => {

    const [checkedImages, setCheckedImages] = useState<CheckedImages>({});
    const [addImages, setAddImages] = useState(false);
    const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);

    const handleChecked = (index: any) => {
        setCheckedImages((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const toggleAddImages = () => {
        setAddImages(!addImages);
    };

    const handleAddImages = () => {
        // Filter and add only the selected images to selectedImages
        const newSelectedImages = imagesToAdd.filter((_, index) => checkedImages[index]);
        setSelectedImages(newSelectedImages);
        setAddImages(false);
    };

    const isAnyImageSelected = Object.values(checkedImages).some((value) => value);

    return (
        <section>
            <div>
                {!isAnyImageSelected && (
                    <Image
                        className='cursor-pointer'
                        src={'/add.png'}
                        alt='add-image'
                        width={772}
                        height={772}
                        onClick={toggleAddImages}
                    />
                )}
                <div className='grid grid-cols-3 gap-5 max-w-[772px]'>
                    {selectedImages.map((item, index) => {
                        return (
                            <div key={index}>
                                <Image className='cursor-pointer min-h-[244px] object-cover' src={item.img} alt='added-images' width={244} height={244} />
                            </div>
                        );
                    })}
                    {isAnyImageSelected && (
                        <Image className=' cursor-pointer max-h-[244px] min-h-[244px]' src={'/add.png'} alt='add-image' width={244} height={244}
                            onClick={toggleAddImages}
                        />
                    )}
                </div>
                {addImages && (
                    <div className='flex justify-center items-center fixed inset-0 z-[4000]  w-full bg-black bg-opacity-50'>
                        <div className='max-w-[1204px] mx-auto max-h-[860px] bg-white p-[50px]'>
                            <div>
                                <h1 className='text-[#111827] text-2xl font-bold text-center pb-[50px]'>Select  Images to Add to the Event</h1>
                                <div className='flex gap-4 text-sm font-bold text-[#2286E0] pb-[30px]'>
                                    <p className='text-[#111827]'>Filter by Tags: </p>
                                    <p>#building</p>
                                    <p>#building</p>
                                    <p>#building</p>
                                    <p>#building</p>
                                    <p>#building</p>
                                </div>
                                <div className=' grid grid-cols-6 gap-3 max-w-[1116px] mb-[229px]'>
                                    {imagesToAdd.map((item, index) => {

                                        const isChecked = checkedImages[index] || false;

                                        return (
                                            <div className=' relative'
                                                onClick={() => handleChecked(index)}
                                                key={index}
                                            >
                                                <Image className='cursor-pointer' src={item.img} alt='added-images' width={174} height={174} />
                                                <div className='absolute top-0' onClick={() => handleChecked(index)}>
                                                    {isChecked ? (
                                                        <div className='cursor-pointer'>{item.checkedTrue}</div>
                                                    ) : (
                                                        <div className='cursor-pointer'>{item.checkedFalse}</div>

                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='flex text-white justify-center max-w-[222px] mx-auto py-[11px] px-[20px] cursor-pointer bg-[#111827] ' onClick={handleAddImages}>
                                    <span>Add Images</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    )
}

export default AddImage;



const imagesToAdd = [
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
    {
        img: '/1.png',
        checkedFalse: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
            </svg>
        ),
        checkedTrue: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#111827" />
                <path d="M5 12.55L6.213 11.3978L9.685 14.6957L17.788 7L19 8.15217L9.686 17L5 12.55Z" fill="#32BA7C" />
            </svg>
        )
    },
]