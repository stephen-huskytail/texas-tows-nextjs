/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment: trailing slash handled by vercel.json redirects
  trailingSlash: false,
  // Compress responses
  compress: true,
  // Performance: inline critical CSS to eliminate render-blocking stylesheet
  experimental: {
    optimizeCss: true,
    inlineCss: true,
  },
  // Image optimization: allow CDN domain
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.manuscdn.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Strict mode for better React behavior
  reactStrictMode: true,
  // Remove X-Powered-By header
  poweredByHeader: false,
};
export default nextConfig;
