/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'pbs.twimg.com',
      'comicvine.gamespot.com',
      'avatars.githubusercontent.com',
      'upload.wikimedia.org',
    ],
  },
}

module.exports = nextConfig
