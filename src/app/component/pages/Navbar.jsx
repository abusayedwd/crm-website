 

"use client";
import React, { useState, useEffect } from 'react';
  // Use next-intl Link component for proper routing with locale
import { Button, Select } from 'antd';
import { GlobalOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
   // For route navigation
import Link from 'next/link';
import { usePathname, useRouter } from '@/i18n/routing';
import logo from '@/../../public/image/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [background, setBackground] = useState('bg-transparent');
  
  const t = useTranslations('Navbar');
  const locale = useLocale();
  // Get router instance from next/router
  const router = useRouter();
 const pathName  =  usePathname()
 

  const handleLanguageChange = (locale) => { 
    router.replace( pathName , { locale }); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setBackground('bg-[#191A19]'); // Change to your desired color
    } else {
      setBackground('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 z-20 text-white ${background}`}>
      <nav className="py-4">
        <div className="flex items-center justify-between container px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image className='md:h-16 h-12 w-32 md:w-60 rounded-lg bg-transparent' src={logo} alt="Logo" />
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex justify-center text-white flex-grow space-x-8 text-lg">
            <Link href="/" className="hover:text-[#FF7420] text-[#F1DE47]">{t('home')}</Link>
            <Link href="#about" className="hover:text-[#FF7420] text-[#F1DE47]">{t('about')}</Link>
            <Link href="#service" className="hover:text-[#FF7420] text-[#F1DE47]">{t('service')}</Link>
            <Link href="#projects" className="hover:text-[#FF7420] text-[#F1DE47]">{t('projects')}</Link>
          </div>

          {/* Language and Contact Button */}
          <div className=" md:flex items-center">
            <div className="flex items-center space-x-2 mr-4">
              <GlobalOutlined style={{ fontSize: '18px' }} />
              <Select
                value={locale}
                onChange={handleLanguageChange}
                popupMatchSelectWidth={false}
                style={{
                  color: 'white',
                  backgroundColor: 'transparent',
                }}
                dropdownStyle={{
                  backgroundColor: '#333',
                }}
              >
                <Select.Option value="en">{t('language')}</Select.Option>
                <Select.Option value="nl" style={{  }}>{t('dutch')}</Select.Option>
              </Select>
            </div>
            <Link href="#contact">
              <Button className="rounded md:flex hidden !bg-[#F1DE47]">{t('contact')}</Button>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <CloseOutlined className="text-2xl text-white" />
              ) : (
                <MenuOutlined className="text-2xl text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Sliding in from the right */}
        <div
          className={`fixed inset-y-0 right-0 z-50 mt-16 bg-white h-10 text-center p-4 transform ${
            isMenuOpen ? 'translate-x-0 h-60 bg-white text-black' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden w-[60%]`}
        >
          <Link href="/" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>{t('home')}</Link>
          <Link href="#projects" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>{t('projects')}</Link>
          <Link href="#service" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>{t('service')}</Link>
          <Link href="#about" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>{t('about')}</Link>

          {/* Contact Button in Mobile Menu */}
          <Link href="#contact">
            <Button onClick={toggleMenu} className="rounded !text-white !bg-[#FF7420]">{t('contact')}</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
