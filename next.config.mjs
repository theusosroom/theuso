/** @type {import('next').NextConfig} */
const nextconfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '',
      },
    ],
  },
};

export default nextconfig;