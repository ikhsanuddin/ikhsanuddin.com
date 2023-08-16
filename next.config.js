const path = require("path");
const { withContentlayer } = require("next-contentlayer");
const withPWAInit = require("next-pwa");

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ["app-build-manifest.json"],
  disable: process.env.NODE_ENV === 'development',
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/~offline",
  }
});

const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve('next-pwa');
  const packageDirectory = path.dirname(packagePath);
  const registerJs = path.join(packageDirectory, "register.js");

  return entry().then((entries) => {
    // Register SW on App directory, solution: https://github.com/shadowwalker/next-pwa/pull/427
    if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
      if (Array.isArray(entries["main-app"])) {
        entries["main-app"].unshift(registerJs);
      } else if (typeof entries["main-app"] === "string") {
        entries["main-app"] = [registerJs, entries["main-app"]];
      }
    }
    return entries;
  });
};

/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, 
    swcMinify: true,
    webpack: (config) => {
      const entry = generateAppDirEntry(config.entry);
      config.entry = () => entry;
      return config;
    },
    images: {
        loader: 'custom',
        loaderFile: './src/utils/image.ts',
      }, 
};

module.exports = withContentlayer(withPWA(nextConfig));
