module.exports = {
  async rewrites() {
    return [
      {
        source: '/projects/n-queens',
        destination: 'https://n-queens-iota.vercel.app'
      },
      {
        source: '/projects/n-queens/:path*',
        destination: 'https://n-queens-iota.vercel.app/:path*'
      }
    ]
  }
}