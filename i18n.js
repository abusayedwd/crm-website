import {getRequestConfig} from 'next-intl/server';
import { notFound } from 'next/navigation';
  const locales = ['en', 'nl'];

export default getRequestConfig(async ({locale}) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  if (!locales.includes(locale)) {
    notFound();
  }
 
  return {
 
    messages: (await import(`./messages/${locale}.json`)).default
  };
});