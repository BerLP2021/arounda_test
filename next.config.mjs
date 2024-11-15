/** @type {import('next').NextConfig} */
import { _smallGrid } from './src/data/variables.js';
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: `/gallery/1/${_smallGrid}`,
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
