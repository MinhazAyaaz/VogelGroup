/** @type {import('next').NextConfig} */
const nextConfig = 
{
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'uploads-ssl.webflow.com',
          },
          {
            protocol: 'https',
            hostname: 'c0.klipartz.com',
          },
        ],
      },
}

module.exports = nextConfig
