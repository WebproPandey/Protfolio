import React from 'react'
import ProfileCart from '../Components/ProfileCart'
import ThirdSection from '../Components/ThirdSection'



const Expriences = () => {
  const ExprienceArray = [
    {
      heading: "Developing Award-Winning Websites",
      description:
        "During my journey as a frontend developer, I have built award-winning websites with unique animations and seamless user experiences. These projects allowed me to push the boundaries of design and development while utilizing tools like GSAP, Three.js, and Framer Motion to enhance interactivity.",
      date: "2024",
    },
    {
      heading: "Mastering Development Tools & AI Integration",
      description:
        "As I progressed in frontend development, I learned how to effectively use development tools like Figma, Webflow, and Git. Additionally, I explored AI-powered tools that helped me streamline workflows, optimize code, and enhance productivity.",
      date: "2023 - Presnet",
    },
    {
      heading: "AI-Assisted Development for Faster Workflow",
      description:
        "Leveraging AI tools, I improved my efficiency in development by automating repetitive tasks, debugging code faster, and generating creative design ideas. This experience helped me understand how AI can be integrated into the development process to enhance productivity and innovation.",
      date: "2024 - Present ",
    },
  ];
  

  return (
    <div className=' w-full flex flex-col md:flex-row  justify-center items-start relative'>
    <div className="Profile h-[100vh] w-full md:w-[40%]   md:sticky top-0 flex justify-center md:justify-end items-center  md:items-end md:pr-[4rem] ">
      <ProfileCart />
    </div>
    <div className="PorfolioInfo  w-full md:w-[60%] px-4 md:px-0">
      <ThirdSection  exprience={ExprienceArray}/>
    </div>

    </div>
  )
}

export default Expriences