// "use client";
// import React from "react";
// import { Card, Timeline } from "antd";
// // import 'antd/dist/antd.css';
// import service1 from "@/../../public/image/service1 (2).png";
// import service2 from "@/../../public/image/service2 (2).png";
// import Image from "next/image";
// import { useAllServiceQuery } from "@/redux/feature/service";
// import url from "@/redux/api/baseUrl";
// import Link from "next/link";

// const ServicePage = () => {
  
//   const {data: services} = useAllServiceQuery()
//   console.log(services);
  

//   return (
//     <div id="service" className="container px-4 mt-2 md:mt-20">
//       {/* Timeline Section */}
//       <div className="text-center my-8">
//         <div className="flex flex-col md:flex-row justify-center md:justify-between">
//           <div className="mb-4 md:mb-0">
//             <div className="text-center">
//               <p className="text-sm md:text-base">
//                 Evaluation And Signing Of The Contract
//               </p>
//               <p className="font-bold text-sm md:text-base">Step 1</p>
//             </div>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <div className="text-center">
//               <p className="text-sm md:text-base">
//                 Preparation Of The Work Plan
//               </p>
//               <p className="font-bold text-sm md:text-base">Step 2</p>
//             </div>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <div className="text-center">
//               <p className="text-sm md:text-base">
//                 Implementation Of Quality Works
//               </p>
//               <p className="font-bold text-sm md:text-base">Step 3</p>
//             </div>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <div className="text-center">
//               <p className="text-sm md:text-base">
//                 Delivering The Project To The Customer
//               </p>
//               <p className="font-bold text-sm md:text-base">Step 4</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-between border-t border-gray-300 mt-8">
//         {/* Timeline Step */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
//         </div>

//         {/* Spacer Line */}
//         {/* <div className="flex-1 flex items-center justify-center border-t border-gray-300"></div> */}

//         {/* Timeline Step */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
//         </div>

//         {/* Spacer Line */}
//         {/* <div className="flex-1 flex items-center justify-center border-t border-gray-300"></div> */}

//         {/* Timeline Step */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
//         </div>

//         {/* Spacer Line */}
//         {/* <div className="flex-1 flex items-center justify-center border-t border-gray-300"></div> */}

//         {/* Timeline Step */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
//         </div>
//       </div>

//       {/* Service Section */}
//       <h2 className="lg:text-[44px] md:text-3xl font-medium py-4 text-2xl  mb-6">
//         Our Service
//       </h2>
//       <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-6">
//       {/* Service Card 1 */}
//       {services?.map(service => 
//     <div key={service?._id} className="relative rounded-lg h-96 overflow-hidden shadow-lg">
//     <Image
//         src={url + service?.serviceImage?.publicFileUrl}
//         alt="The Fallingwater House"
//         width={300}  // Adjusted size
//         height={200}
//        className="w-full h-48  md:h-48 lg:h-[500px] object-cover opacity-80"
//       />
//     <div className="absolute bottom-0 left-0 right-0 bg-orange-600 bg-opacity-70 p-4 text-white">
//       <h3 className="text-lg md:text-xl font-medium">{service?.title}</h3>
//       <button className="underline text-sm">
//       <Link href={service?.link} legacyBehavior passHref>
//       <a target="_blank" rel="noopener noreferrer">View details</a>
//     </Link>
//       </button>
//     </div>
//   </div>

//       )}
   
//     </div>
//     </div>
//   );
// };

// export default ServicePage;


"use client";

import React from "react";
import { useTranslations } from "next-intl";  // Import useTranslations hook
import { Card, Timeline } from "antd";
// import service1 from "@/../../public/image/service1 (2).png";
// import service2 from "@/../../public/image/service2 (2).png";
import Image from "next/image";
import { useAllServiceQuery } from "@/redux/feature/service";
import url from "@/redux/api/baseUrl";
import Link from "next/link";

const ServicePage = () => {
  const { data: services } = useAllServiceQuery();
  const t = useTranslations("ServicePage");  // Load translations for 'ServicePage' namespace
  
  return (
    <div id="service" className="container px-4 mt-2 md:mt-20">
      {/* Timeline Section */}
      {/* <div className="text-center my-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-center">
              <p className="text-sm md:text-base">{t("step1")}</p>
              <p className="font-bold text-sm md:text-base">Step 1</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="text-center">
              <p className="text-sm md:text-base">{t("step2")}</p>
              <p className="font-bold text-sm md:text-base">Step 2</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="text-center">
              <p className="text-sm md:text-base">{t("step3")}</p>
              <p className="font-bold text-sm md:text-base">Step 3</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="text-center">
              <p className="text-sm md:text-base">{t("step4")}</p>
              <p className="font-bold text-sm md:text-base">Step 4</p>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* <div className="flex items-center justify-between border-t border-gray-300 mt-8">
    
        <div className="flex-1 flex items-center justify-center">
          <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
        </div>
      
        <div className="flex-1 flex items-center justify-center">
          <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
        </div>

      
        <div className="flex-1 flex items-center justify-center">
          <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
        </div>

       
        <div className="flex-1 flex items-center justify-center">
          <div className="w-4 h-4 relative -top-2 bg-black rounded-full"></div>
        </div>
      </div> */}
      

      {/* Service Section */}
      <h2 className="lg:text-[44px] md:text-3xl font-medium py-4 text-2xl mb-6">
        {t("ourService")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 py-6">
        {/* Service Cards */}
        {services?.map(service => (
          <div key={service?._id} className="relative rounded-lg h-96 overflow-hidden shadow-lg">
            <Image
              src={url + service?.serviceImage?.publicFileUrl}
              alt={service?.title}
              width={300}  // Adjusted size
              height={200}
              className="w-full h-48 md:h-48 lg:h-[500px] object-cover opacity-80"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-orange-600 bg-opacity-70 p-4 text-white">
              <h3 className="text-lg md:text-xl font-medium">{service?.title}</h3>
              <button className="underline text-sm">
                <Link href={service?.link} legacyBehavior passHref>
                  <a target="_blank" rel="noopener noreferrer">{t("viewDetails")}</a>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
