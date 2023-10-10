/** @type {import('next').NextConfig} */
const nextConfig = 
{
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scroll-driven-animations.style',
          },
          {
            protocol: 'https',
            hostname: 'uploads-ssl.webflow.com',
          },
        ],
      },
}

module.exports = nextConfig
