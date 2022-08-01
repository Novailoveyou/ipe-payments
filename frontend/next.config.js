/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require('next-secure-headers')
const withPWA = require('next-pwa')
const dev = process.env.NODE_ENV === 'development'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  // trailingSlash: true,
  images: {
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/mitu-institute/',
    domains: ['res.cloudinary.com']
  },
  i18n: {
    locales: ['ru', 'en', 'kk_KZ', 'uz_UZ'],
    defaultLocale: 'ru',
    localeDetection: true
  },
  pwa: {
    dest: 'public',
    disable: dev,
    register: true,
    scope: '/'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: createSecureHeaders()
        // * to make some analytic tools work such as scroll map uncomment lines below and comment out upper line
        // headers: createSecureHeaders({
        //   referrerPolicy: 'no-referrer-when-downgrade',
        //   frameGuard: false
        // })
      }
    ]
  }
}

module.exports = nextConfig
