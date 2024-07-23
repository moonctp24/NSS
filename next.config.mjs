/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 구글이미지 가져온 임시 hostname 등록
    domains: ["cdn.icon-icons.com", "cdn2.hubspot.net", "localhost", "nedrug.mfds.go.kr"],
  },
};
export default nextConfig;
