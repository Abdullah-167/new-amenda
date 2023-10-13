import React, { useState } from 'react'
import mapboxgl from 'mapbox-gl';
import Image from 'next/image';

const Details = ({ profileName }: any) => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTab = (index: any) => {
        setActiveTab(index)
    }

    return (
        <section className=' xl:pl-[300px] 2xl:pl-[400px]'>
            <iframe className='w-full min-h-[270px] mb-[60px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" loading="lazy" />
            <div className='px-[50px] 2xl:pl-[132px]  2xl:pr-[182px]'>
                <div className='flex justify-between items-center  mb-5'>
                    <div>
                        <h1 className='text-[#111827] text-[28px] font-bold pb-[15px]'>Jack Sparrow</h1>
                        <p className='text-[#797F88] text-sm'>Holzmarktstrabe 3-5, 10179 Berlin, Germanyv</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1846)">
                                <path d="M12.6465 3.36519L13.9117 2.09919C14.1755 1.83543 14.5332 1.68726 14.9062 1.68726C15.2793 1.68726 15.637 1.83543 15.9007 2.09919C16.1645 2.36295 16.3127 2.72068 16.3127 3.09369C16.3127 3.4667 16.1645 3.82443 15.9007 4.08819L5.124 14.8649C4.72749 15.2612 4.23852 15.5525 3.70125 15.7124L1.6875 16.3124L2.2875 14.2987C2.44746 13.7614 2.73873 13.2724 3.135 12.8759L12.6472 3.36519H12.6465ZM12.6465 3.36519L14.625 5.34369" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1846">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2833 7.49995L11.995 14.9999M8.005 14.9999L7.71667 7.49995M16.0233 4.82495C16.3083 4.86828 16.5917 4.91411 16.875 4.96328M16.0233 4.82495L15.1333 16.3941C15.097 16.8651 14.8842 17.3051 14.5375 17.626C14.1908 17.9469 13.7358 18.1251 13.2633 18.1249H6.73667C6.26425 18.1251 5.80919 17.9469 5.46248 17.626C5.11578 17.3051 4.90299 16.8651 4.86667 16.3941L3.97667 4.82495M16.0233 4.82495C15.0616 4.67954 14.0948 4.56919 13.125 4.49411M3.97667 4.82495C3.69167 4.86745 3.40833 4.91328 3.125 4.96245M3.97667 4.82495C4.93844 4.67955 5.9052 4.56919 6.875 4.49411M13.125 4.49411V3.73078C13.125 2.74745 12.3667 1.92745 11.3833 1.89661C10.4613 1.86714 9.53865 1.86714 8.61667 1.89661C7.63333 1.92745 6.875 2.74828 6.875 3.73078V4.49411M13.125 4.49411C11.0448 4.33334 8.95523 4.33334 6.875 4.49411" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" fill="#111827" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 10.8721C23 9.83794 22.1862 9 21.1818 9H8.81818C7.81382 9 7 9.83794 7 10.8721C7 13.0257 7 16.9743 7 19.1279C7 20.1621 7.81382 21 8.81818 21H21.1818C22.1862 21 23 20.1621 23 19.1279V10.8721ZM22.2727 10.8721V19.1279C22.2727 19.7487 21.784 20.2512 21.1818 20.2512H8.81818C8.216 20.2512 7.72727 19.7487 7.72727 19.1279V10.8721C7.72727 10.252 8.216 9.74883 8.81818 9.74883H21.1818C21.784 9.74883 22.2727 10.252 22.2727 10.8721ZM12.6618 14.6222L8.56073 18.8441C8.41891 18.9909 8.41891 19.2275 8.56073 19.3743C8.70327 19.5203 8.93309 19.5203 9.07564 19.3743L13.2262 15.1L13.8465 15.6241C14.5171 16.1903 15.4829 16.1903 16.1535 15.6241L16.7738 15.1L20.9244 19.3743C21.0669 19.5203 21.2967 19.5203 21.4393 19.3743C21.5811 19.2275 21.5811 18.9909 21.4393 18.8441L17.3382 14.6222L21.4124 11.1806C21.5673 11.0496 21.5905 10.8129 21.4633 10.6534C21.3353 10.4939 21.1062 10.4707 20.9513 10.6018L15.6924 15.0446C15.2895 15.3845 14.7105 15.3845 14.3084 15.0446L9.04873 10.6018C8.89382 10.4707 8.66473 10.4939 8.53673 10.6534C8.40945 10.8129 8.43273 11.0496 8.58764 11.1806L12.6618 14.6222Z" fill="white" />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" fill="#111827" />
                            <path d="M21.5239 19.9627L21.5456 19.9409L21.5246 19.9619L21.5239 19.9627Z" fill="white" />
                            <path d="M21.5239 17.6653L18.4463 16.8027L18.4287 16.8206L17.2783 17.9706L17.2624 17.9901C16.7859 18.4668 15.6061 17.5682 14.019 15.9809C12.4322 14.3938 11.5337 13.2142 12.0101 12.7375L12.0297 12.7216L13.1799 11.5715L13.1977 11.5536L12.335 8.4762C11.7002 7.84135 10.6727 7.84118 10.0378 8.4762L10.0595 8.45437L8.31504 10.1993C7.36259 11.1516 8.58638 15.0652 11.7608 18.2396C14.9351 21.4141 18.8488 22.6379 19.8011 21.6856L21.5246 19.9619C22.1588 19.3269 22.1584 18.2998 21.5239 17.6653ZM20.9497 19.3884L19.2269 21.1112C18.592 21.7461 15.1924 20.5223 12.3352 17.6651C9.47836 14.8079 8.2544 11.4081 8.88925 10.7732L10.612 9.05041L10.6051 9.05752C10.9225 8.74009 11.4363 8.73992 11.7539 9.05752L12.335 11.2639L11.1495 12.4494C10.5138 13.0851 11.5404 14.6504 13.445 16.5551C15.3495 18.4599 16.9148 19.4865 17.5507 18.8506L18.7362 17.6651L20.9426 18.2464C21.2602 18.5638 21.26 19.0777 20.9426 19.3952L20.9497 19.3884Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='flex gap-5 mb-10'>
                    <span className='text-[#797F88] bg-[#F3F4F6] text-sm px-3 py-[7px] cursor-pointer text-center flex justify-center items-center'>projektleitung</span>
                    <span className='text-[#797F88] bg-[#F3F4F6] text-sm px-3 py-[7px] cursor-pointer text-center flex justify-center items-center'>Mitarbeit</span>
                </div>
                <div className="flex gap-4 border-b border-b-[#E5E7EB] mb-[30px]">
                    {mainBtn.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`pb-[9px] px-3 cursor-pointer border-b font-bold ${activeTab === item.id ? 'text-[#111827] border-b-[#111827]' : 'text-[#797F88]'}`}
                                onClick={() => handleTab(item.id)}
                            >
                                <h2 className="text-sm ">{item.btn}</h2>
                            </div>
                        );
                    })}
                </div>
                {activeTab === 1 && (
                    <div className='mb-20'>
                        <div className='pb-[35px]'>
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='flex gap-[7px] items-center text-sm text-[#797F88] mb-[10px]'>
                                            <span>{item.icon}</span>
                                            <span>{item.heading}</span>
                                        </div>
                                        <div className='grid grid-cols-2 2xl:grid-cols-3 gap-5 mb-[30px]'>
                                            {item.cards.map((newItem, idx) => {
                                                return (
                                                    <div className=' cursor-pointer border border-[#E5E7EB] flex items-center justify-between px-[15px] py-[10px]'
                                                        key={idx}>
                                                        <div>
                                                            <h2 className='text-[14px] text-[#797F88]'>{newItem.heading}</h2>
                                                            <p className='text-[15px] text-[#2286E0]'>{newItem.contact}</p>
                                                        </div>
                                                        <span>{newItem.icon}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex gap-[235px]'>
                            {comData.map((item, index) => {
                                return (
                                    <div className=' cursor-pointer' key={index}>
                                        <div className='flex gap-[7px] items-center text-sm text-[#797F88] mb-[8px]'>
                                            <span>{item.icon}</span>
                                            <span>{item.heading}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <h2 className='text-[14px] text-[#797F88]'>{item.name}</h2>
                                            <p className='text-[15px] text-[#2286E0]'>{item.nameIcon}</p>
                                        </div>
                                        <span></span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {activeTab === 2 && (
                    <div>
                        {imagesData.map((item, index) => {
                            return (
                                <div className='mb-10' key={index}>
                                    <div className='flex justify-between items-center pb-5'>
                                        <p>{item.heading}</p>
                                        {item.isTag && (
                                            <div className='flex gap-3'>
                                                <span className=' text-[#111827] text-xs font-bold'>{item.filter}</span>
                                                <span className=' text-[#2286E0] text-xs font-bold'>#{item.tagOne}</span>
                                                <span className=' text-[#2286E0] text-xs font-bold'>#{item.tagTwo}</span>
                                                <span className=' text-[#2286E0] text-xs font-bold'>#{item.tagThree}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className=' grid grid-cols-4 gap-5'>
                                        {item.innerData.map((newItem, idx) => {
                                            return (
                                                <div className=' border border-[#E5E7EB] pb-5' key={idx}>
                                                    <Image className=' max-h-[160px] object-cover mb-3' src={newItem.img} alt='' width={211} height={160} />
                                                    <h2 className='text-[#111827] text-sm mb-[15px] px-3'>{newItem.imgHeading}</h2>
                                                    {newItem.isImageTag && (
                                                        <span className='bg-[#F3F4F6] text-xs mx-3 px-[5px] py-[4px] cursor-pointer max-w-[69px] text-center flex justify-center items-center'>{newItem.imgTag}</span>
                                                    )}
                                                    {newItem.isDate && (
                                                        <div className='flex items-center px-3 gap-[6px] text-[#4B5563] text-[13px]'>
                                                            <span>{newItem.calanderIcon}</span>
                                                            <span>{newItem.date}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
                {activeTab === 4 && (
                    <div>
                        {fourthBtnData.map((item, index) => {
                            return (
                                <div className='mb-10' key={index}>
                                    <div className='flex justify-between items-center pb-5'>
                                        <p>{item.heading}</p>
                                        {item.isTag && (
                                            <div className='flex gap-3'>
                                                <span className=' text-[#111827] text-xs font-bold'>{item.filter}</span>
                                                <span className=' text-[#2286E0] text-xs font-bold'>#{item.tagOne}</span>
                                                <span className=' text-[#2286E0] text-xs font-bold'>#{item.tagTwo}</span>
                                                <span className=' text-[#2286E0] text-xs font-bold'>#{item.tagThree}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className=' grid grid-cols-3 2xl:grid-cols-4 gap-5'>
                                        {item.innerData.map((newItem, idx) => {
                                            return (
                                                <div className=' border border-[#E5E7EB] pb-5' key={idx}>
                                                    <Image className=' max-h-[160px] object-cover mb-3' src={newItem.img} alt='' width={211} height={160} />
                                                    <h2 className='text-[#111827] text-sm mb-[15px] px-3'>{newItem.imgHeading}</h2>
                                                    {newItem.isImageTag && (
                                                        <span className='bg-[#F3F4F6] text-xs mx-3 px-[5px] py-[4px] cursor-pointer max-w-[69px] text-center flex justify-center items-center'>{newItem.imgTag}</span>
                                                    )}
                                                    {newItem.isDate && (
                                                        <div className='flex items-center px-3 gap-[6px] text-[#4B5563] text-[13px]'>
                                                            <span>{newItem.calanderIcon}</span>
                                                            <span>{newItem.date}</span>
                                                        </div>
                                                    )}
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
        </section >
    )
}

export default Details;


const mainBtn = [
    {
        btn: 'Details',
        id: 1
    },
    {
        btn: 'Mitarbeit ',
        id: 2
    },
    {
        btn: 'beurteilung',
        id: 3
    },
    {
        btn: 'Activity ',
        id: 4
    },
]


const data = [
    {
        icon: (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M7.52682 12C7.30267 11.9996 7.08194 11.9445 6.88344 11.8394C5.11642 10.9052 3.63231 9.5061 2.58811 7.79014C1.54868 6.06054 0.999359 4.07604 1 2.05291C0.999737 1.81879 1.05958 1.5886 1.17368 1.3848C1.28779 1.18099 1.45226 1.01053 1.65106 0.89004L2.77335 0.199802C3.08025 0.0110249 3.44883 -0.0469639 3.79806 0.0385845C4.14729 0.124133 4.44859 0.346216 4.6357 0.656007L5.34052 1.8248C5.52748 2.13469 5.58491 2.50686 5.50018 2.85949C5.41546 3.21212 5.19552 3.51635 4.88871 3.70528L4.30724 4.06249C4.22279 4.11355 4.15732 4.19122 4.12091 4.28356C4.08449 4.37589 4.07916 4.47775 4.10573 4.57344C4.49125 5.83402 5.18052 6.97831 6.11176 7.90374C6.18313 7.97251 6.27512 8.01539 6.37326 8.02563C6.4714 8.03587 6.57013 8.01289 6.65393 7.9603L7.2354 7.60264C7.5423 7.41386 7.91089 7.35587 8.26012 7.44142C8.60935 7.52697 8.91064 7.74905 9.09776 8.05884L9.80212 9.22764C9.98908 9.53753 10.0465 9.9097 9.96179 10.2623C9.87706 10.615 9.65712 10.9192 9.35032 11.1081L8.22803 11.7979C8.01725 11.9293 7.77455 11.9993 7.52682 12ZM3.47681 0.914219C3.39373 0.914296 3.31229 0.9375 3.24142 0.981281L2.12094 1.66878C2.05489 1.70824 2.00014 1.76434 1.96204 1.8316C1.92394 1.89886 1.90381 1.97497 1.90362 2.05245C1.90284 3.90842 2.4067 5.72899 3.36025 7.31569C4.31777 8.88945 5.6787 10.1727 7.29911 11.0297C7.36992 11.0688 7.4496 11.0887 7.53032 11.0873C7.61104 11.0859 7.69002 11.0634 7.7595 11.0219L8.88044 10.3335C8.98276 10.2706 9.05613 10.1692 9.08443 10.0516C9.11273 9.93407 9.09363 9.80999 9.03134 9.70666L8.32697 8.53786C8.29615 8.48667 8.25564 8.4421 8.20776 8.40672C8.15989 8.37133 8.10557 8.34581 8.04793 8.33162C7.99028 8.31743 7.93043 8.31484 7.8718 8.32401C7.81316 8.33317 7.75689 8.35391 7.70619 8.38503L7.12471 8.74224C6.86887 8.90147 6.56762 8.9697 6.26894 8.93605C5.97025 8.9024 5.69131 8.76882 5.47651 8.55656C4.43889 7.52524 3.67092 6.25007 3.24142 4.84534C3.15394 4.55557 3.16494 4.24459 3.27268 3.96186C3.38042 3.67914 3.57871 3.44092 3.836 3.28512L4.41612 2.92791C4.46682 2.89679 4.51095 2.85589 4.546 2.80754C4.58105 2.7592 4.60632 2.70435 4.62037 2.64615C4.63443 2.58794 4.63699 2.52751 4.62791 2.4683C4.61884 2.4091 4.5983 2.35227 4.56748 2.30108L3.86401 1.13183C3.8333 1.08051 3.79281 1.03586 3.74488 1.00046C3.69695 0.965064 3.64253 0.939626 3.58479 0.925624C3.54944 0.916929 3.5132 0.912489 3.47681 0.912394V0.914219Z" fill="#797F88" />
                </g>
            </svg>
        ),
        heading: 'Phone',
        cards: [
            {
                heading: 'Home',
                contact: '+123 456 7890s',
                icon: (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1662)">
                            <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1662">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
            {
                heading: 'Home',
                contact: '+123 456 7890s',
                icon: (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1662)">
                            <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1662">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
            {
                heading: 'Home',
                contact: '+123 456 7890s',
                icon: (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1662)">
                            <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1662">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
            {
                heading: 'Home',
                contact: '+123 456 7890s',
                icon: (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1662)">
                            <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1662">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
        ]
    },
    {
        icon: (
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M2.09524 12H13.9048C15.0286 12 16 11.0063 16 9.9V2.1C16 0.99375 15.0286 0 13.9048 0H2.28571C1.1619 0 0 0.99375 0 2.1V9.88125C0 11.0062 0.971429 12 2.09524 12ZM13.9048 10.875H2.28571C2.11429 10.875 1.73333 10.7438 1.6 10.6688L5.48571 6.84375L6.8 8.1375C7.12381 8.45625 7.5619 8.625 8 8.625C8.4381 8.625 8.87619 8.45625 9.2 8.1375L10.5143 6.84375L14.4 10.6688C14.2667 10.7438 14.0762 10.875 13.9048 10.875ZM14.8571 9.525L11.3333 6.05625L14.8571 2.56875V9.525ZM2.09524 1.125H13.9048C14.0952 1.125 14.3238 1.275 14.4571 1.36875L8.4 7.35C8.19048 7.55625 7.82857 7.55625 7.61905 7.35L1.54286 1.36875C1.67619 1.275 1.90476 1.125 2.09524 1.125ZM1.14286 2.56875L4.66667 6.0375L1.14286 9.525V2.56875Z" fill="#797F88" />
                </g>
            </svg>
        ),
        heading: 'Email',
        cards: [
            {
                heading: 'Home',
                contact: '+123 456 7890s',
                icon: (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1662)">
                            <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1662">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
            {
                heading: 'Home',
                contact: '+123 456 7890s',
                icon: (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1662)">
                            <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1662">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
            {
                heading: 'Home',
                contact: '+123 456 7890s',
                icon: (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1662)">
                            <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#2286E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1662">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
        ]
    },
]


const comData = [
    {
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M11.1534 1H2.8457V13H11.1534V1Z" stroke="#797F88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 13H2.84615" stroke="#797F88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.1543 13H13.0005" stroke="#797F88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.23047 2.84619H6.07662" stroke="#797F88" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M7.92285 2.84619H9.76901" stroke="#797F88" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M4.23047 5.61548H6.07662" stroke="#797F88" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M7.92285 5.61548H9.76901" stroke="#797F88" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M4.23047 8.38452H6.07662" stroke="#797F88" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M7.92285 8.38452H9.76901" stroke="#797F88" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M5.61523 12.9999V10.2307H8.38447V12.9999" stroke="#797F88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>
        ),
        heading: 'Firmen',
        name: 'Amenda',
        nameIcon: (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_1647)">
                    <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_1647">
                        <rect width="10" height="10" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    },
    {
        icon: (
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M13.8138 1.77425H11.6518L10.5995 1.01113C9.70026 0.343402 8.62883 0 7.5 0C6.37117 0 5.29974 0.343402 4.40051 1.01113L3.34821 1.77425H1.18622C0.535714 1.77425 0 2.30843 0 2.95708V10.8172C0 11.4658 0.535714 12 1.18622 12H13.8138C14.4643 12 15 11.4658 15 10.8172V2.95708C15 2.30843 14.4643 1.77425 13.8138 1.77425ZM4.87883 1.6407C5.64413 1.06836 6.5625 0.782194 7.5 0.782194C8.45663 0.782194 9.35587 1.08744 10.1212 1.6407L10.3125 1.77425H4.6875L4.87883 1.6407ZM1.18622 2.55644H3.48214H11.5179H13.8138C14.0242 2.55644 14.2156 2.72814 14.2156 2.95708V5.28458H8.39923V5.0938C8.39923 4.9221 8.24617 4.76948 8.07398 4.76948H6.94515C6.77296 4.76948 6.6199 4.9221 6.6199 5.0938V5.28458H0.803572V2.95708C0.803572 2.74722 0.975765 2.55644 1.18622 2.55644ZM13.8138 11.2178H1.18622C0.975765 11.2178 0.784439 11.0461 0.784439 10.8172V6.06677H6.60077V6.41017C6.60077 6.58188 6.75383 6.7345 6.92602 6.7345H8.05485C8.22704 6.7345 8.3801 6.58188 8.3801 6.41017V6.06677H14.1964V10.8172C14.2156 11.0461 14.0434 11.2178 13.8138 11.2178Z" fill="#797F88" />
                </g>
            </svg>
        ),
        heading: 'Firmen',
        name: 'Amenda',
        nameIcon: (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_1647)">
                    <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_1647">
                        <rect width="10" height="10" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    },
    {
        icon: (
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M4.04667 1.57662e-05H6.94569C7.07961 -0.000747522 7.21186 0.0303016 7.33194 0.0906981C7.34342 0.0906981 7.36065 0.10825 7.37645 0.115563C7.4984 0.18668 7.60143 0.287107 7.67654 0.408086C7.75222 0.534369 7.79533 0.678093 7.80186 0.825896C7.80838 0.9737 7.77812 1.12079 7.71388 1.25348C7.71388 1.26226 7.70095 1.27542 7.69665 1.28273L6.73605 3.2324C6.70039 3.30344 6.64668 3.36344 6.58051 3.40615C6.51434 3.44885 6.43814 3.4727 6.35985 3.4752H4.63681C4.54996 3.47534 4.46509 3.44875 4.39335 3.39889C4.3216 3.34904 4.26632 3.27826 4.23477 3.19584L3.28422 1.25202C3.22183 1.13272 3.18928 0.999593 3.18945 0.864423C3.19122 0.702542 3.2364 0.544234 3.32012 0.406624C3.39718 0.281411 3.50438 0.178333 3.63153 0.107172C3.75869 0.0360102 3.90159 -0.000875206 4.04667 1.57662e-05ZM6.94569 0.870274H4.04667L4.90819 2.60933H6.09422L6.9342 0.893675C6.9342 0.893675 6.94282 0.873199 6.94712 0.864423L6.94569 0.870274Z" fill="#797F88" />
                    <path d="M4.6373 2.60352H6.36034C6.46153 2.60367 6.55943 2.64011 6.63688 2.70643C6.71433 2.77276 6.76639 2.86474 6.78393 2.96625L7.97857 9.02734C8.01695 9.23848 8.00363 9.456 7.9398 9.66065C7.87942 9.86601 7.76931 10.0526 7.6196 10.2033L6.10476 11.7463C5.94346 11.9089 5.72572 12.0001 5.49882 12.0001C5.27192 12.0001 5.05418 11.9089 4.89289 11.7463L3.37804 10.2077C3.22802 10.056 3.11723 9.86876 3.0556 9.66279C2.99396 9.45681 2.98338 9.23849 3.02482 9.02734L4.21946 2.95308C4.23946 2.85498 4.29182 2.7668 4.36783 2.7032C4.44385 2.63961 4.53894 2.60443 4.6373 2.60352ZM5.99994 3.48109H4.99196L3.86768 9.19992C3.84893 9.26982 3.84893 9.34357 3.86768 9.41347C3.88827 9.4825 3.92526 9.5453 3.97537 9.59629L5.49882 11.1291L7.01654 9.59044C7.06646 9.53955 7.103 9.47668 7.12279 9.40762C7.1437 9.33838 7.14667 9.26482 7.13141 9.19407L5.99994 3.48109Z" fill="#797F88" />
                    <path d="M5.49912 6.95618C5.38488 6.95618 5.27531 6.90995 5.19453 6.82767C5.11374 6.74538 5.06836 6.63377 5.06836 6.5174C5.06836 6.40103 5.11374 6.28942 5.19453 6.20713C5.27531 6.12484 5.38488 6.07861 5.49912 6.07861H7.04124C7.15549 6.07861 7.26505 6.12484 7.34584 6.20713C7.42662 6.28942 7.472 6.40103 7.472 6.5174C7.472 6.63377 7.42662 6.74538 7.34584 6.82767C7.26505 6.90995 7.15549 6.95618 7.04124 6.95618H5.49912Z" fill="#797F88" />
                </g>
            </svg>
        ),
        heading: 'Firmen',
        name: 'Amenda',
        nameIcon: (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_1647)">
                    <path d="M1.25 8.75L8.75 1.25M8.75 1.25H3.125M8.75 1.25V6.875" stroke="#797F88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_1647">
                        <rect width="10" height="10" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    },
]



const imagesData = [
    {
        heading: 'Projects',
        filter: 'Filter by Role:',
        tagOne: 'carpenter',
        tagTwo: 'manager',
        tagThree: 'planner',
        isTag: true,
        innerData: [
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
        ]

    },
    {
        heading: 'Projects',
        filter: 'Filter by Role:',
        tagOne: 'carpenter',
        tagTwo: 'manager',
        tagThree: 'planner',
        isTag: false,
        innerData: [
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
        ]

    },
]

const fourthBtnData = [
    {
        heading: 'Projects',
        filter: 'Filter by Role:',
        tagOne: 'carpenter',
        tagTwo: 'manager',
        tagThree: 'planner',
        isTag: true,
        innerData: [
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: true,
                isDate: false
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
        ]

    },
    {
        heading: 'Projects',
        filter: 'Filter by Role:',
        tagOne: 'carpenter',
        tagTwo: 'manager',
        tagThree: 'planner',
        isTag: false,
        innerData: [
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
            {
                img: '/3.png',
                imgHeading: 'JAHO Hochhaus JWB',
                imgTag: 'carpenter',
                isImageTag: false,
                isDate: true
                , calanderIcon: (
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M3.5511 0C3.222 0 2.95521 0.267263 2.95521 0.596939V1.18419H1.92007C0.861348 1.18419 0 2.04707 0 3.10766V4.88472V6.07859V11.0765C0 12.1371 0.861348 13 1.92007 13H12.0799C13.1387 13 14 12.1371 14 11.0765V6.07856V4.88468V3.10763C14 2.04704 13.1387 1.18416 12.0799 1.18416H11.1926V0.596939C11.1926 0.267263 10.9258 0 10.5967 0C10.2676 0 10.0008 0.267263 10.0008 0.596939V1.18419H4.14698V0.596939C4.14698 0.267263 3.88022 0 3.5511 0ZM12.8083 11.0765C12.8083 11.4788 12.4816 11.8061 12.08 11.8061H1.9201C1.51851 11.8061 1.1918 11.4788 1.1918 11.0765V6.07856H12.8083V11.0765ZM10.0008 2.37807V2.96529C10.0008 3.29497 10.2676 3.56223 10.5967 3.56223C10.9258 3.56223 11.1926 3.29497 11.1926 2.96529V2.37807H12.08C12.4816 2.37807 12.8083 2.70536 12.8083 3.10766V4.88472H1.1918V3.10766C1.1918 2.70536 1.51851 2.37807 1.9201 2.37807H2.95525V2.96529C2.95525 3.29497 3.22204 3.56223 3.55113 3.56223C3.88022 3.56223 4.14701 3.29497 4.14701 2.96529V2.37807H10.0008Z" fill="#4B5563" />
                        </g>
                    </svg>
                ),
                date: 'August 16, 2023'
            },
        ]

    },
]