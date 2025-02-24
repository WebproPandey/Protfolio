import React from "react";
import FirstSection from "../Components/FirstSection";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import FourthSection from "../Components/FourthSection";
import FivthSection from "../Components/FivthSecton";
import SixthSection from "../Components/SixthSection";
import ProfileCart from "../Components/ProfileCart";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image4 from "../assets/image4.png";
import Reactjs from '../assets/Reactimage.jpg'
import Tailwindcss from '../assets/TailwindcssImage.jpg'
import ChatGpt  from '../assets/ChatGptimage.jpg'
import Redux  from '../assets/Redux.jpg'
import  Github  from '../assets/Github.svg'
import  gsap from '../assets/Gsap.jpg'




const homeProjects = [
  { title: "Vidyamintra", description: "Learning Management System", link: "https://vidyamitraa.netlify.app", image: image1 },
  { title: "Trionn Digital-Agency", description: "Animated Website", link: "https://trionns.netlify.app/", image: image2 },
  { title: "MarutiHouse Design", description: "Production stage", link: "https://marutihousedesign.netlify.app/", image: image4 },

];
const ExprienceArray = [
  {
    heading:"Frontend Developer at  Mercy Dev",
    description:"Mercy Dev is a startup focused on building high-quality, innovative websites. As a frontend developer, I contribute to creating responsive and interactive web applications, ensuring smooth user experiences with modern technologies like React, JavaScript, and GSAP. I collaborate closely with designers and backend developers to bring ideas to life, optimizing performance and accessibility for a seamless web experience.",
    date:"January 2024 - Present",
  },
  {
    heading:"Freelancing Project: Website Optimization & Animation",
    description:"I worked on a freelancing project for Shivangi Mahajan, where I enhanced the website by making it fully responsive, optimizing its performance, and adding smooth animations for better user experience. This project helped me refine my skills in front-end development, animation, and optimization techniques.",
    date:"March 2024 ",
  },
  {
    heading:"Re-Image Hackathon – Website Redesign & Animation",
    description:"I participated in the Re-Image Hackathon, where our team reimagined and rebuilt a website with a fresh modern design, improved user experience, and smooth animations. We successfully advanced to the second stage of the competition.",
    date:"05 - sept 2024 ",
  }
]
const ToolsArray =[
 
  {
    image:Reactjs,
    name:"React js",
    discription:"JavaScript library"
  },
 
  {
    image:Tailwindcss,
    name:"Tailwind CSS",
    discription:"Utility-first CSS framework"
  },
  {
    image:Github,
    name:"GitHub",
    discription:"Version control system"
  },
  
  {
    image:gsap,
    name:"GSAP",
    discription:"JavaScript animation library"
  },
  {
    image:Redux,
    name:"Redux",
    discription:" managing application state"
  },
  {
    image:ChatGpt,
    name:"ChatGPT",
    discription:"AI-powered text-based model"
  },

 
  
  

]



const Home = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start relative">
      <div className="Profile h-[100vh] w-full md:w-[40%] md:sticky top-0 flex justify-center md:justify-end items-center md:items-end md:pr-[4rem]">
        <ProfileCart />
      </div>
      <div className="PorfolioInfo w-full md:w-[60%] px-4 md:px-0">
        <FirstSection />
        <SecondSection projects={homeProjects} />
        <ThirdSection exprience={ExprienceArray} />
        <FourthSection  tools={ToolsArray} />
        <FivthSection />
        <SixthSection />
      </div>
    </div>
  );
};

export default Home;
