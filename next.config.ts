// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   devIndicators: false
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,

  eslint: {
    ignoreDuringBuilds: true, // This will disable ESLint errors during the build process
  },
};

export default nextConfig;
