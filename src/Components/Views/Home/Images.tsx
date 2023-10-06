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
            <div className='flex gap-5'>
                <div className='max-h-[500px]'>
                    <Image className='max-h-[500px]' src={selectedImage} width={560} height={500} alt='slider-images' />
                </div>
                <div className='pt-3'>
                    {images.map((item, index) => {
                        return (
                            <div
                                className='mb-[15px] cursor-pointer'
                                key={index}
                                onClick={() => handleImageClick(item.img)}
                            >
                                <Image className={`${selectedImage === item.img ? 'p-1 opacity-30' : ''}`} src={item.img} width={70} height={70} alt='slider-images' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Images;
