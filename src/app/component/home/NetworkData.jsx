// "use client";

// import Image from 'next/image'; // Import the Next.js Image component
// import electo from '@/../../public/image/crmelectro.jpg'; // Import the image

// const NetworkData = () => {
//   return (
//     <div className='bg-gray-100'>

//     <div className=" py-12 container">
//       <div className="  flex items-center justify-between space-x-12">
//         <div className="w-1/2">
//           <h2 className="text-4xl font-bold text-yellow-500 mb-4">
//           Network Infrastructure and Data Networking
//           </h2>
//           <p className="text-lg text-gray-700">
//           A reliable network is essential for modern business operations. We provide full support for LAN and WiFi network installations, including mounting trays, conduits, and full cabling. Upon request, we also complete the final assembly.
//           </p>
//         </div>
//         <div className="w-1/2">
//           <Image
//             src={electo} // Path to the image
//             alt="Experienced Contractors"
//             className="max-w-full md:w-[600px] md:h-[420px] rounded-lg"
//             width={600}  // Provide width for Next.js Image optimization
//             height={420} // Provide height for Next.js Image optimization
//             priority // Optional: prioritizes loading of this image
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default NetworkData;


"use client";

import { useTranslations } from "next-intl"; // Import translation hook
import Image from "next/image";
import electo from "@/../../public/image/electronic.jpg";

const NetworkData = () => {
  const t = useTranslations("NetworkData"); // Load translations dynamically

  return (
    <div className="bg-gray-100 py-12 ">
      <div className=" container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12 space-y-8 md:space-y-0">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2   md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">
              {t("title")}
            </h2>
            <p className="text-sm md:text-lg text-gray-700">{t("description")}</p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={electo}
              alt={t("imageAlt")}
              className=" rounded-lg"
              width={600}
              height={420}
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default NetworkData;
