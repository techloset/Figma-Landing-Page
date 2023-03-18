import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#EEEEEE] hover:bg-yellow-300 text-black font-[Poppins] py-2 px-6 rounded md:ml-8 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button;