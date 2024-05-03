import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  
  
  return (
    <header className='flex items-center justify-between px-10 w-full z-30  text-white h-20 fixed top-0' style={{backgroundImage:"url('./background.jpeg')"}}  >
      <div className='flex items-center gap-x-10'>
        <p className='poppins-semibold text-3xl'>Safe-<span className='text-[#E1A530] poppins-bold'>A</span>s</p>
      </div>
      <div>
      <ul>
          <a href="#solutions" className='link-style' >Çözümler</a>
          <a href="#pricing" className='link-style'>Fiyatlandırma</a>
          <a href="#plans" className='link-style'>Planlanan Gelişmeler</a>
          <a href="#faq" className='link-style'>S.S.S.</a>
          <Link to="/randevu-al" className='link-style' >Randevu al</Link>
        </ul>
      </div>
      <div>
        <a href='https://panel.safeastr.com/register' target='_blank' className='button-style px-8 mr-5'>Kayıt Ol</a>
        <a href='https://panel.safeastr.com/login' target='_blank' className='button-style px-4'>Giriş Yap</a>
      </div>

    </header>
  )
}

export default Header


{/* 

<header className='flex items-center  justify-between px-5 px-10 w-full z-30  text-white h-20 fixed top-0' style={{backgroundImage:"url('./background.jpeg')"}}  >
      <div className='flex items-center '>
        <p className='poppins-semibold text-3xl ipad:text-2xl'>Safe-<span className='text-[#E1A530] poppins-bold'>A</span>s</p>
      </div>
      <div className='hidden ipad:block'>
      <ul>
          <a href="#solutions" className='link-style  mx-4  ' >Çözümler</a>
          <a href="#pricing" className='link-style  mx-4 '>Fiyatlandırma</a>
          <a href="#plans" className='link-style  mx-4 '>Planlanan Gelişmeler</a>
          <a href="#faq" className='link-style  mx-4 '>S.S.S.</a>
          <Link to="/randevu-al" className='link-style  mx-4 ' >Randevu al</Link>
        </ul>
      </div>
      <div className='hidden ipad:block'>
        <a href='https://panel.safeastr.com/register' target='_blank' className='button-style px-8 ipad:ipad-button-style  mr-5 ipad:px-4 ipad:mr-4'>Kayıt Ol</a>
        <a href='https://panel.safeastr.com/login' target='_blank' className='button-style px-4 ipad:ipad-button-style ipad:px-2'>Giriş Yap</a>
      </div>
      <div className='ipad:hidden text-2xl' onClick={()=>setIsOpen(!isOpen)}>
        {
          !isOpen ? <FaBars/> : <FaTimes/>
        }
      </div>

    </header>

*/}