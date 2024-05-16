/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        remotePatterns : [{
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/**',
      }]
    }
};

export default nextConfig;
