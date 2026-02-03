import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["@repo/ui", "@repo/themes"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "/uploads/**" },
            { protocol: "http", hostname: "localhost", port: "8000", pathname: "/uploads/**" },
            { protocol: "http", hostname: "cms-api", port: "8000", pathname: "/uploads/**" },
        ],
    },
    experimental: {
        externalDir: true,
    },
};

export default nextConfig;
