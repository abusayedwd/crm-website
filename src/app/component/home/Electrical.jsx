"use client";

import { useTranslations } from "next-intl"; // Import translation hook
import Image from "next/image";
import electro from "@/../../public/image/service1.png";

const ElectricalInstallationSection = () => {
  const t = useTranslations("ElectricalInstallation"); // Load translations dynamically

  return (
    <div className="bg-gray-100 mt-12 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12 space-y-8 md:space-y-0">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2  text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">
              {t("title")}
            </h2>
            <p className="text-sm md:text-lg text-gray-700">{t("description")}</p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={electro}
              alt={t("imageAlt")}
              className=" rounded-lg h-[300px] md:h-[400px]"
              width={600}
              height={220}
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ElectricalInstallationSection;

