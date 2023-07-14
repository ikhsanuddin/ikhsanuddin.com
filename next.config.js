const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, 
    swcMinify: true,
    images: {
        loader: 'custom',
        loaderFile: './src/utils/image.ts',
      }, 
};

module.exports = withContentlayer(nextConfig);
