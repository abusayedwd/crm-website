// "use client"
// import React from 'react';
// import { Button, Card } from 'antd';
// import Image from 'next/image';
// import project1 from '@/../../public/image/project1.png'
// import Link from 'next/link';
// import project2 from '@/../../public/image/project2.png'
// import project3 from '@/../../public/image/project3.png'
// import { Swiper, SwiperSlide } from 'swiper/react'; 
// import 'swiper/css';
// import 'swiper/css/pagination';

 

// // import required modules
// import { Autoplay, Pagination } from 'swiper/modules';
// const FeaturedProject = () => {
//     return (
    //     <div id='projects' className='w-[84%] mx-auto'>
    //         <h1 className='md:text-[44px] text-2xl py-8 font-medium'>Featured Projects</h1>
    //            <div className='grid md:grid-cols-4 gap-5'>
    //     <Card
    //   hoverable
    //   className="relative rounded-lg overflow-hidden"
    //   cover={
    //     <Image
    //       src={project1}
    //       alt="The Fallingwater House"
          
         
    //       className="object-cover w-full  rounded-t-lg"
    //     />
    //   }
    // >
    //      <Link href="/projectdetails"> 
    //    <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
    //     </Link>
    //   {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg">
    //     <h3 className="text-lg font-semibold">The Fallingwater House</h3>
    //     <p className="text-sm">Building & Interior</p>
    //   </div> */}
    // </Card>
    //     <Card
    //   hoverable
    //   className=" overflow-hidden "
    //   cover={
    //     <Image
    //       src={project2}
    //       alt="The Fallingwater House" 
    //       className="object-cover w-full  rounded-t-lg"
    //     />
    //   }
    // >
    //     <Link href="/projectdetails"> 
    //    <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
    //     </Link>
    //   {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg">
    //     <h3 className="text-lg font-semibold">The Fallingwater House</h3>
    //     <p className="text-sm">Building & Interior</p>
    //   </div> */}
    // </Card>
    //     <Card
    //   hoverable
    //   className="relative rounded-lg overflow-hidden "
    //   cover={
    //     <Image
    //       src={project3}
    //       alt="The Fallingwater House"
          
         
    //       className="object-cover w-full  rounded-t-lg"
    //     />
    //   }
    // >
    //      <Link href="/projectdetails"> 
    //    <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
    //     </Link>
    //   {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg">
    //     <h3 className="text-lg font-semibold">The Fallingwater House</h3>
    //     <p className="text-sm">Building & Interior</p>
    //   </div> */}
    // </Card>

    //     <Card
    //   hoverable
    //   className="relative rounded-lg overflow-hidden "
    //   cover={
    //     <Image
    //       src={project1}
    //       alt="The Fallingwater House"
          
         
    //       className="object-cover w-full  rounded-t-lg"
    //     />
    //   }
    // >
    //      <Link href="/projectdetails"> 
    //    <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
    //     </Link>
    //   {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg">
    //     <h3 className="text-lg font-semibold">The Fallingwater House</h3>
    //     <p className="text-sm">Building & Interior</p>
    //   </div> */}
    // </Card>
    
                     
    //            </div>
    //     </div>

"use client"
import React from 'react';
import { Button, Card } from 'antd';
import Image from 'next/image';
import project1 from '@/../../public/image/project1.png'
import Link from 'next/link';
import project2 from '@/../../public/image/project2.png'
import project3 from '@/../../public/image/project3.png'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';

 

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const FeaturedProject = () => {
    return ( 

    <div id='projects' className='w-[84%] md:mt-10 mx-auto'>
         <h1 className='md:text-[44px] text-2xl py-8 font-medium'>Featured Projects</h1>
         <Swiper
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 3000, // Autoplay delay in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interactions
  }}
  breakpoints={{
    // Define breakpoints for responsive design
    350: {
      slidesPerView: 1, // 1 slide on mobile devices
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2, // 1 slide on mobile devices
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2, // 2 slides on tablets
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3, // 3 slides on larger screens
      spaceBetween: 30,
    },
  }}
  modules={[Pagination, Autoplay]} // Include Autoplay module
  className="mySwiper"
>
  <SwiperSlide>
    <Card
      hoverable
      className="relative rounded-lg overflow-hidden"
      cover={
        <Image
          src={project1}
          alt="The Fallingwater House"
          className="object-cover w-full rounded-t-lg"
        />
      }
    >
      <Link href="/projectdetails">
        <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
      </Link>
    </Card>
  </SwiperSlide>

  <SwiperSlide>
    <Card
      hoverable
      className="relative rounded-lg overflow-hidden"
      cover={
        <Image
          src={project2}
          alt="The Fallingwater House"
          className="object-cover w-full rounded-t-lg"
        />
      }
    >
      <Link href="/projectdetails">
        <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
      </Link>
    </Card>
  </SwiperSlide>

  <SwiperSlide>
    <Card
      hoverable
      className="relative rounded-lg overflow-hidden"
      cover={
        <Image
          src={project3}
          alt="The Fallingwater House"
          className="object-cover w-full rounded-t-lg"
        />
      }
    >
      <Link href="/projectdetails">
        <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
      </Link>
    </Card>
  </SwiperSlide>

  <SwiperSlide>
    <Card
      hoverable
      className="relative rounded-lg overflow-hidden"
      cover={
        <Image
          src={project1}
          alt="The Fallingwater House"
          className="object-cover w-full rounded-t-lg"
        />
      }
    >
      <Link href="/projectdetails">
        <Button className='!bg-[#FF742080] !text-white font-medium'>Details</Button>
      </Link>
    </Card>
  </SwiperSlide>
</Swiper>

    </div>
    );
};

export default FeaturedProject;