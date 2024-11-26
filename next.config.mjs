
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
 
const nextConfig = {
    images: {
    // Add the domain here
      domains: ['167.99.11.156','api.lenbec.com'],
    },
  };
  
  // export default nextConfig
  export default withNextIntl(nextConfig) ;
  
