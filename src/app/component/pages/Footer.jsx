"use client"
import { Input } from 'antd';
import { MailOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import logo from '@/../../public/logo.png'
export default function Footer() {
    return(
        <div>
            <footer className="bg-gray-900 text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* About Us Section */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">
            <Image className='h-10 w-36' src={logo} />
          </h2>
          <p className="text-sm">
            With a team of certified professionals and a commitment to high-quality materials and structured work methods, we confidently deliver top-notch building, insulating, and electrotechnical services, ensuring timely project completion.
          </p>
        </div>

        {/* Office Information */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Office</h2>
          <p className="text-sm">
            18 Office Park Building 7th Floor Unit C, <br />
            Jl. TB Simatupang Kav. 18, <br />
            Jakarta Selatan, 12390
          </p>
          <div className="flex space-x-2 mt-2">
            <span className="text-2xl">
              {/* Placeholder for social media icons */}
              <FaLinkedin />
            </span>
            <span className="text-2xl">
            <FaFacebook />
            </span>
            <span className="text-2xl">
               <FaInstagram/>
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm">Email: contact@contractor.co</p>
          <p className="text-sm">Phone: (+62) 877-2498-7246</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Subscribe To Our Newsletter</h2>
          <div className="flex items-center">
            <Input
              placeholder="Enter your email address"
              prefix={<MailOutlined />}
              suffix={<ArrowRightOutlined className='text-white hover:text-slate-600' />}
              className="bg-gray-800 hover:text-black rounded"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        Copyright © 2023 CompanyAF. All Rights Reserved
      </div>
    </footer>
        </div>
    )
}