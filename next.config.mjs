/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**` },
    ],
  }
};

export default nextConfig;
