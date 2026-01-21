import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用输出Standalone模式，优化生产部署
  output: 'standalone',
  
  // 配置基础路径（如果应用不在根路径）
  // basePath: '/your-base-path',
  
  // 配置资产前缀（如果使用CDN
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://your-cdn-domain.com' : undefined,
  
  // 允许的hosts（安全配置）
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  },
  
  // 启用压缩
  compress: true,
  
  // 生产环境优化
  poweredByHeader: false,
  generateEtags: false,
  
  // 环境变量配置
  env: {
    // 自定义环境变量可以在这里添加
  },
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
