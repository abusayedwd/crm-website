  
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

export default function Home() {
  const metadata = {
    title: 'Lets Build Together | Electrical Installation Company for Wiring, Networks, and Safety Solutions',
    description: 'Your page description here', // Set a dynamic description
  };

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
 
      </Head>

      <Benner />
      <Exprerience />
      <SomeProject />
      <ServicePage />
      <FeaturedProject />
      <QuotePage />
      <ClientTestimonial />
    </div>
  );
}
