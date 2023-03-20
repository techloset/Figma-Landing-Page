import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/Rectangle 4.png";
import slider2 from "../../assets/Rectangle 5.png";
import slider3 from "../../assets/Rectangle 6.png";
import slider4 from "../../assets/Rectangle 4.png";
import slider5 from "../../assets/Rectangle 5.png";
import slider6 from "../../assets/Rectangle 6.png";
import vector1 from "../../assets/Vector.png";
import vector2 from "../../assets/Vector 2.png";


export default function SliderItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className='flex flex-row  mt-20' >
            <div className='flex-col  flex justify-end items-center md:items-end  overflow-hidden'>
                <div className='flex justify-between w-[49%]'>
                    <h2 className=' font-Josefin Sans font-bold  text-[15px] md:text-[24px]  text-[#FFFFFF] '> Latest Shots</h2>

                    <h2 className='font-Montserrat font-semibold not-italic text-[10px] md:text-[14px] leading-[17.07px] tracking-[0.04em] text-[#00ADB5] text-right mx-14 mt-3'> View all</h2>
                </div>
                <div className='w-[50%]'>

                    <Slider {...settings}>
                        <div className='px-2' >

                            <img src={slider1} alt="" className='w-[250px] h-[150px] ' />

                        </div>
                        <div className='px-2'>

                            <img src={slider2} alt="" className='w-[250px] h-[150px]' />

                        </div>
                        <div className='px-2'>

                            <img src={slider3} alt="" className='w-[250px] h-[150px]' />

                        </div>
                        <div className='px-2' >

                            <img src={slider4} alt="" className='w-[250px] h-[150px] ' />

                        </div>
                        <div className='px-2'>

                            <img src={slider5} alt="" className='w-[250px] h-[150px]' />

                        </div>
                        <div className='px-2'>

                            <img src={slider6} alt="" className='w-[250px] h-[150px]' />

                        </div>



                    </Slider>
                    <div className='flex px-5 space-x-5 mt-2'>

                    <div>
                        <img src={vector1} alt="" />
                    </div>


                    <div>
                        <img src={vector2} alt="" />
                    </div>

                </div>

                </div>
                







            </div>
        </div>
    )
}

