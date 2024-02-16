/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    JUST_URL: process.env.JUST_URL,
  },
};

export default nextConfig;
