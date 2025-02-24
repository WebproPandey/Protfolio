import React from 'react'
import ProfileCart from '../Components/ProfileCart'
import FourthSection from '../Components/FourthSection'
import Postman from '../assets/Postmanimage.jpg'
import Firebase from '../assets/firebaseimage.jpg'
import MongoDb  from '../assets/mongodbimage.jpg'
import Figma  from '../assets/figma.jpeg'
import Node from '../assets/Nodejs.png'
import  npm  from '../assets/npm.svg'
import vscode from '../assets/Vscode.svg'


const Tools = () => {
  const ToolsArray =[
    {
      image:Figma,
      name:"Figma",
      discription:"Design and prototyping tool"
    },
    {
      image:Postman,
      name:"Postman",
      discription:"API development and testing tool"
    },
   
    {
      image:MongoDb,
      name:"MongoDB",
      discription:"Document database"
    },
    {
      image:Node,
      name:"Node.js",
      discription:"JavaScript runtime environment"
    },
   
    {
      image:npm,
      name:"npm",
      discription:"Package manager"
    },
    {
      image:vscode,
      name:"Visual Studio Code",
      discription:"Integrated development environment"
    },
    {
      image:Firebase,
      name:"Firebase",
      discription:"development platform"
    },
    
    
  
  ]
  
  return (
    <div className=' w-full flex flex-col md:flex-row  justify-center items-start relative'>
    <div className="Profile h-[100vh] w-full md:w-[40%]   md:sticky top-0 flex justify-center md:justify-end items-center  md:items-end md:pr-[4rem] ">
      <ProfileCart />
    </div>
    <div className="PorfolioInfo  w-full md:w-[60%] px-4 md:px-0">
      <FourthSection tools={ToolsArray}/>
    </div>

    </div>
  )
}

export default Tools