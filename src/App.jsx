import { Routes, Route } from "react-router-dom"
import Appointment from './pages/Appointment'
import Home from './pages/Home'
import { Toaster } from "sonner"


const App = () => {

  return (
    <>
      <Toaster
        duration={2000}
        position="top-center"
        richColors
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/randevu-al' element={<Appointment />} />
      </Routes>
    </>
  )
}

export default App