/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  distDir: "docs", // 開発中はコメントアウトする（ホットリロードが効かなくなるため）
  assetPrefix: "./", // 同じく
  // basePath: "/IdentityV-SurvivalTool", // 同じく
};

module.exports = nextConfig;
