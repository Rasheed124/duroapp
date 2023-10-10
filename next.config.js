/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

    
  images: {
    domains: ['cdn.sanity.io'],
    //  unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.sanity.io",
    //     port: "",
    //   },
    // ],
  },
}

module.exports = nextConfig
