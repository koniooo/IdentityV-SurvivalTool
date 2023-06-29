/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  distDir: "docs", // 開発中はコメントアウトする（ホットリロードが効かなくなるため）
  assetPrefix: "./", // 上に同じ
  basePath: "/IdentityV-SurvivalTool", // 上に同じ
};

module.exports = nextConfig;
