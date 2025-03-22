"use client";

import { useTranslations } from "next-intl"; // Import translation hook
import Image from "next/image";
import electo from "@/../../public/image/story.png";

const CompleteElectrical = () => {
  const t = useTranslations("Electrical"); // Load translations dynamically

  return (
    <div className=" mt-12 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-12 space-y-8 md:space-y-0">
          
          {/* Image Section (Moves below text on mobile) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={electo}
              alt={t("imageAlt")}
              className="max-w-full rounded-lg"
              width={600}
              height={420}
              priority
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2  md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">
              {t("title")}
            </h2>
            <p className="text-sm md:text-lg text-gray-700">{t("description")}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompleteElectrical;