/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "**", // allow all HTTP images
        },
        {
          protocol: "https",
          hostname: "**", // allow all HTTPS images
        },
      ],
    },
  };
  
  export default nextConfig;
  