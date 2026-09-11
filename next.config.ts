import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/svet-barbershop",
  assetPrefix: "/svet-barbershop/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;