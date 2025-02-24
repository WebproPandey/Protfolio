import React from "react";
import ProfileCart from "../Components/ProfileCart";
import SecondSection from "../Components/SecondSection";
import image from "../assets/image.png";
import image3 from "../assets/image3.png";
import image5 from "../assets/image5.png"; 
import image6 from "../assets/image6.png"; 
import image7 from "../assets/image7.png"; 
import image8 from "../assets/image8.png"; 
import image9 from "../assets/image9.png"; 
import image10 from "../assets/image10.png"; 



const projectPageProjects = [
  { title: "ShivangiMahajan", description: "PortFolio", link: "https://shivaingmahajan.netlify.app", image: image },
  { title: "DisneyClone", description: "Streaming Platfrom-UI", link: "https://disneyreact.netlify.app/", image: image3 },
  { title: "Primintra", description: "E-Commarce", link: "https://primintra.netlify.app/", image: image5 },
  { title: "Ganttify", description: "DigitalAgency-UI", link: "https://ginttifyagency.netlify.app/", image: image6 },
  { title: "BennettClive", description: "Award-winning animated website", link: "https://bennettclive.netlify.app/", image: image7 },
  { title: "MCDonald's", description: "Re-Imagine animated website", link: "https://mc-donalds-re-imagine.netlify.app/", image: image8 },
  { title: "AirJordan", description: "Re-Imagine animated website", link: "https://airjordancollection.netlify.app/", image: image9 },
  { title: "SocialMarketting", description: "DigitalAgency animated website", link: "https://digitalagencyreact.netlify.app/", image: image10 },
];

const Project = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start relative">
      <div className="Profile h-[100vh] w-full md:w-[40%] md:sticky top-0 flex justify-center md:justify-end items-center md:items-end md:pr-[4rem]">
        <ProfileCart />
      </div>
      <div className="PorfolioInfo w-full md:w-[60%] px-4 md:px-0">
         <SecondSection projects={projectPageProjects} />
        <h1 className="text-2xl text-white">See More Website on  My Github</h1>
      </div>
    </div>
  );
};

export default Project;
