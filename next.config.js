/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: {
            ssr: true,
        },
        removeConsole: true,
    },
};

module.exports = nextConfig;
