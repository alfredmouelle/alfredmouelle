/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alfredmouelle.com',
      },
    ],
  },
  headers: () => [
    // {
    //   source: '/_next/static/(.*)',
    //   headers: [
    //     {
    //       key: 'Cache-Control',
    //       value: 'public, max-age=31536000, immutable',
    //     },
    //   ],
    // },
    {
      source: '/(.*).(woff2|svg|webp|pdf)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default nextConfig;
