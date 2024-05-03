import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Header = () => {
  const [isOpen,setIsOpen]=useState(false) ;
 
  return (

    <header className='fixed w-full z-30' style={{backgroundImage:"url('./background.jpeg')"}}>
        <nav class="flex justify-between items-center w-full h-16 xl:h-20 px-10">
            <div className='poppins-semibold text-white text-3xl'>
               <p>Safe-<span className='text-[#E19930]'>A</span>s</p>
            </div>
            <div  
                class={`max-md:bg-[#22364E] duration-500 md:static absolute  md:min-h-fit  top-16  ${isOpen ? 'left-[-100%]':'left-0'} md:w-auto  w-full flex items-center px-2 poppins-regular`}>
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-3">
                    <li>
                        <a class="hover:text-[#E19930] text-white duration-200" href="#solutions">Çözümler</a>
                    </li>
                    <li>
                        <a class="hover:text-[#E19930] text-white duration-200" href="#pricing">Fiyatlandırma</a>
                    </li>
                    <li>
                        <a class="hover:text-[#E19930] text-white duration-200" href="#plans">Planlanan Gelişmeler</a>
                    </li>
                    <li>
                        <a class="hover:text-[#E19930] text-white duration-200" href="#faq">S.S.S</a>
                    </li>
                    <li>
                        <Link class="hover:text-[#E19930] text-white duration-200" to="/randevu-al">Randevu Al</Link>
                    </li>
                    <li className='max-md:block hidden'>
                        <a class="hover:text-[#E19930] text-white duration-200" target='_blank' href="https://panel.safeastr.com/login">Giriş Yap</a>
                    </li>
                    <li className='max-md:block hidden'>
                        <a class="hover:text-[#E19930] text-white duration-200" target='_blank' href="https://panel.safeastr.com/register">Kayıt Ol</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-6 text-white">
                <a href='https://panel.safeastr.com/register' target='_blank' class="text-white hidden md:inline   rounded-md poppins-regular px-4 py-2 hover:bg-[#E1A530] hover:text-white  duration-200 border border-white hover:border-[#E1A530]">Kayıt Ol</a>
                <a href="https://panel.safeastr.com/login" target='_blank' className='text-white hidden md:inline px-4 py-2 rounded-md poppins-regular hover:bg-[#E1A530] hover:text-white  duration-200 border border-white hover:border-[#E1A530]'>Giriş Yap</a>
               <div className='md:hidden block cursor-pointer ' onClick={()=>setIsOpen(!isOpen)}>
               {
                  isOpen ? <FaBars/> : <FaTimes/>
                }
               </div>
            </div>
            </nav>
    </header>
    
  )
}

export default Header

