# Next.js + Nginx 部署指南

## 服务器环境要求
- Node.js 18+ 
- pnpm 8+
- Nginx
- Docker（可选）

## Nginx 配置说明

您的Nginx配置已经正确设置：
- 监听端口：8083
- 服务器IP：47.107.48.160  
- 反向代理到：localhost:3000（Next.js应用）
- 静态文件服务：/usr/share/nginx/html

## 部署步骤

### 方法一：直接部署（推荐）

1. **安装依赖**
   ```bash
   pnpm install
   ```

2. **构建应用**
   ```bash
   pnpm run build
   ```

3. **启动生产服务器**
   ```bash
   pnpm start
   ```

4. **验证部署**
   ```bash
   # 检查应用健康状态
   curl http://localhost:3000/api/health
   
   # 检查Nginx代理
   curl http://47.107.48.160:8083/api/health
   ```

### 方法二：Docker部署

1. **构建Docker镜像**
   ```bash
   docker build -t next-app .
   ```

2. **运行容器**
   ```bash
   docker run -d -p 3000:3000 --name next-app-container next-app
   ```

3. **验证部署**
   ```bash
   docker logs next-app-container
   curl http://localhost:3000/api/health
   ```

### 方法三：使用部署脚本

```bash
# 运行部署脚本（Windows系统）
./deploy.sh

# 或直接执行
PowerShell -File deploy.sh
```

## 环境变量配置

创建 `.env.production` 文件用于生产环境：

```env
NEXT_PUBLIC_API_URL=http://47.107.48.160:8083/api
NODE_ENV=production
```

## Nginx 管理命令

```bash
# 检查Nginx配置
sudo nginx -t

# 重新加载Nginx
sudo nginx -s reload

# 重启Nginx
sudo systemctl restart nginx

# 查看Nginx日志
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## 健康检查

应用提供了健康检查端点：
- `GET /api/health` - 应用健康状态
- 返回JSON格式的健康信息

## 故障排除

### 常见问题

1. **端口冲突**
   - 确保3000端口没有被其他程序占用

2. **Nginx代理错误**
   - 检查Nginx配置语法：`sudo nginx -t`
   - 确认Nginx正在运行：`sudo systemctl status nginx`

3. **应用启动失败**
   - 检查Node.js版本：`node --version`
   - 检查依赖安装：`pnpm install`

### 日志查看

```bash
# Next.js应用日志
pm2 logs next-app  # 如果使用pm2

# Nginx访问日志
sudo tail -f /var/log/nginx/access.log

# Nginx错误日志  
sudo tail -f /var/log/nginx/error.log
```

## 性能优化建议

1. **启用Gzip压缩**
   ```nginx
   gzip on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   ```

2. **配置缓存**
   ```nginx
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
     expires 1y;
     add_header Cache-Control "public, immutable";
   }
   ```

3. **启用HTTP2**
   ```nginx
   listen 443 ssl http2;
   listen [::]:443 ssl http2;
   ```

## 安全建议

1. **配置SSL证书**
2. **启用防火墙**
3. **定期更新依赖**
4. **监控服务器资源**

## 支持

如果遇到部署问题，请检查：
1. 服务器防火墙设置
2. 端口开放状态
3. 文件权限设置
4. 日志文件中的错误信息