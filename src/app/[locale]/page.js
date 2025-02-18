  
// import Benner from "../component/home/Benner";
// import ClientTestimonial from "../component/home/ClientTestimonial";
// import QuotePage from "../component/home/ContactService";
// import Exprerience from "../component/home/Exprerience";
// import FeaturedProject from "../component/home/FeaturedProject";
// import ServicePage from "../component/home/Service";
// import SomeProject from "../component/home/SomeProject";
 
 

 

// export default function Home() {

//   const metadata = {
//     title: 'Lets Build Together | Electrical Installation Company for Wiring, Networks, and Safety Solutions', 
//     description: 'Your page description here', // Set a dynamic description
//   };
 
//   return (
//      <div className=" ">
//           <Benner />
//           <Exprerience />
//           <SomeProject />
//           <ServicePage />
//           <FeaturedProject />
//           <QuotePage />
//           <ClientTestimonial />
//      </div>
//   );
// }


import Head from 'next/head';
import Benner from "../component/home/Benner";
import ClientTestimonial from "../component/home/ClientTestimonial";
import QuotePage from "../component/home/ContactService";
import Exprerience from "../component/home/Exprerience";
import FeaturedProject from "../component/home/FeaturedProject";
import ServicePage from "../component/home/Service";
import SomeProject from "../component/home/SomeProject";
import ElectricalInstallationSection from '../component/home/Electrical';
import NetworkData from '../component/home/NetworkData';
import FireSafty from '../component/home/FireSafty';
import AccessControl from '../component/home/AccessControl';

export default function Home() {
 

  return (
    <div>
      <Head> 
      <link rel="icon"type="image/svg+xml" sizes="32x32" href="/icon.svg" />
  </Head>

      <Benner />
      <Exprerience />
      <ElectricalInstallationSection />
      <ServicePage />
      <NetworkData />
      <SomeProject />
      <FireSafty />
      <FeaturedProject />
      <AccessControl />
      <ClientTestimonial />
      <QuotePage />
    </div>
  );
}
