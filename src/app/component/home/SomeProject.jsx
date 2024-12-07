import Image from 'next/image';
import React from 'react';
import project1 from '@/../../public/image/project2.png';
import project2 from '@/../../public/image/project.png';
import { useTranslations } from 'next-intl';

const SomeProject = () => {
    const t = useTranslations("SomeProject");
    return (
        <div className='container'>
             <h1 className="md:text-[44px] py-5 font-semibold">{t('title')}</h1>

                <div className='md:flex gap-4 mt-12 items-center'>
                        <div className='w-full md:w-1/2'>
                        <p className="font-medium">{t('description')}</p>
                             <ul>
            <li>{t('project1')}</li>
            <li>{t('project2')}</li>
            <li>{t('project3')}</li>
            <li>{t('project4')}</li>
            <li>{t('project5')}</li>
            <li>{t('project6')}</li>
            <li>{t('project7')}</li>
          </ul>
                        </div>

                        <div className='w-full md:w-1/2 flex relative'>
                        <div className='mb-20'>

                        <Image
               src={project1}  
            alt="Experienced Contractors"
            className="max-w-full md:w-[400px] md:h-[320px] rounded-lg"
          />
                        </div>
                        <div className=' absolute right-24 bottom-2'>

                        <Image
               src={project2}  
            alt="Experienced Contractors"
            className="max-w-full md:w-[300px] md:h-[220px] rounded-lg"
          />
                        </div>
                         
                        </div>
                       
                </div>
        </div>
    );
};

export default SomeProject;

 