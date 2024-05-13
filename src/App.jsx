import React from 'react'
import { Routes, Route } from "react-router-dom"
import Appointment from './pages/Appointment'
import Home from './pages/Home'



const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/randevu-al' element={<Appointment />} />
      </Routes>
    </>
  )
}

export default App