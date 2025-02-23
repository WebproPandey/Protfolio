import React from 'react'
import { Route  ,Routes} from 'react-router'
import Home from '../Pages/Home'
import FirstSection from '../Components/FirstSection'
import SecondSection from '../Components/SecondSection'
import ThirdSection from '../Components/ThirdSection'
import FourthSection from '../Components/FourthSection'
import FivthSecton from '../Components/FivthSecton'
import SixthSection from '../Components/SixthSection'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="FirstSection" element={<FirstSection/>} />
          <Route path="project" element={<SecondSection/>} />
          <Route path="exprience" element={<ThirdSection/>} />
          <Route path="tool" element={<FourthSection/>} />
          <Route path="thought" element={<FivthSecton/>} />
          <Route path="SixthSection" element={<SixthSection/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoute