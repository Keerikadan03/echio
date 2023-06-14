/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/api/user/me',
        destination: '/api/auth/session',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
