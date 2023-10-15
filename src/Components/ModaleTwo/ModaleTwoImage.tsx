import Image from 'next/image'
import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const ModaleTwoImage = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false);
    const [modale, setModale] = useState(false);

    const handleModale = () => {
        setModale(!modale)
    }


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
            <div>
                <div className='hidden md:flex justify-end  mb-3'>
                    <Image src={'/cross.svg'} alt='cross' width={50} height={50} />
                </div>
                <div className='image-section2  w-full relative'>
                    <div className='flex justify-between  pb-[44px] items-center'>
                        <h1 className='text-[#797F88] text-lg'>pexels-photo-2525329.jpeg</h1>
                        <div className='flex gap-[25px] items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9917 7.23999C11.5332 7.49854 12.0048 7.88327 12.3668 8.36186C12.7288 8.84045 12.9706 9.39892 13.072 9.99037C13.1735 10.5818 13.1314 11.189 12.9495 11.7608C12.7676 12.3327 12.4512 12.8525 12.0267 13.2767L8.27669 17.0267C7.57342 17.7299 6.61959 18.125 5.62502 18.125C4.63046 18.125 3.67662 17.7299 2.97336 17.0267C2.27009 16.3234 1.875 15.3696 1.875 14.375C1.875 13.3804 2.27009 12.4266 2.97336 11.7233L4.43752 10.2592M15.5625 9.74083L17.0267 8.27666C17.73 7.57339 18.125 6.61956 18.125 5.62499C18.125 4.63042 17.73 3.67659 17.0267 2.97333C16.3234 2.27006 15.3696 1.87497 14.375 1.87497C13.3805 1.87497 12.4266 2.27006 11.7234 2.97333L7.97336 6.72333C7.54889 7.14749 7.23241 7.66733 7.05051 8.23918C6.86861 8.81102 6.82659 9.41817 6.928 10.0096C7.0294 10.6011 7.27126 11.1595 7.63327 11.6381C7.99527 12.1167 8.46683 12.5014 9.00836 12.76" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className=' cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleModale}>
                                <path d="M2.5 13.75V15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625V13.75M13.75 10L10 13.75M10 13.75L6.25 10M10 13.75V2.5" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className={`absolute z-[2000] right-16 top-14 transition-all duration-500 ${modale ? ' opacity-100' : 'opacity-0'} `}>
                        {modale && (
                            <div className='max-w-[200px] img-format px-[15px] py-[15px] bg-[#FFF]'>
                                <h2 className='text-center text-sm text-[#111827] font-bold mb-3'>Choose format</h2>
                                <p className='text-sm text-[#797F88] px-[68px] py-3 border border-[#E5E7EB] mb-[5px] cursor-pointer'>JPEG</p>
                                <p className='text-sm text-[#797F88] px-[68px] py-3 border border-[#E5E7EB] mb-[5px] cursor-pointer'>JPEG</p>
                                <p className='text-sm text-[#797F88] px-[68px] py-3 border border-[#E5E7EB] mb-[5px] cursor-pointer'>JPEG</p>
                            </div>
                        )}
                    </div>
                    <div className=' relative mb-[54px]'>
                        <div ref={sliderRef} className='flex slider-image mx-auto overflow-hidden'>
                            {images.map((itme, index) => {
                                return (
                                    <div className='keen-slider__slide w-full' key={index}>
                                        <Image className='w-full max-h-[600px] 2xl:min-h-[824px] object-cover' src={itme.image} alt='people-img' width={1000} height={600} />
                                    </div>
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

                    <div className='flex 2xl:flex-nowrap flex-wrap items-center justify-between'>
                        <div className='flex 2xl:mb-0 mb-5'>
                            {data.map((item, index) => {
                                return (
                                    <div className='pr-10' key={index}>
                                        <h2 className='text-[#797F88] text-[15px] leading-normal font-normal pb-[7px]'>{item.heading}</h2>
                                        <div className='flex gap-[8.6px] items-center'>
                                            {index === 4 && (
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.3953 10.2558C11.3953 12.3526 8.89488 14 5.69767 14C2.50047 14 0 12.3526 0 10.2558C0 9.43535 0.390698 8.68 1.04837 8.06791C1.21116 8.36744 1.38698 8.65395 1.5693 8.93395C1.19163 9.33116 0.976744 9.78047 0.976744 10.2558C0.976744 11.7535 3.1386 13.0233 5.69767 13.0233C8.25674 13.0233 10.4186 11.7535 10.4186 10.2558C10.4186 9.78047 10.2037 9.33116 9.82605 8.93395C10.0084 8.65395 10.1842 8.36744 10.347 8.06791C11.0112 8.68 11.3953 9.42884 11.3953 10.2558ZM10.093 4.39535C10.093 7.84 6.17953 11.1414 6.01023 11.2847C5.91907 11.3628 5.80837 11.3953 5.69767 11.3953C5.58698 11.3953 5.47628 11.3563 5.38512 11.2847C5.21581 11.1479 1.30233 7.84 1.30233 4.39535C1.30233 1.97302 3.27535 0 5.69767 0C8.12 0 10.093 1.97302 10.093 4.39535ZM7 4.39535C7 3.67907 6.41395 3.09302 5.69767 3.09302C4.9814 3.09302 4.39535 3.67907 4.39535 4.39535C4.39535 5.11163 4.9814 5.69767 5.69767 5.69767C6.41395 5.69767 7 5.11163 7 4.39535Z" fill="#2286E0" />
                                                </svg>
                                            )}
                                            <p className={`text-base ${index === 4 ? 'text-[#2286E0]' : 'text-[#797F88]'} `}>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex gap-[10px] uppercase'>
                            <div className='flex gap-2 items-center bg-[#fff] px-[14px] py-[11px] cursor-pointer border border-[#E5E7EB]'>
                                <p className='text-[#797F88] text-sm block'>buildings</p>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00702 3.52875e-06C8.39197 0.00139315 9.74537 0.413576 10.896 1.18439C12.0466 1.95521 12.9427 3.05002 13.4709 4.33029C13.9991 5.61055 14.1357 7.01873 13.8633 8.37663C13.5909 9.73453 12.9219 10.9811 11.9408 11.9587C10.9598 12.9362 9.71076 13.6007 8.35189 13.8682C6.99302 14.1357 5.58534 13.9941 4.30699 13.4612C3.02864 12.9284 1.93706 12.0284 1.1704 10.875C0.403728 9.72163 -0.0035765 8.36674 2.36616e-05 6.9818C0.00484463 5.12723 0.745431 3.35036 2.05918 2.04134C3.37292 0.732322 5.15244 -0.00185732 7.00702 3.52875e-06ZM6.47222 5.32C6.05222 5.32 5.63922 5.32 5.22342 5.32C5.13256 5.32084 5.04219 5.33355 4.95462 5.3578C4.90244 5.3687 4.85485 5.39535 4.8183 5.43416C4.78174 5.47297 4.75798 5.52206 4.75022 5.5748C4.7359 5.63166 4.74208 5.69175 4.76769 5.7445C4.7933 5.79725 4.83669 5.83928 4.89022 5.8632C5.02476 5.92612 5.16928 5.96497 5.31722 5.978C5.70642 5.9962 5.86322 6.167 5.80442 6.5674C5.69522 7.3164 5.54822 8.0598 5.42222 8.8074C5.33682 9.3114 5.26542 9.8168 5.18282 10.3208C5.07222 10.9998 5.70502 11.6368 6.20762 11.7208C6.50535 11.7625 6.8058 11.7817 7.10642 11.7782C7.42516 11.7778 7.74046 11.7123 8.03297 11.5857C8.32547 11.459 8.58902 11.274 8.80742 11.0418C8.88759 10.9679 8.94779 10.875 8.98242 10.7716C8.99079 10.7269 8.98988 10.681 8.97977 10.6367C8.96966 10.5924 8.95054 10.5506 8.92362 10.514C8.89116 10.4937 8.85452 10.481 8.81645 10.4769C8.77839 10.4727 8.73988 10.4773 8.70382 10.4902C8.58902 10.528 8.48682 10.6064 8.37482 10.6554C8.24392 10.7165 8.10688 10.7634 7.96602 10.7954C7.90989 10.8092 7.85144 10.8106 7.79471 10.7995C7.73799 10.7885 7.68433 10.7653 7.63747 10.7315C7.5906 10.6976 7.55164 10.654 7.52328 10.6037C7.49492 10.5533 7.47784 10.4974 7.47322 10.4398C7.44966 10.3095 7.44542 10.1765 7.46062 10.045C7.50822 9.7202 7.57542 9.3982 7.63422 9.0762C7.79382 8.19794 7.95576 7.3192 8.12002 6.44C8.16482 6.1992 8.24042 5.9626 8.19002 5.7092C8.18615 5.65348 8.1712 5.5991 8.14605 5.54922C8.1209 5.49935 8.08606 5.455 8.04356 5.41875C8.00106 5.38251 7.95176 5.35511 7.89854 5.33816C7.84532 5.3212 7.78925 5.31503 7.73362 5.32C7.31362 5.32 6.89222 5.32 6.47222 5.32ZM7.23382 2.2064C6.98146 2.19534 6.73152 2.25971 6.51589 2.3913C6.30027 2.5229 6.12875 2.71575 6.0232 2.94525C5.91766 3.17475 5.88288 3.4305 5.92332 3.67985C5.96375 3.9292 6.07755 4.16085 6.25021 4.34524C6.42286 4.52963 6.64654 4.6584 6.8927 4.71512C7.13886 4.77184 7.39633 4.75394 7.63227 4.66369C7.86821 4.57345 8.07191 4.41495 8.21738 4.20844C8.36285 4.00192 8.44349 3.75675 8.44902 3.5042C8.45847 3.17164 8.336 2.84884 8.10834 2.60623C7.88069 2.36362 7.56631 2.2209 7.23382 2.2092V2.2064Z" fill="#797F88" />
                                </svg>
                            </div>
                            <div className='flex gap-2 items-center bg-[#fff] px-[14px]  py-[11px] cursor-pointer border border-[#E5E7EB]'>
                                <p className='text-[#797F88] text-sm block'>buildings</p>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_246)">
                                        <path d="M9.83617 2.61744L10.8202 1.63277C11.0254 1.42763 11.3036 1.31238 11.5937 1.31238C11.8839 1.31238 12.1621 1.42763 12.3672 1.63277C12.5724 1.83792 12.6876 2.11615 12.6876 2.40627C12.6876 2.69639 12.5724 2.97463 12.3672 3.17977L3.98533 11.5617C3.67694 11.8699 3.29663 12.0964 2.87875 12.2209L1.3125 12.6875L1.77917 11.1213C1.90358 10.7034 2.13012 10.3231 2.43833 10.0147L9.83675 2.61744H9.83617ZM9.83617 2.61744L11.375 4.15627" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_246">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex gap-[10px] items-center bg-[#C83F3F] px-[34px]  py-[11px] cursor-pointer'>
                                <p className='text-white text-sm block'>Delete</p>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.055 6.75002L10.7955 13.5M7.2045 13.5L6.945 6.75002M14.421 4.34252C14.6775 4.38152 14.9325 4.42277 15.1875 4.46702M14.421 4.34252L13.62 14.7548C13.5873 15.1787 13.3958 15.5746 13.0838 15.8635C12.7717 16.1523 12.3622 16.3126 11.937 16.3125H6.063C5.63782 16.3126 5.22827 16.1523 4.91623 15.8635C4.6042 15.5746 4.41269 15.1787 4.38 14.7548L3.579 4.34252M14.421 4.34252C13.5554 4.21166 12.6853 4.11235 11.8125 4.04477M3.579 4.34252C3.3225 4.38077 3.0675 4.42202 2.8125 4.46627M3.579 4.34252C4.4446 4.21166 5.31468 4.11235 6.1875 4.04477M11.8125 4.04477V3.35777C11.8125 2.47277 11.13 1.73477 10.245 1.70702C9.41521 1.6805 8.58479 1.6805 7.755 1.70702C6.87 1.73477 6.1875 2.47352 6.1875 3.35777V4.04477M11.8125 4.04477C9.94029 3.90008 8.05971 3.90008 6.1875 4.04477" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModaleTwoImage;

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
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                        <path d="M12.0575 37.5725L13.3 36.3388L5.61753 28.6563L50.7588 28.6563V26.9063L5.61753 26.9063L13.3 19.2238L12.0575 17.99L2.26629 27.7813L12.0575 37.5725Z" fill="#111827" />
                    </g>
                </svg>
            )}
            {!props.left && (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                        <path d="M43.9425 18.4275L42.7 19.6612L50.3825 27.3437H5.24121V29.0937H50.3825L42.7 36.7762L43.9425 38.01L53.7337 28.2187L43.9425 18.4275Z" fill="#111827" />
                    </g>
                </svg>
            )}
        </div>
    )
}



const data = [
    {
        heading: 'Auflösung',
        description: '750px mal 1104px'
    },
    {
        heading: 'Auflösung',
        description: '750px mal 1104px'
    },
    {
        heading: 'Auflösung',
        description: '750px mal 1104px'
    },
    {
        heading: 'Auflösung',
        description: '750px mal 1104px'
    },
    {
        heading: 'Auflösung',
        description: '750px mal 1104px'
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


