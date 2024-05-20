import path from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextui.org',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'media.lucyinthesky.com',
                port: '',

            }
        ]
    },
    sassOptions: {
        includePaths: [path.join(__filename, 'styles')],
    },
};

export default nextConfig;
