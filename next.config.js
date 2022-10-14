/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {nextConfig,
images:{
  domains: ["ik.imagekit.io","image.tmbd.org","www.themoviedb.org"],
},}
