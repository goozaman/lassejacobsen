/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/articles",
  //       destination: "/",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
