import React from 'react'
import ContactForm from './ContactForm'

const SixthSection = () => {
  return (
    <div className=' w-full '>
          <div className="Heading leading-[52px] md:leading-[94px]">
        <h2 className="text-[48px] text-center  md:text-start  md:text-[94px] poppins-bold uppercase text-white ">
          Let's work
        </h2>
        <h2 className="text-[48px] text-center  md:text-start  md:text-[94px] poppins-bold uppercase text-[#b6b4bd33] ">
         Together
        </h2>
      </div>
      <div className='ContactForm  w-full md:w-[80%]'>
        <ContactForm/>
      </div>

    </div>
  )
}

export default SixthSection