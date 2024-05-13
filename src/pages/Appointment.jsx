import React from 'react'
import { message } from "antd"
import { useFormik } from "formik"
import { basicSchema } from '../schemas/schema'
import { Helmet } from "react-helmet"



const Appointment = () => {

  const onSubmit = async (values, actions) => {

    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/client/appointment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      message.success("Mesajınız alındı!");
      actions.resetForm()

    } else {
      message.error("Birşeyler yanlış gitti !")
    }
  }



  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      nameSurname: '',
      phone: '',
      email: '',
      clock: '',
      note: '',
    },
    validationSchema: basicSchema,
    onSubmit
  })


  return (
    <>
      <Helmet>
        <title>Randevu Al</title>
      </Helmet>
      <div className=' min-h-screen w-full flex justify-center items-center' style={{ backgroundImage: "url('/background.jpeg')", backgroundSize: "cover" }}>
        <div className=' w-[90%] md:w-[50%] bg-transparent backdrop-blur-3xl p-5 rounded-lg border'>
          <h1 className='text-center poppins-semibold text-4xl text-white'>Safe-<span className='text-[#E19930]'>A</span>s</h1>
          <form className='flex flex-col poppins-light' onSubmit={handleSubmit}>

            <label className='text-white max-sm:text-sm' htmlFor="nameSurname">İsim-Soyisim</label>
            <input
              value={values.nameSurname}
              onChange={handleChange}
              onBlur={handleBlur}
              id="nameSurname"
              name="nameSurname"
              type='text'
              placeholder='İsim-Soyisim'
              className={`bg-[#f5f4f4] text-sm  border border-gray-400 ${errors.nameSurname && touched.nameSurname ? 'focus:border-red-600 border' : 'focus:border-blue-600'} outline-none px-3 py-1 rounded-md  placeholder:text-sm`} />
            {errors.nameSurname && <span className='text-red-500 max-sm:text-xs text-sm pl-2 mt-1 font-[400]'>{errors.nameSurname}</span>}
            <label className='text-white mt-2 max-sm:text-sm' htmlFor="phone">Telefon Numarası</label>
            <input
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="phone"
              name="phone"
              type='text'
              placeholder='XXXXXXXXXX'
              className={`bg-[#f5f4f4] text-sm  border border-gray-400 ${errors.phone && touched.phone ? 'focus:border-red-600 border' : 'focus:border-blue-600'} outline-none px-3 py-1 rounded-md  placeholder:text-sm`} />
            {errors.phone && <span className='text-red-500 max-sm:text-xs text-sm pl-2 mt-1 font-[400]'>{errors.phone}</span>}
            <label className='text-white mt-2 max-sm:text-sm' htmlFor="email">E-posta</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              name="email"
              type="email"
              placeholder='E-posta'
              className={`bg-[#f5f4f4] text-sm  border border-gray-400 ${errors.email && touched.email ? 'focus:border-red-600 border' : 'focus:border-blue-600'} outline-none px-3 py-1 rounded-md  placeholder:text-sm`} />
            {errors.email && <span className='text-red-500 max-sm:text-xs text-sm pl-2 mt-1 font-[400]'>{errors.email}</span>}
            <label className='text-white mt-2 max-sm:text-sm' htmlFor="clock">Aranmak İstediğiniz Saat</label>
            <input
              value={values.clock}
              onChange={handleChange}
              onBlur={handleBlur}
              id="clock"
              name="clock"
              type="text"
              placeholder='Saat Aralığı'
              className={`bg-[#f5f4f4] text-sm  border border-gray-400 ${errors.clock && touched.clock ? 'focus:border-red-600 border' : 'focus:border-blue-600'} outline-none px-3 py-1 rounded-md  placeholder:text-sm`} />
            {errors.clock && <span className='text-red-500 max-sm:text-xs text-sm pl-2 mt-1 font-[400]'>{errors.clock}</span>}
            <label className='text-white mt-2 max-sm:text-sm' htmlFor="note">Eklemek İstediğiniz Not</label>
            <textarea
              value={values.note}
              onChange={handleChange}
              onBlur={handleBlur}
              id="note"
              name="note"
              className='outline-none rounded-md p-1 overflow-y-scroll bg-[#f5f4f4] text-sm' cols="30" rows="5"></textarea>

            <button disabled={isSubmitting} type='submit' className={`bg-[#E19930] mt-4 max-sm:text-xs hover:bg-yellow-600 duration-150 rounded-md py-2 text-white ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}>Gönder</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Appointment