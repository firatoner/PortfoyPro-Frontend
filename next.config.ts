/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Build sırasında ESLint hatalarını yoksay
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;
  