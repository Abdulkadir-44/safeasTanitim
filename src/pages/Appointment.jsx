import React, { useState } from 'react'
import {message} from "antd"
const Appointment = () => {
   
  const [nameSurname,setNameSurname]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [clock,setClock]=useState('');
  const [note,setNote]=useState('');
 
  const handleSubmit = async (e) =>{
    e.preventDefault()
   
     const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/client/appointment`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ nameSurname, phone, email, clock, note }),
     });

     if (response.ok) {
       message.success("Mesajınız alındı!");
     }else{
       message.error("Birşeyler yanlış gitti !")
     }

  }

  return (
    <div className=' min-h-screen w-full flex justify-center items-center' style={{backgroundImage:"url('./background.jpeg')",backgroundSize:"cover"}}>
        <div className=' w-[90%] md:w-[50%] bg-transparent backdrop-blur-3xl p-5 rounded-lg border'>
            <h1 className='text-center poppins-semibold text-4xl text-white'>Safe-<span className='text-[#E19930]'>A</span>s</h1>
            <form className='flex flex-col poppins-light' onSubmit={handleSubmit}>

                <label className='text-white mb-2' htmlFor="nameSurname">İsim-Soyisim</label>
                <input onChange={e=>setNameSurname(e.target.value)} 
                placeholder='İsim-Soyisim' className=' bg-[#f5f4f4]  border-2 border-gray-400 focus:border-blue-600 outline-none px-3 py-1 rounded-md mb-2 placeholder:text-sm' type="text" name="" id="nameSurname" />

                <label className='text-white mb-2' htmlFor="phone">Telefon Numarası</label>
                <input onChange={e=>setPhone(e.target.value)} 
                placeholder='XXX XXX XX XX' className=' bg-[#f5f4f4] border-2 border-gray-400 focus:border-blue-600 outline-none px-3 py-1 rounded-md mb-2 placeholder:text-sm' type="tel" name="" id="phone" />

                <label className='text-white mb-2' htmlFor="email">E-posta</label>
                <input onChange={e=>setEmail(e.target.value)} 
                placeholder='E-posta' className=' bg-[#f5f4f4] border-2 border-gray-400 focus:border-blue-600 outline-none px-3 py-1 rounded-md mb-2 placeholder:text-sm' type="email" name="" id="email" />

                <label className='text-white mb-2' htmlFor="clock">Aranmak İstediğiniz Saat</label>
                <input onChange={e=>setClock(e.target.value)} 
                placeholder='Saat Aralığı' className=' bg-[#f5f4f4] border-2 border-gray-400 focus:border-blue-600 outline-none px-3 py-1 rounded-md mb-2 placeholder:text-sm' type="text" name="" id="clock" />

                <label className='text-white mb-2' htmlFor="note">Eklemek İstediğiniz Not</label>
                <textarea onChange={e=>setNote(e.target.value)}
                 className='outline-none rounded-md p-1 overflow-y-scroll bg-[#f5f4f4]' name="" id="note" cols="30" rows="5"></textarea>
                 <button type='submit' className='bg-[#E19930] mt-4 hover:bg-yellow-600 duration-150 rounded-md py-2 text-white'>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default Appointment