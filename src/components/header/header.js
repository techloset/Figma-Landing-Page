



import React, { useState } from 'react'
import Button from '../button/button';

const Nav = () => {
  let Links = [
    { name1: "Portfolio", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Client reviews", link: "/" },
    { name: "Contact me", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' shadow-md w-full sticky top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-[#1F2022] py-7 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-[#EEEEEE]'>

          Jessie.
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#1F2022]   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className=' text-[#EEEEEE]  hover:text-[#FCE611] duration-500'>{link.name}</a>
                <a href={link.link} className=' text-[#00ADB5]  hover:text-[#FCE611] duration-500'>{link.name1}</a>

              </li>
            ))
          }
          <Button>
            Schedule a call
          </Button>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
























// import React from 'react'
// import { HiMenu } from 'react-icons/hi';
// export default function Header() {
//     return (


//         <div className=' max-w-[1330]'>

//             <nav className='bg-[#1F2022]  h-[100px] w-[100%] flex flex-col md:flex-row items-center justify-between'>              {/* h-[100px] or w-[100%] krne se navbar ki hight or width full rahe ge jitne set ki hai */}
//                 <div className='text-[#EEEEEE] mx-12 hover:text-[#FCE611] cursor-pointer'>Jessie.</div>

//                 <div className='flex'>
//                     <ul className='  flex flex-col md:flex-row items-center  gap-[20px] md:gap-[40px]'>
//                         <li><a className='hover:text-[#FCE611] text-[#00ADB5]' href="#">Portfolio</a></li>
//                         <li><a className='hover:text-[#FCE611] text-[#EEEEEE]' href="#">Blog</a></li>
//                         <li><a className='hover:text-[#FCE611] text-[#EEEEEE]' href="#">Client reviews</a></li>
//                         <li><a className='hover:text-[#FCE611] text-[#EEEEEE]' href="#">Contact me</a></li>


//                     </ul>

//                 </div>
//                 <div className='flex'>
//                     <button className='bg-[#EEEEEE] px-5 py-2 hover:bg-yellow-300 m-14  w-[162px] h-[50px] rounded'>Schedule a call</button>

//                     <HiMenu className='text-white' />
//                 </div>


//             </nav>

//         </div>



//     );
// }
