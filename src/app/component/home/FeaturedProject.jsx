 

// "use client";
// import React from "react";
// import { Button, Card } from "antd";
// import Image from "next/image";
// import project1 from "@/../../public/image/project1.png";
// import Link from "next/link";
// import project2 from "@/../../public/image/project2.png";
// import project3 from "@/../../public/image/project3.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Autoplay, Pagination } from "swiper/modules";
// import { useAllProjectQuery } from "@/redux/feature/project";
// import url from "@/redux/api/baseUrl";
// const FeaturedProject = () => {
//   const { data: projects } = useAllProjectQuery();
//   console.log(projects?.data?.attributes);

//   return (
//     <div id="projects" className="w-[84%] md:mt-10 mx-auto">
//       <h1 className="md:text-[44px] text-2xl py-8 font-medium">Our Projects</h1>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 3000, // Autoplay delay in milliseconds
//           disableOnInteraction: false, // Continue autoplay after user interactions
//         }}
//         breakpoints={{
//           // Define breakpoints for responsive design
//           350: {
//             slidesPerView: 1, // 1 slide on mobile devices
//             spaceBetween: 20,
//           },
//           640: {
//             slidesPerView: 2, // 1 slide on mobile devices
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2, // 2 slides on tablets
//             spaceBetween: 30,
//           },
//           1024: {
//             slidesPerView: 3, // 3 slides on larger screens
//             spaceBetween: 30,
//           },
//         }}
//         modules={[Pagination, Autoplay]} // Include Autoplay module
//         className="mySwiper"
//       >
//         {
//           projects?.data?.attributes?.map(project => 
//             <div key={project?._id}>
//                <SwiperSlide>
//                <Card
//   hoverable
//   className="relative rounded-lg overflow-hidden"
//   cover={
//     project?.projectImage?.publicFileUrl ? (
//       <Image
//         src={url + project?.projectImage?.publicFileUrl}
//         alt="The Fallingwater House"
//         width={300}  // Adjusted size
//         height={200}
//         className="object-cover w-full h-80 rounded-t-lg"
//       />
//     ) : (
//       <div className="bg-gray-200 w-full h-full rounded-t-lg flex items-center justify-center">
//         <span>No Image Available</span>
//       </div>
//     )
//   }
// >
//   <h1 className=" font-semibold text-[16px] mb-4">{project?.title}</h1>
//             <Link href={`/projectdetails/${project?._id}`}>
//               <Button className="!bg-yellow-500 !text-white font-medium">
//                 Details
//               </Button>
//             </Link>
//           </Card>
//         </SwiperSlide>
//             </div>
//           )
//         }
       

//         {/* <SwiperSlide>
//           <Card
//             hoverable
//             className="relative rounded-lg overflow-hidden"
//             cover={
//               <Image
//                 src={project2}
//                 alt="The Fallingwater House"
//                 className="object-cover w-full rounded-t-lg"
//               />
//             }
//           >
//             <Link href="/projectdetails">
//               <Button className="!bg-yellow-500 !text-white font-medium">
//                 Details
//               </Button>
//             </Link>
//           </Card>
//         </SwiperSlide>

//         <SwiperSlide>
//           <Card
//             hoverable
//             className="relative rounded-lg overflow-hidden"
//             cover={
//               <Image
//                 src={project3}
//                 alt="The Fallingwater House"
//                 className="object-cover w-full rounded-t-lg"
//               />
//             }
//           >
//             <Link href="/projectdetails">
//               <Button className="!bg-yellow-500 !text-white font-medium">
//                 Details
//               </Button>
//             </Link>
//           </Card>
//         </SwiperSlide>

//         <SwiperSlide>
//           <Card
//             hoverable
//             className="relative rounded-lg overflow-hidden"
//             cover={
//               <Image
//                 src={project1}
//                 alt="The Fallingwater House"
//                 className="object-cover w-full rounded-t-lg"
//               />
//             }
//           >
//             <Link href="/projectdetails">
//               <Button className="!bg-yellow-500 !text-white font-medium">
//                 Details
//               </Button>
//             </Link>
//           </Card>
//         </SwiperSlide> */}
//       </Swiper>
//     </div>
//   );
// };

// export default FeaturedProject;

"use client";

import React from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import project1 from "@/../../public/image/project1.png";
import Link from "next/link";
import project2 from "@/../../public/image/project2.png";
import project3 from "@/../../public/image/project3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useAllProjectQuery } from "@/redux/feature/project";
import url from "@/redux/api/baseUrl";
import { useTranslations } from "next-intl";  // Import the useTranslations hook

const FeaturedProject = () => {
  const { data: projects } = useAllProjectQuery();
  const t = useTranslations("FeaturedProject"); // Get translations for the "FeaturedProject" namespace
  
  return (
    <div id="projects" className="w-[84%] md:mt-10 mx-auto">
      <h1 className="md:text-[44px] text-2xl py-8 font-medium">{t("title")}</h1>
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
          350: {
            slidesPerView: 1, // 1 slide on mobile devices
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2, // 2 slides on tablets
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // 2 slides on larger tablets
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // 3 slides on desktop
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        {
          projects?.data?.attributes?.map(project => (
            <div key={project?._id}>
              <SwiperSlide>
                <Card
                  hoverable
                  className="relative rounded-lg overflow-hidden"
                  cover={
                    project?.projectImage?.publicFileUrl ? (
                      <Image
                        src={url + project?.projectImage?.publicFileUrl}
                        alt={project?.title || "Project Image"}
                        width={300}  // Adjusted size
                        height={200}
                        className="object-cover w-full h-80 rounded-t-lg"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full rounded-t-lg flex items-center justify-center">
                        <span>{t("noImage")}</span>
                      </div>
                    )
                  }
                >
                  <h1 className="font-semibold text-[16px] mb-4">{project?.title}</h1>
                  <Link href={`/projectdetails/${project?._id}`}>
                    <Button className="bg-[#F1DE47] font-medium">
                      {t("details")}
                    </Button>
                  </Link>
                </Card>
              </SwiperSlide>
            </div>
          ))
        }
      </Swiper>
    </div>
  );
};

export default FeaturedProject;
