/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },

 


  allowedDevOrigins: [
    "http://localhost:3000",
    "http://10.19.1.78:3000",
  ],

  
  outputFileTracingRoot: __dirname,

  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
