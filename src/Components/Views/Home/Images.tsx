import React, { useState } from 'react';
import Image from 'next/image';

const Images = () => {
    const [selectedImage, setSelectedImage] = useState('/img1.png');

    const handleImageClick = (imgSrc: any) => {
        setSelectedImage(imgSrc);
    };

    const images = [
        {
            img: '/img1.png',
        },
        {
            img: '/img2.png',
        },
        {
            img: '/img3.png',
        },
        {
            img: '/img4.png',
        },
        {
            img: '/img5.png',
        },
        {
            img: '/img6.png',
        },
    ];

    return (
        <section>
            <div className='hero-header-img flex 2xl:flex-nowrap flex-wrap gap-[10px]  mx-auto justify-center'>
                <div className=''>
                    <Image className='max-h-[500px] 2xl:max-h-full min-h-[400px] 2xl:min-h-[505px] 2xl:max-w-full max-w-[400px] w-full' src={selectedImage} width={560} height={500} alt='slider-images' />
                </div>
                <div className='pt-3 2xl:block flex gap-2'>
                    {images.map((item, index) => {
                        return (
                            <div
                                className='mb-[15px] cursor-pointer'
                                key={index}
                                onClick={() => handleImageClick(item.img)}
                            >
                                <Image className={` 2xl:max-w-[70px] 2xl:min-h-[70px] min-h-[50px] sm:min-h-[60px] sm:max-w-[60px] ${selectedImage === item.img ? 'p-1 opacity-30' : ''}`} src={item.img} width={70} height={70} alt='slider-images' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Images;
