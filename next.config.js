const { withContentlayer } = require("next-contentlayer");
const withPWAInit = require("next-pwa");

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/~offline",
  },
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true,
    images: {
        loader: 'custom',
        loaderFile: './src/utils/image.ts',
    },
    turbopack: {},
};

module.exports = withContentlayer(withPWA(nextConfig));
