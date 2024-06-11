import React from 'react'
import {Link} from "react-router-dom"
// ilk h1 semibold ilk span bold , ikinci h1 medium 3.div regular
const TopMain = () => {
  return (
    <div className='xl:h-screen pb-4 xl:pb-0 px-10 pt-24 rounded-br-lg rounded-bl-lg' style={{backgroundImage:"url('/background.webp')"}}>
        <div className='flex justify-center'>
          <div className='sm:w-[70%] w-[90%] rounded-lg sm:mt-10 text-center'>
            <h1 className='text-white text-center poppins-semibold  text-5xl sm:text-6xl sm:mb-4'>Safe-<span className='text-[#E1A530] poppins-bold'>A</span>s ile</h1>
            <h1 className='text-white text-center poppins-medium  text-4xl mt-2 sm:mt-0 sm:text-6xl leading-[50px] sm:leading-[80px]'> <span className='bg-red-600 max-sm:text-3xl px-4 rounded-md '>FİKRİ MÜLKİYET</span> İHLALLERİNE SON!</h1>
            <div className='text-white text-sm sm:text-lg sm:mt-6 poppins-regular '>
              Yazılımımız, sahip olduğu güçlü filtreleme teknikleri ve yapay zeka algoritmaları sayesinde, herhangi bir fikri mülkiyet ihlali riskini önceden tespit edebilir. Ancak, herhangi bir aksilik yaşanması durumunda bile, satıcılar yalnız bırakılmayacak. Safe-As, kullanıcılarına ücretsiz destek sunarak, herhangi bir fikri mülkiyet ihlali durumunda sorunu çözmek için hızlı ve etkili bir çözüm sunuyor.
            </div>
            <a href="https://panel.safeastr.com/register" target='_blank' className='bg-white max-sm:px-3 sm:px-14 px-4 py-2 sm:py-3 inline-block rounded-md mt-6 poppins-medium text-black text-lg border hover:bg-transparent hover:text-white duration-200'>Kayıt Ol</a>
            <Link to="/randevu-al" className='bg-white max-sm:px-2 sm:px-14 px-4 py-2 sm:py-3 rounded-md ml-8 mt-6 poppins-medium text-black text-lg border hover:bg-transparent hover:text-white duration-200'>Randevu Al</Link>
          </div>
        </div>

      </div>
  )
}

export default TopMain