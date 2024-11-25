// // "use client";
// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Button, Select } from 'antd';
// // import Image from 'next/image';
// // import { MenuOutlined, CloseOutlined, GlobalOutlined } from '@ant-design/icons'; // Using Ant Design Icons for the menu toggle
 

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [language, setLanguage] = useState('English');
// //   useEffect(() => {
// //     setIsMounted(true);
// //   }, []);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(prevState => !prevState);
// //   };

// //   if (!isMounted) {
// //     return null;
// //   }


// //   const handleChange = (value) => {
// //     setLanguage(value);
// //     // Implement any additional logic to handle language change
// //   };
// //   return (
// //     <div className='w-full bg-transparent  absolute top-0 left-0 z-20 text-white'>
 
// //     <nav className="py-4 ">
// //       <div className="flex items-center justify-between container px-6">
// //         {/* Logo */}
// //         <div className="flex items-center">
// //         <h1 className='text-[#FF7420] font-medium text-[40px]'>CRM</h1>
// //         </div>

// //         {/* Centered Navigation Links */}
// //         <div className="hidden md:flex justify-center text-white flex-grow space-x-8 text-lg">
// //           <Link href="/" className="  hover:text-[#FF7420]">Home</Link>
// //           <Link href="#projects" className="  hover:text-[#FF7420]">Project</Link>
// //           <Link href="#service" className="    hover:text-[#FF7420]">Service</Link>
// //           <Link href="#about" className="    hover:text-[#FF7420]">About Us</Link>
// //           {/* <Link href="/about" className="text-gray-600 hover:text-blue-600">About Me</Link>
// //           <Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
// //           <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link> */}
// //         </div>

// //         {/* Login Button */}
// //         <div className="hidden md:flex items-center">
// //         <div className="flex items-center space-x-2 mr-4">
// //       <GlobalOutlined style={{ fontSize: '18px' }} />
// //       <Select
// //       value={language}
// //       onChange={handleChange}
// //       popupMatchSelectWidth={false}
// //       className=" "
// //       style={{
// //         color: 'white', 
// //         backgroundColor: 'transparent', 
// //       }}
// //       dropdownStyle={{
// //         backgroundColor: '#333', 
// //       }}
// //     >
// //       <Select.Option value="English" >English</Select.Option>
// //       <Select.Option value="Spanish" style={{ color: 'white' }}>Spanish</Select.Option>
// //       <Select.Option value="French" style={{ color: 'white' }}>French</Select.Option>
// //       <Select.Option value="German" style={{ color: 'white' }}>German</Select.Option>
// //     </Select>

// //     </div>
// //     <Link href="#contact">
    
// //           <Button  className="rounded !text-white  !bg-[#FF7420]">Contact Us</Button>
// //     </Link>
// //         </div>

// //         {/* Hamburger Icon for Mobile */}
// //         <div className="md:hidden flex items-center">
// //           <button onClick={toggleMenu} aria-label="Toggle Menu">
// //             {isMenuOpen ? (
// //               <CloseOutlined className="text-2xl text-white" />
// //             ) : (
// //               <MenuOutlined className="text-2xl text-white" />
// //             )}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu - Sliding in from the right */}
// //      {/* Mobile Menu - Sliding in from the right */}
// // <div
// //   className={`fixed inset-y-0 right-0 z-50 mt-16 bg-white h-10 text-center p-4 transform ${
// //     isMenuOpen ? 'translate-x-0 !bg-white text-orange-300' : 'translate-x-full '
// //   } transition-transform duration-300 ease-in-out md:hidden w-[60%]`}
// // >
// //   <Link href="/" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Home</Link>
// //   <Link href="/chatbot" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Project</Link>
// //   <Link href="/pricing" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Service</Link>
// //   <Link href="/about" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>About Us</Link>

// //   {/* Login Button in Mobile Menu */}
// //   <Link href="/login">
// //     <Button onClick={toggleMenu} className="rounded !text-white !bg-[#FF7420]">Contact Us</Button>
// //   </Link>
// // </div>


// //     </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;


// "use client";
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button, Select } from 'antd';
// import { MenuOutlined, CloseOutlined, GlobalOutlined } from '@ant-design/icons'; // Using Ant Design Icons for the menu toggle

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [language, setLanguage] = useState('English');

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(prevState => !prevState);
//   };

//   if (!isMounted) {
//     return null;
//   }

//   const handleChange = (value) => {
//     setLanguage(value);
//     // Implement any additional logic to handle language change
//   };

//   return (
//     <div className='w-full fixed bg-transparent top-0 left-0 z-20 text-white'>
//       <nav className="py-4">
//         <div className="flex items-center justify-between container px-6">
//           {/* Logo */}
//           <div className="flex items-center">
            
//             <h1 className='text-[#FF7420] font-medium text-[40px]'>CRM</h1>
//           </div>

//           {/* Centered Navigation Links */}
//           <div className="hidden md:flex justify-center text-white flex-grow space-x-8 text-lg">
//             <Link href="/" className="hover:text-[#FF7420]">Home</Link>
//             <Link href="#projects" className="hover:text-[#FF7420]">Project</Link>
//             <Link href="#service" className="hover:text-[#FF7420]">Service</Link>
//             <Link href="#about" className="hover:text-[#FF7420]">About Us</Link>
//           </div>

//           {/* Login Button */}
//           <div className="hidden md:flex items-center">
//             <div className="flex items-center space-x-2 mr-4">
//               <GlobalOutlined style={{ fontSize: '18px' }} />
//               <Select
//                 value={language}
//                 onChange={handleChange}
//                 popupMatchSelectWidth={false}
//                 className=""
//                 style={{
//                   color: 'white',
//                   backgroundColor: 'transparent',
//                 }}
//                 dropdownStyle={{
//                   backgroundColor: '#333',
//                 }}
//               >
//                 <Select.Option value="English">English</Select.Option>
//                 <Select.Option value="Spanish" style={{ color: 'white' }}>Spanish</Select.Option>
//                 <Select.Option value="French" style={{ color: 'white' }}>French</Select.Option>
//                 <Select.Option value="German" style={{ color: 'white' }}>German</Select.Option>
//               </Select>
//             </div>
//             <Link href="#contact">
//               <Button className="rounded !text-white !bg-[#FF7420]">Contact Us</Button>
//             </Link>
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} aria-label="Toggle Menu">
//               {isMenuOpen ? (
//                 <CloseOutlined className="text-2xl text-white" />
//               ) : (
//                 <MenuOutlined className="text-2xl text-white" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - Sliding in from the right */}
//         <div
//           className={`fixed inset-y-0 right-0 z-50 mt-16 bg-white h-10 text-center p-4 transform ${
//             isMenuOpen ? 'translate-x-0 h-60 bg-white text-black' : 'translate-x-full'
//           } transition-transform duration-300 ease-in-out md:hidden w-[60%]`}
//         >
//           <Link href="/" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Home</Link>
//           <Link href="#projects" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Project</Link>
//           <Link href="#service" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Service</Link>
//           <Link href="#about" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>About Us</Link>

//           {/* Login Button in Mobile Menu */}
//           <Link href="#contact">
//             <Button onClick={toggleMenu} className="rounded !text-white !bg-[#FF7420]">Contact Us</Button>
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Select } from 'antd';
import { GlobalOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import logo from '@/../../public/image/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [background, setBackground] = useState('bg-transparent');
  const [language, setLanguage] = useState('English');

  const handleChange = (value) => {
    setLanguage(value);
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
            <Image className='md:h-16 h-12 w-36 md:w-60 rounded-lg bg-transparent' src={logo} />
            {/* <h1 className='text-[#FF7420] font-medium text-[40px]'>CRM</h1> */}
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex justify-center text-white flex-grow space-x-8 text-lg">
            <Link href="/" className="hover:text-[#FF7420]">Home</Link>
            <Link href="#about" className="hover:text-[#FF7420]">About Us</Link>
            <Link href="#service" className="hover:text-[#FF7420]">Service</Link>
            <Link href="#projects" className="hover:text-[#FF7420]">Project</Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            {/* <div className="flex items-center space-x-2 mr-4">
              <GlobalOutlined style={{ fontSize: '18px' }} />
              <Select
                value={language}
                onChange={handleChange}
                popupMatchSelectWidth={false}
                style={{
                  color: 'white',
                  backgroundColor: 'transparent',
                }}
                dropdownStyle={{
                  backgroundColor: '#333',
                }}
              >
                <Select.Option value="English">English</Select.Option>
                <Select.Option value="Spanish" style={{ color: 'white' }}>Spanish</Select.Option>
                <Select.Option value="French" style={{ color: 'white' }}>French</Select.Option>
                <Select.Option value="German" style={{ color: 'white' }}>German</Select.Option>
              </Select>
            </div> */}
            <Link href="#contact">
              <Button className="rounded !text-white !bg-yellow-500">Contact Us</Button>
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
          <Link href="/" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Home</Link>
          <Link href="#projects" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Project</Link>
          <Link href="#service" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>Service</Link>
          <Link href="#about" className="block hover:text-blue-600 py-2" onClick={toggleMenu}>About Us</Link>

          {/* Login Button in Mobile Menu */}
          <Link href="#contact">
            <Button onClick={toggleMenu} className="rounded !text-white !bg-[#FF7420]">Contact Us</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
