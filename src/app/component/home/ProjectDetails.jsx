"use client"
import React from 'react';
import bgImage from '@/../../public/image/detailsbg.png'
import story from '@/../../public/image/story.png'
import Image from 'next/image';
import { useSingleProjectQuery } from '@/redux/feature/projectById';
import url from '@/redux/api/baseUrl';
import Navbar from './Nav2';
import Footer from './Footer2';
 
 
 
const ProjectDetails = ({project}) => {
  // const {id} = params;
   console.log(project);
   
   const ImageUrl = project?.data?.projectImage?.publicFileUrl
   ? url + project?.data?.projectImage?.publicFileUrl
   : bgImage; 
    return (
        <div>
          <Navbar />
            <div
      className="flex items-center justify-center h-[400px] md:h-[650px] bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
        height: "500px"
       
        
      }}
    >
      <div className="  bg-opacity-50 p-6 rounded-lg text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">The Fallingwater House</h1>
        <p className="text-orange-500 text-lg md:text-xl">Renovation & Architecture</p>
      </div>
    </div>

    <div className="flex flex-col container md:gap-8 md:flex-row h-[700px] items-center justify-between p-6">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {project?.data?.content}
         </p>
      </div>
      <div className="md:w-1/2">
      <Image
  width={500}
  height={300}
  src={ImageUrl}
  alt="Our Story"
  className="rounded-lg shadow-lg object-cover md:w-full w-72 h-48 md:h-[400px]"
  priority // Ensure the image loads correctly
/>
      </div>
    </div>
    <Footer />
        </div>
    );
};

export default ProjectDetails;