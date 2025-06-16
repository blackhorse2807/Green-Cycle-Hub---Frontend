import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    // any domains you load via <Image src="https://…"/>
    domains: [
      "example.com",
      "velebitgreen.s3.ap-south-1.amazonaws.com",
      "velebitgreen-marketplace-images.s3.ap-south-1.amazonaws.com",
      "d383kuiij66lee.cloudfront.net",
      "regalfincorp.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd383kuiij66lee.cloudfront.net',
        port: '',
        // match anything under /seller/…/images
        pathname: '/**',
      },
    ],
    // alternatively you can use remotePatterns:
    /*
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velebitgreen.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/product-images/**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
    ],
    */
  },
};

export default nextConfig;
