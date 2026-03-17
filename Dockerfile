FROM node:18-alpine AS builder
WORKDIR /app

# 安装pnpm + 配置国内源（核心必加）
RUN npm install -g pnpm --registry=https://registry.npmmirror.com/
RUN pnpm config set registry https://registry.npmmirror.com/

# 直接安装依赖，无严格锁定，彻底解决版本兼容问题
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 构建项目
COPY . .
RUN pnpm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# 安装pnpm运行环境
RUN npm install -g pnpm --registry=https://registry.npmmirror.com/

# 复制构建产物
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["pnpm", "start"]