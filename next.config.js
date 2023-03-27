/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.dog.ceo"],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
