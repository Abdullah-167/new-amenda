import Image from 'next/image'
import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface ImageData {
    img: string;
    checkedTrue: string | React.ReactNode; // Modify the type to allow JSX elements
    checkedFalse: string | React.ReactNode; // Modify the type to allow JSX elements
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

        const newSelectedImages: ImageData[] = imagesToAdd.filter(
            (_, index: number) => checkedImages[index]
        );
        setSelectedImages(newSelectedImages);
        setAddImages(false);
    };

    const isAnyImageSelected = Object.values(checkedImages).some((value) => value);


    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })


    return (
        <section>
            <div className='max-w-[772px] mx-auto'>
                <div>
                    <div className=' relative mb-[54px]'>
                        <div ref={sliderRef} className='keen-slider max-w-[350px] mx-auto overflow-hidden'>
                            {images.map((itme, index) => {
                                return (
                                    <Image className='keen-slider__slide w-full max-w-[350px] min-h-[350px] object-cover' src={itme.image} alt='people-img' width={350} height={350} key={index} />
                                )
                            })}

                        </div>
                        {loaded && instanceRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />

                                <Arrow
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </>
                        )}
                    </div>

                </div>

                {!isAnyImageSelected && (
                    <div>
                        <Image
                            className='sm:block hidden cursor-pointer mx-auto sm:max-w-full max-w-[349px] sm:max-h-full max-h-[80px] sm:mb-0 mb-[50px]'
                            src={'/add.png'}
                            alt='add-image'
                            width={772}
                            height={772}
                            onClick={toggleAddImages}
                        />
                        <Image
                            className='block sm:hidden cursor-pointer mx-auto sm:max-w-full max-w-[349px] sm:max-h-full max-h-[80px] sm:mb-0 mb-[50px]'
                            src={'/add-image.png'}
                            alt='add-image'
                            width={772}
                            height={772}
                            onClick={toggleAddImages}
                        />

                    </div>
                )}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[772px]'>
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
                    <div className='flex justify-center items-center fixed inset-0 z-[4000]  w-full bg-black bg-opacity-50 sm:px-0 px-5'>
                        <div className='max-w-[1204px] mx-auto max-h-[860px] bg-white p-[50px] '>
                            <div>
                                <h1 className='text-[#111827] text-2xl font-bold text-center pb-[50px]'>Select  Images to Add to the Event</h1>
                                <div className='flex flex-wrap gap-4 text-sm font-bold text-[#2286E0] pb-[30px]'>
                                    <p className='text-[#111827]'>Filter by Tags: </p>
                                    <p>#building</p>
                                    <p>#building</p>
                                    <p>#building</p>
                                    <p>#building</p>
                                    <p>#building</p>
                                </div>
                                <div className=' grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-[1116px] mb-[229px]'>
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


function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <div
            onClick={props.onClick}
            className={`arrow ${props.left ? " absolute flex justify-center items-center cursor-pointer inset-y-0  arrow-left  " : "absolute flex justify-center items-center cursor-pointer inset-y-0  arrow-right "
                } ${disabeld}`}
        >
            {props.left && (
                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-4.76837e-07 7L0.300074 7.33333L6.26017 14L7 13.3333L1.33997 7L7 0.666667L6.26017 0L0.300074 6.66667L-4.76837e-07 7Z" fill="black" />
                </svg>
            )}
            {!props.left && (
                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_4320)">
                        <path d="M7 7L6.69993 6.66667L0.739827 0L0 0.666666L5.66003 7L0 13.3333L0.739827 14L6.69993 7.33333L7 7Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_4320">
                            <rect width="7" height="14" fill="white" transform="matrix(-1 0 0 -1 7 14)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </div>
    )
}




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



const images = [
    {
        image: '/3.png'
    },
    {
        image: '/img1.png'
    },
    {
        image: '/1.png'
    },
    {
        image: '/4.png'
    },
]
