"use client";
import Image from 'next/image'
import React,{useState} from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const [nav, setNav] = useState(false);
  const USER_PROFILE = "https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg";
  const handleClick = () => {
    setNav(!nav);
  }
  return (
    <>
    <div className='md:flex hidden justify-between items-center border-b-[3px] border-blue-500'>
      <img src='./Images/logo.png' className='w-22 h-12 m-4' />
      <div className='m-4 flex '>
        <button className='border-2 rounded-full border-gray-400 p-4 mr-4'>CREATE POST</button>
        <button className='border-2 rounded-full border-gray-400 p-4 mr-4'>SIGN IN</button>
        <Image src={USER_PROFILE} alt='' width={60} height={60} className='rounded-full'/>
      </div>

      </div>

      <div className='rtl md:hidden flex'>
        {nav ?<></>: <button className='p-2' onClick={handleClick}><AiOutlineMenu size={25} />
        </button>
     }  
      
      </div>
      {nav &&
        <div className='md:hidden flex  flex-col items-center rtl bg-gray-200/60  top-0'>
          
          <ul className='w-full p-4 rtl'>
            <li className='w-full ltr flex justify-between '>
              <img src='./Images/logo.png' className='w-22 h-9' />
              <div className='flex ml-5'>
              {/* <Image src={USER_PROFILE} width={35} height={35} className='rounded-full'/> */}
              <button onClick={handleClick}>
            <AiOutlineClose size={25} />
          </button>  
             </div>
           </li>
            <li>
            <button className='border-2 rounded-full w-full border-gray-400 mt-5 p-4'>CREATE POST</button>
            </li>
            <li>
            <button className='border-2 rounded-full w-full border-gray-400 mt-5 p-4'>SIGN IN</button>
            </li>
</ul>




</div>
  
  }    
   
    </>
  )
}

export default Header
