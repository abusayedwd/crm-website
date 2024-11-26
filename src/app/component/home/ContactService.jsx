// "use client"

// import React, { useState } from 'react';
// import { Form, Input, Select, Button, notification } from 'antd';
// import { useContactMutation } from '@/redux/feature/contact';
// import toast, { Toaster } from 'react-hot-toast';
// import { useAllServiceQuery } from '@/redux/feature/service';

// const { Option } = Select;

// const QuotePage = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [contact, { isLoading }] = useContactMutation();
//   const { data: services } = useAllServiceQuery();
//   console.log(services);
  
//   const projectOptions = services?.map((service) => ({
//     label: service.title,
//     value: service.title,
//   }));

//   const handleProjectChange = (value) => {
//     setSelectedProject(value);
//     console.log(value);
//   };

//   // Use the form hook
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     console.log('Form values:', values);
//     try {
//       const res = await contact(values).unwrap();
//       console.log(res);
//       if (res?.statusCode === 201) {
//         toast.success(res?.message);
//         form.resetFields(); // Reset form fields after successful submission
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div id="contact" className="py-10 md:container flex flex-col items-center bg-gray-50 mt-10">
//       {/* Header Section */}
//       <Toaster />
//       <div className="mb-10 px-4">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Electro Technical
//         </h1>
//         <div className="flex flex-wrap justify-center mt-4 space-x-2 text-sm md:text-base text-gray-600">
//           <span>• Professional Staff</span>
//           <span>• 100% Satisfaction</span>
//           <span>• Accurate Testing</span>
//           <span>• Transparent Pricing</span>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row gap-8 w-full px-4">
//         {/* Request a Quote Form */}
//         <div className="bg-[#F5FF5A] p-6 rounded-lg shadow-lg w-full md:w-3/5">
//           <h2 className="text-xl font-semibold mb-4">Request A Quote</h2>
//           <p className="mb-6">
//             Complete control over products allows us to offer our customers the best quality prices and services. We take great pride in everything we do.
//           </p>

//           <Form
//             name="my_form"
//             onFinish={onFinish}
//             layout="vertical" // Use vertical form layout
//             form={form} // Pass the form instance here
//           >
//             <div className="md:flex gap-4">
//               <Form.Item
//                 name="name"
//                 label="Name"
//                 className="w-full"
//                 rules={[{ required: true, message: 'Please input your name!' }]}
//               >
//                 <Input placeholder="Enter your name" />
//               </Form.Item>

//               <Form.Item
//                 name="email"
//                 label="Email"
//                 className="w-full"
//                 rules={[
//                   { required: true, message: 'Please input your email!' },
//                   { type: 'email', message: 'Please enter a valid email!' },
//                 ]}
//               >
//                 <Input placeholder="Enter your email" />
//               </Form.Item>
//             </div>

//             <div className="md:flex gap-4">
//               <Form.Item
//                 name="phone"
//                 label="Phone"
//                 className="w-full"
//                 rules={[{ required: true, message: 'Please input your phone number!' }]}
//               >
//                 <Input placeholder="Enter your phone number" />
//               </Form.Item>

//               <Form.Item
//                 name="serviceName"
//                 label="Select Your Service"
//                 className="w-full"
//                 rules={[{ required: true, message: 'Please select a service!' }]}
//               >
//                 <Select
//                   value={selectedProject}
//                   onChange={handleProjectChange}
//                   options={projectOptions}
//                   placeholder="Select Project"
//                   loading={!services}
//                 />
//               </Form.Item>
//             </div>

//             <Form.Item name="description" label="Additional Details">
//               <Input.TextArea rows={4} placeholder="Enter additional details" />
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit" className="w-full h-10 !bg-black !text-white">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>

//         {/* Contact Info Section */}
//         <div className="bg-[#F5FF5A] p-6 rounded-lg shadow-lg w-[100%] md:w-2/5">
//           <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
//           <div className="space-y-2">
//             <p>
//               <strong>Our Location:</strong><br />
//               18 Office Park Building, 21st Floor Unit C, 18 Simatupang Kav. 18, Jakarta Selatan, 12540
//             </p>
//             <p>
//               <strong>Quick Contact:</strong><br />
//               Email: <a href="mailto:contact@jhontraktor.co" className="underline">contact@jhontraktor.co</a><br />
//               Phone: +62 (877) 2469-7346
//             </p>
//             <p>
//               <strong>Opening Hours:</strong><br />
//               Monday - Friday<br />
//               09:00 AM - 06:00 PM
//             </p>
//             <p>Do you have any questions? Just contact us to get help!</p>
//             <Button type="primary" className="w-full bg-black text-white">
//               Contact Us
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuotePage;


"use client";

import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useContactMutation } from '@/redux/feature/contact';
import toast, { Toaster } from 'react-hot-toast';
import { useAllServiceQuery } from '@/redux/feature/service';
import { useTranslations } from 'next-intl';  // Import the useTranslations hook

const { Option } = Select;

const QuotePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contact, { isLoading }] = useContactMutation();
  const { data: services } = useAllServiceQuery();
  const t = useTranslations('QuotePage');  // Load translations for the 'QuotePage' namespace
  
  const projectOptions = services?.map((service) => ({
    label: service.title,
    value: service.title,
  }));

  const handleProjectChange = (value) => {
    setSelectedProject(value);
    console.log(value);
  };

  // Use the form hook
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log('Form values:', values);
    try {
      const res = await contact(values).unwrap();
      console.log(res);
      if (res?.statusCode === 201) {
        toast.success(res?.message);
        form.resetFields(); // Reset form fields after successful submission
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="py-10 md:container flex flex-col items-center bg-gray-50 mt-10">
      {/* Header Section */}
      <Toaster />
      <div className="mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {t('header')}
        </h1>
        <div className="flex flex-wrap justify-center mt-4 space-x-2 text-sm md:text-base text-gray-600">
          <span>{t('services.professionalStaff')}</span>
          <span>{t('services.satisfaction')}</span>
          <span>{t('services.accurateTesting')}</span>
          <span>{t('services.transparentPricing')}</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full px-4">
        {/* Request a Quote Form */}
        <div className="bg-[#F5FF5A] p-6 rounded-lg shadow-lg w-full md:w-3/5">
          <h2 className="text-xl font-semibold mb-4">{t('quoteForm.requestQuote')}</h2>
          <p className="mb-6">{t('quoteForm.description')}</p>

          <Form
            name="my_form"
            onFinish={onFinish}
            layout="vertical" // Use vertical form layout
            form={form} // Pass the form instance here
          >
            <div className="md:flex gap-4">
              <Form.Item
                name="name"
                label={t('quoteForm.nameLabel')}
                className="w-full"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder={t('quoteForm.nameLabel')} />
              </Form.Item>

              <Form.Item
                name="email"
                label={t('quoteForm.emailLabel')}
                className="w-full"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
              >
                <Input placeholder={t('quoteForm.emailLabel')} />
              </Form.Item>
            </div>

            <div className="md:flex gap-4">
              <Form.Item
                name="phone"
                label={t('quoteForm.phoneLabel')}
                className="w-full"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input placeholder={t('quoteForm.phoneLabel')} />
              </Form.Item>

              <Form.Item
                name="serviceName"
                label={t('quoteForm.serviceLabel')}
                className="w-full"
                rules={[{ required: true, message: 'Please select a service!' }]}
              >
                <Select
                  value={selectedProject}
                  onChange={handleProjectChange}
                  options={projectOptions}
                  placeholder={t('quoteForm.serviceLabel')}
                  loading={!services}
                />
              </Form.Item>
            </div>

            <Form.Item name="description" label={t('quoteForm.additionalDetailsLabel')}>
              <Input.TextArea rows={4} placeholder={t('quoteForm.additionalDetailsLabel')} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full h-10 !bg-black !text-white">
                {t('quoteForm.submitButton')}
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-[#F5FF5A] p-6 rounded-lg shadow-lg w-[100%] md:w-2/5">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <div className="space-y-2">
            <p>
              <strong>{t('contactInfo.location')}</strong><br />
              {t('contactInfo.address')}
            </p>
            <p>
              <strong>{t('contactInfo.quickContact')}</strong><br />
              Email: <a href="mailto:{t('contactInfo.email')}" className="underline">{t('contactInfo.email')}</a><br />
              Phone: {t('contactInfo.phone')}
            </p>
            <p>
              <strong>{t('contactInfo.openingHours')}</strong><br />
              {t('contactInfo.workingDays')}<br />
              {t('contactInfo.workingHours')}
            </p>
            <p>{t('contactInfo.contactUs')}</p>
            <Button type="primary" className="w-full bg-black text-white">
              {t('contactInfo.contactUs')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
