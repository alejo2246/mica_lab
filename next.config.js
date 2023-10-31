const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Otras configuraciones de Next.js aquí...
};

module.exports = withSvgr(nextConfig);
