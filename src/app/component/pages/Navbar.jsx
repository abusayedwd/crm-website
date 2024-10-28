"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Select } from 'antd';
import Image from 'next/image';
import { MenuOutlined, CloseOutlined, GlobalOutlined } from '@ant-design/icons'; // Using Ant Design Icons for the menu toggle
 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [language, setLanguage] = useState('English');
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  if (!isMounted) {
    return null;
  }


  const handleChange = (value) => {
    setLanguage(value);
    // Implement any additional logic to handle language change
  };
  return (
    <div className='w-full bg-transparent absolute top-0 left-0 z-20 text-white'>
 
    <nav className="py-4 ">
      <div className="flex items-center justify-between container px-6">
        {/* Logo */}
        <div className="flex items-center">
        <h1 className='text-[#FF7420] font-medium text-[40px]'>CRM</h1>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex justify-center text-white flex-grow space-x-8 text-lg">
          <Link href="/" className="    hover:text-[#FF7420]">Home</Link>
          <Link href="/blog" className="  hover:text-[#FF7420]">Project</Link>
          <Link href="/chatbot" className="    hover:text-[#FF7420]">Service</Link>
          <Link href="/pricing" className="    hover:text-[#FF7420]">About Us</Link>
          {/* <Link href="/about" className="text-gray-600 hover:text-blue-600">About Me</Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link> */}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
        <div className="flex items-center space-x-2 mr-4">
      <GlobalOutlined style={{ fontSize: '18px' }} />
      <Select
      value={language}
      onChange={handleChange}
      popupMatchSelectWidth={false}
      className=" "
      style={{
        color: 'white', 
        backgroundColor: 'transparent', 
      }}
      dropdownStyle={{
        backgroundColor: '#333', // Optional: Dropdown background for contrast
      }}
    >
      <Select.Option value="English" >English</Select.Option>
      <Select.Option value="Spanish" style={{ color: 'white' }}>Spanish</Select.Option>
      <Select.Option value="French" style={{ color: 'white' }}>French</Select.Option>
      <Select.Option value="German" style={{ color: 'white' }}>German</Select.Option>
    </Select>

    </div>
          <Button  className="rounded !text-white  !bg-[#FF7420]">Contact Us</Button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <CloseOutlined className="text-2xl text-gray-800" />
            ) : (
              <MenuOutlined className="text-2xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sliding in from the right */}
      <div
        className={`fixed inset-y-0 right-0 z-50 mt-12 h-10 bg-[#eff3f7] text-center p-4 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden w-[60%]`} // Adjust width as needed
      >
        <Link href="/" className="block text-gray-600 hover:text-blue-600 py-2" onClick={toggleMenu}>Home</Link>
        <Link href="/chatbot" className="block text-gray-600 hover:text-blue-600 py-2" onClick={toggleMenu}>Project</Link>
        <Link href="/pricing" className="block text-gray-600 hover:text-blue-600 py-2" onClick={toggleMenu}>Service</Link>
        <Link href="/about" className="block text-gray-600 hover:text-blue-600 py-2" onClick={toggleMenu}>About Us</Link>
        {/* <Link href="/blog" className="block text-gray-600 hover:text-blue-600 py-2" onClick={toggleMenu}>Blog</Link>
        <Link href="/faq" className="block text-gray-600 hover:text-blue-600 py-2" onClick={toggleMenu}>FAQ</Link>
        <Link href="/contact" className="block text-gray-600 hover:text-blue-600 py-2" onClick={toggleMenu}>Contact</Link> */}

        {/* Login Button in Mobile Menu */}
        <Link href="/login">
        
        <Button onClick={toggleMenu}  className="rounded !text-white  !bg-[#FF7420]">Contact Us</Button>
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
