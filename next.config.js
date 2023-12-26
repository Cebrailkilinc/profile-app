/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.icons8.com'], // Add the domain of your image source
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
      ],
    },
  
  };
  
  module.exports = nextConfig;
  