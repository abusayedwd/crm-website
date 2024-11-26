
 
 import Providers from '@/redux/Provider';
 
import 'tailwindcss/tailwind.css'; 
 
  
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
    <Providers>
     
        {children}
     
    </Providers>
  
        </body>
    </html>
  )
}



// import 'tailwindcss/tailwind.css';
// import { NextIntlClientProvider } from 'next-intl'; // Import the provider to make translations available in the app
// import { getMessages } from 'next-intl/server'; // Import function to retrieve translation messages
// import { notFound } from 'next/navigation'; // Import notFound function for 404 handling
// import { routing } from '@/i18n/routing'; // Import routing configuration for supported locales
// import Navbar from '../component/pages/Navbar';
// import Footer from '../component/pages/Footer';
// import Providers from "@/redux/Provider";

// export default async function LocaleLayout({ children, params }) {
//   const { locale } = params; 

  
//   if (!routing.locales.includes(locale)) {
   
//     notFound();
//   } 

//   const messages = await getMessages();

//   return (
//     <html lang={locale}>  
//       <body>
//         {/* Provide the translation messages to the client-side using NextIntlClientProvider */}
//         <Providers> 
//         <NextIntlClientProvider messages={messages}>
//         {children} 
//         </NextIntlClientProvider>
//    </Providers>
//       </body>
//     </html>
//   );
// }


