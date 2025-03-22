import Image from "next/image";
import React from "react";
import project1 from "@/../../public/image/projectu.png";
// import project1 from '@/../../public/image/projectu.png';
import { useTranslations } from "next-intl";

const SomeProject = () => {
  const t = useTranslations("SomeProject");
  return (
    <div className="container mx-auto">
      <h1 className="md:text-[44px] py-5 font-semibold">{t("title")}</h1>

      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <p className="font-medium">{t("description")}</p>
          <ul>
            <li>{t("project1")}</li>
            <li>{t("project2")}</li>
            <li>{t("project3")}</li>
            <li>{t("project4")}</li>
            <li>{t("project5")}</li>
            <li>{t("project6")}</li>
            <li>{t("project7")}</li>
          </ul>
        </div>

    
           <div className="w-full md:w-1/2 flex justify-center">
                      <Image
                        src={project1}
                        alt={t("imageAlt")}
                        className="max-w-full rounded-lg md:h-[450px]"
                        width={600}
                        height={420}
                        priority
                      />
                    </div>
      
      </div>
    </div>
  );
};

export default SomeProject;
