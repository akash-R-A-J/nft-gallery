/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['nft-cdn.alchemy.com'],
    },
    env: {
      ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    },
  };
  
  export default nextConfig;
  