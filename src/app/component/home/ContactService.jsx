"use client"

import React from 'react';
import { Input, Select, Button } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const QuotePage = () => {
  return (
    <div id='contact' className=" py-10 md:container flex flex-col items-center bg-gray-50 mt-10">
      {/* Header Section */}
      <div className=" mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Leading in Building & Electro Technical
        </h1>
        <div className="flex flex-wrap justify-center mt-4 space-x-2 text-sm md:text-base text-gray-600">
          <span>• Professional Staff</span>
          <span>• 100% Satisfaction</span>
          <span>• Accurate Testing</span>
          <span>• Transparent Pricing</span>
        </div>
      </div>

      {/* Main Content Section */}

    <div className="flex flex-col md:flex-row gap-8 w-full px-4">
      {/* Request a Quote Form */}
      <div className="bg-orange-500 p-6 rounded-lg shadow-lg w-full md:w-3/5">
        <h2 className="text-xl font-semibold text-white mb-4">Request A Quote</h2>
        <p className="text-white mb-6">
          Complete control over products allows us to offer our customers the best quality prices and services. We take great pride in everything we do.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name" className="py-2 px-3" />
            <Input placeholder="Email" className="py-2 px-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Phone" className="py-2 px-3" />
            <Select placeholder="Select Your Service" className="w-full">
              <Option value="electrical">Electrical Service</Option>
              <Option value="building">Building Service</Option>
            </Select>
          </div>
          <TextArea rows={4} placeholder="Additional Details" className="py-2 px-3" />
          <Button type="primary" className="w-full bg-black text-white">
            Submit
          </Button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="bg-orange-500 p-6 rounded-lg shadow-lg w-[100%] md:w-2/5">
        <h2 className="text-xl font-semibold text-white mb-4">Contact Info</h2>
        <div className="text-white space-y-2">
          <p>
            <strong>Our Location:</strong><br />
            18 Office Park Building, 21th Floor Unit C, 18 Simatupang Kav. 18, Jakarta Selatan, 12540
          </p>
          <p>
            <strong>Quick Contact:</strong><br />
            Email: <a href="mailto:contact@jhontraktor.co" className="underline">contact@jhontraktor.co</a><br />
            Phone: +62 (877) 2469-7346
          </p>
          <p>
            <strong>Opening Hours:</strong><br />
            Monday - Friday<br />
            09:00 AM - 06:00 PM
          </p>
          <p>Do you have any questions? Just contact us to get help!</p>
          <Button type="primary" className="w-full bg-black text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </div>


    </div>
  );
};

export default QuotePage;
