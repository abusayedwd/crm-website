

// import Image from 'next/image';
// import React from 'react';
// import exp from '@/../../public/image/exp.png'

// const Exprerience = () => {
//     return (
//         <div id='about' className=' bg-[#A4A4A4]'>
//          <div className="md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-60 ">
//   {/* Stats Section */}
//   <div className="flex flex-col md:flex-row gap-6 md:mt-0  text-center md:text-left">
//     <div>
//       <span className="text-4xl font-bold text-[#F1DE47]">25+</span>
//       <p>Years of Experience</p>
//     </div>
//     <div>
//       <span className="text-4xl font-bold text-[#F1DE47]">378+ </span>
//       <p>Projects Completed</p>
//     </div>
//     <div>
//       <span className="text-4xl font-bold text-[#F1DE47]">69+</span>
//       <p>Winning Global Awards</p>
//     </div>
//   </div>

//   {/* Checklist Section */}
//   <div className="mt-6 md:mt-0 relative md:-top-24">
//     <div className="bg-[#F1DE47] p-6 rounded-lg font-sans">
//       <div className="flex items-center space-x-2 mb-4">
//         <span className="text-lg">✔</span>
//         <span>Quality Control System, 100% Satisfaction Guarantee</span>
//       </div>
//       <div className="flex items-center space-x-2 mb-4">
//         <span className="text-lg">✔</span>
//         <span>Highly Professional Staff, Accurate Testing Processes</span>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="text-lg">✔</span>
//         <span>Unrivaled Workmanship, Professional and Qualified</span>
//       </div>
//     </div>
//   </div>
// </div>



//             <div className="  p-8 md:p-16 flex flex-col md:flex-row items-center">
    
//       {/* Image Section */}
//       <div className="md:w-1/2 flex justify-center">
//         <Image
//           src= {exp} // Replace with the actual path to your image
//           alt="Experienced Contractors"
//           className="max-w-full md:h-[420px]  rounded-lg"
//         />
//       </div>

//    {/* Text Section */}
//    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//         <h2 className="text-4xl font-bold text-[#F1DE47]">25 years</h2>
//         <h3 className="text-4xl font-bold text-gray-800">of experience!</h3>
//         <p className=" mt-4">
//           We have a team of experienced professionals who have been in the industry for over 25 years. Our contractors
//           have a wealth of knowledge and skills that they have acquired over the years, making them experts in their
//           field.
//         </p>
//         <p className=" mt-4">
//           With 25 years of experience, our contractors have a deep understanding of industry standards and regulations.
//           We ensure that all our projects comply with the latest safety and building codes, and that the final product
//           meets or exceeds our client’s expectations.
//         </p>
//       </div>


//     </div>



//         </div>
//     );
// };

// export default Exprerience;


"use client";

import React from 'react';
import { useTranslations } from 'next-intl';  // Import the useTranslations hook
import Image from 'next/image';
import exp from '@/../../public/image/exp.png';

const Exprerience = () => {
  const t = useTranslations('Exprerience');  // Load translations for 'Exprerience' namespace

  return (
    <div id="about" className="bg-[#A4A4A4]">
      <div className="md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-60">
        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-6 md:mt-0 text-center md:text-left">
          <div>
            <span className="text-4xl font-bold text-[#F1DE47]">{t('yearsOfExperience')}</span>
            <p>{t('yearsText')}</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-[#F1DE47]">{t('projectsCompleted')}</span>
            <p>{t('projectsText')}</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-[#F1DE47]">{t('winningGlobalAwards')}</span>
            <p>{t('awardsText')}</p>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="mt-6 md:mt-0 relative md:-top-24">
          <div className="bg-[#F1DE47] p-6 rounded-lg font-sans">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">✔</span>
              <span>{t('qualityControl')}</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">✔</span>
              <span>{t('professionalStaff')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">✔</span>
              <span>{t('workmanship')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-16 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={exp}  
            alt="Experienced Contractors"
            className="max-w-full md:w-[600px] md:h-[420px] rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-[#F1DE47]">{t('textHeading')}</h2>
          <p className="mt-4">{t('description1')}</p>
          <p className="mt-4">{t('description2')}</p>
        </div>
      </div>
    </div>
  );
};

export default Exprerience;
