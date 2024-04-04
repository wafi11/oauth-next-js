import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
           { hostname : "avatars.githubusercontent.com"},
           { hostname : "cdn.myanimelist.net"},
           { hostname : "lh3.googleusercontent.com"},
        ]
    }
};

export default nextConfig;
