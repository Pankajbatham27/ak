/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // apiURl: 'http://localhost/tune/',
    apiURl: 'https://akbrothersphotography.com/',
  },
  images: {
    domains: ['akbrothersphotography.com'],
  },
};

module.exports = nextConfig;
