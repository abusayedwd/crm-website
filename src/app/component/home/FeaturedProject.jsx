"use client"
import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import project1 from '@/../../public/image/project1.png'
// import project2 from '@/../../public/image/project2'
// import project3 from '@/../../public/image/project3'

const FeaturedProject = () => {
    return (
        <div className='w-[84%] mx-auto'>
            <h1 className='text-[44px] py-8 font-medium'>Featured Product</h1>
               <div className='grid md:grid-cols-4 gap-5'>
        <Card
      hoverable
      className="relative rounded-lg overflow-hidden "
      cover={
        <Image
          src={project1}
          alt="The Fallingwater House"
          
         
          className="object-cover w-full  rounded-t-lg"
        />
      }
    >
      {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg">
        <h3 className="text-lg font-semibold">The Fallingwater House</h3>
        <p className="text-sm">Building & Interior</p>
      </div> */}
    </Card>
        <Card
      hoverable
      className="relative rounded-lg overflow-hidden "
      cover={
        <Image
          src={project1}
          alt="The Fallingwater House"
          
         
          className="object-cover w-full  rounded-t-lg"
        />
      }
    >
      {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg">
        <h3 className="text-lg font-semibold">The Fallingwater House</h3>
        <p className="text-sm">Building & Interior</p>
      </div> */}
    </Card>
        <Card
      hoverable
      className="relative rounded-lg overflow-hidden "
      cover={
        <Image
          src={project1}
          alt="The Fallingwater House"
          
         
          className="object-cover w-full  rounded-t-lg"
        />
      }
    >
      {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg">
        <h3 className="text-lg font-semibold">The Fallingwater House</h3>
        <p className="text-sm">Building & Interior</p>
      </div> */}
    </Card>
                     
               </div>
        </div>
    );
};

export default FeaturedProject;