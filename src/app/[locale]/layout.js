 

// import 'tailwindcss/tailwind.css';
// import { NextIntlClientProvider } from 'next-intl'; 
// import { getMessages } from 'next-intl/server'; 
// import { notFound } from 'next/navigation'; 
// import { routing } from '@/i18n/routing'; 
// import Navbar from '../component/pages/Navbar';
// import Footer from '../component/pages/Footer';
// import Providers from "@/redux/Provider";
// import Head from 'next/head';
 
 

// export const metadata = {
//   title: "Lets Build Together | Electrical Installation Company for Wiring, Networks, and Safety Solutions",
//   description: "Lenbec is an experienced electrical installation company offering complete solutions for wiring, network infrastructure, fire safety, and access control systems. Our VCA-certified experts are ready to support your new construction and renovation projects in the Netherlands and beyond. Contact us today to learn more about our services and request a quote.",
// };

// export default async function LocaleLayout({ children, params }) {
//   const { locale } = params; 

//   if (!routing.locales.includes(locale)) {
//     notFound();
//   }
 
//   const messages = await getMessages();
  
//   return (
//     <html lang={locale}>  
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//       <link rel="icon"type="image/svg+xml" sizes="32x32" href="/icon.svg" />
//       </Head>
//       <body> 
//         <NextIntlClientProvider messages={messages}>
//           <Providers>
//             <Navbar />
//             {children}
//             <Footer />
//           </Providers>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }



import 'tailwindcss/tailwind.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '../component/pages/Navbar';
import Footer from '../component/pages/Footer';
import Providers from "@/redux/Provider";

// Metadata for the page
export const metadata = {
  title: "Lets Build Together | Electrical Installation Company for Wiring, Networks, and Safety Solutions",
  description: "Lenbec is an experienced electrical installation company offering complete solutions for wiring, network infrastructure, fire safety, and access control systems. Our VCA-certified experts are ready to support your new construction and renovation projects in the Netherlands and beyond. Contact us today to learn more about our services and request a quote.",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  // Handle invalid locale
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Fetch messages for localization
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg" />
      </head>
      <body> 
        {/* Internationalization and Redux Provider */}
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
 