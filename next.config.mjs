/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  transpilePackages:['@repo/ui'],
  images:{
    unoptimized:true,
  }
}
export default nextConfig;