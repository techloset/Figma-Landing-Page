import React from 'react';
// import Header from '../header/header';
import './landingPage.css';
import SliderItems from '../slider/sliderItems';
import elipseImage from "../../assets/Ellipse 1.png";
import lineImage from "../../assets/Line 1.png";

import Nav from '../header/header';


export default function Landingpage() {
  return (

    <div className='mainImage w-[100%] bg-no-repeat bg-center  bg-cover  bg-fixed '>
      {/* <Header /> */}

      <Nav />
      <div className='flex flex-col items-start md:items-end  mx-40 mt-40'>

        <p className=' text-[#EEEEEE] font-Poppins font-medium text-[8px] md:text-[18px] leading-[27px]'>Hello there, Nice to meet you. I am</p>
        <p className='  text-[#00ADB5] font-Montserrat   text-[50px] md:text-[100px] font-extrabold leading-[121.9px] '>Jessie</p>
        <p className=' w-[28%] text-[#EEEEEE] font-Poppins font-normal  text-[10px] md:text-[16px] leading-[30px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
      <div className=''>

        <div className='flex ml-20 flex-row items-center '>

          <div className=' flex w-[30px]  '>
            <img src={elipseImage} alt="" className='pb-14' />
          </div>

          <p className='text-[#00ADB5] font-Montserrat font-extrabold text-[24px] leading-[30px] tracking-[0.04em] '>Pro <br /> photographer</p>
        </div>


      </div>
      <SliderItems />

      <div className='flex flex-row items-center ml-20 gap-3 '>
        <div className='  w-[20px]   '>
          <img src={lineImage} alt="" className='' />
        </div>

        <p className='text-[#EEEEEE] font-Montserrat font-extrabold text-[24px] leading-[40px] pt-10'>Let’s take your <br /> photographs to next level</p>

      </div>
    </div>

  )
}
