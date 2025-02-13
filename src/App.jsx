import React from 'react'
import AppRoute from './Routes/AppRoute'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div className='bg-[#151312] relative w-[100%]'>
      <Navbar/>
      <AppRoute/>
      <Footer/>
    </div>
  )
}

export default App