"use client";

import { Input } from 'antd';
import { MailOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import logo from '@/../../public/logo.png';
import { useTranslations } from 'next-intl';  // Import useTranslations hook

export default function Footer() {
  const t = useTranslations('Footer');  // Load translations for the 'Footer' namespace
  
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Us Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">
              <Image className='h-10 w-36' src={logo} alt="Company Logo" />
            </h2>
            <p className="text-sm">
              {t('aboutUs')}
            </p>
          </div>

          {/* Office Information */}
          <div>
            <h2 className="text-lg font-semibold mb-2">{t('office.title')}</h2>
            <p className="text-sm">{t('office.address')}</p>
            <div className="flex space-x-2 mt-2">
              <span className="text-2xl">
                {/* Social Media Icons */}
                <FaLinkedin title={t('office.social.linkedin')} />
              </span>
              <span className="text-2xl">
                <FaFacebook title={t('office.social.facebook')} />
              </span>
              <span className="text-2xl">
                <FaInstagram title={t('office.social.instagram')} />
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-2">{t('contact.title')}</h2>
            <p className="text-sm">{t('contact.email')}</p>
            <p className="text-sm">{t('contact.phone')}</p>
          </div>

          {/* Newsletter Subscription */}
          {/* <div>
            <h2 className="text-lg font-semibold mb-2">{t('newsletter.title')}</h2>
            <div className="flex items-center">
              <Input
                placeholder={t('newsletter.placeholder')}
                prefix={<MailOutlined />}
                suffix={<ArrowRightOutlined className='text-white hover:text-slate-600' />}
                className="bg-gray-800 hover:text-black rounded"
              />
            </div>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          {t('footerBottom')}
        </div>
      </footer>
    </div>
  );
}
