import Image from "next/image";
import React from "react";
import exp from "@/../../public/image/testo.jpg";
import { useTranslations } from "next-intl";

const ClientTestimonial = () => {
  const t = useTranslations("Testimonial");

  return (
    <div className="container">
      <h1 className="md:text-[44px] text-[34px] py-5 md:container  font-semibold">
        {t("title")}
      </h1>
      <div className="bg-gray-50 py-10">
        <div className="md:flex items-center gap-4 md:container">
          <div className="w h-full md:w-1/2">
            <Image
              src={exp}
              alt="Experienced Contractors"
              className="max-w-full md:w-[700px] md:h-[420px] h-60 rounded-lg"
            />
          </div>
          <div className="w h-full md:w-1/2">
            <p className="">{t("description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
