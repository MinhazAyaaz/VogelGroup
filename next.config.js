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
        ],
      },
}

module.exports = nextConfig
