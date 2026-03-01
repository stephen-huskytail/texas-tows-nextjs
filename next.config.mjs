/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment: trailing slash handled by vercel.json redirects
  trailingSlash: false,
  // Compress responses
  compress: true,
  // Image optimization: allow CDN domain
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.manuscdn.com",
      },
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
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
