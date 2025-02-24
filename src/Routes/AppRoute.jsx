import React from 'react'
import { Route  ,Routes} from 'react-router'
import Home from '../Pages/Home'
import Project from '../Pages/Project'
import Expriences from '../Pages/Expriences'
import Tools from '../Pages/Tools'
import Thought from '../Pages/Thought'

const AppRoute = () => {
  return (
    <>
      <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="project" element={<Project/>} />
          <Route path="/exprience" element={<Expriences/>} />
          <Route path="/tool" element={<Tools/>} />
          <Route path="/thought" element={<Thought/>} />
      </Routes>
    </>
  )
}

export default AppRoute