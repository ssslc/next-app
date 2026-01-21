#!/bin/bash

# Next.js + Nginx 部署脚本
set -e

echo "🚀 开始部署 Next.js 应用..."

# 检查Node.js版本
echo "?? 检查Node.js版本..."
node --version

# 安装依赖
echo "📦 安装依赖..."
pnpm install

# 构建应用
echo "🔨 构建应用..."
pnpm run build

echo "✅ 构建完成！"
echo ""
echo "📋 部署说明："
echo "1. 您的Nginx配置已经设置好反向代理到 localhost:3000"
echo "2. 可以使用以下方式运行应用："
echo "   - 开发模式: pnpm dev"
echo "   - 生产模式: pnpm start"
echo "   - Docker部署: docker build -t next-app . && docker run -p 3000:3000 next-app"
echo ""
echo "🌐 访问地址: http://47.107.48.160:8083"
echo ""
echo "📝 Nginx配置检查："
echo "   - 确保Nginx已安装并运行: sudo systemctl status nginx"
echo "   - 重新加载Nginx配置: sudo nginx -s reload"
echo "   - 检查Nginx错误日志: sudo tail -f /var/log/nginx/error.log"