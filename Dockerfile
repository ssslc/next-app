FROM node:22-alpine AS builder
WORKDIR /app

# 安装pnpm + 配置官方源（安全加固）
RUN npm install -g pnpm --registry=https://registry.npmjs.org/
RUN pnpm config set registry https://registry.npmjs.org/

# 直接安装依赖，无严格锁定，彻底解决版本兼容问题
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install

# 复制 Prisma 配置并生成客户端
COPY prisma ./prisma
COPY prisma.config.ts ./
# 设置构建时的占位符环境变量
ENV DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder"
RUN pnpm prisma generate

# 复制环境变量文件（构建阶段需要）
COPY .env.production ./

# 构建项目
COPY . .
# 确保关键文件不被覆盖
COPY prisma ./prisma
COPY .env.production ./
COPY prisma.config.ts ./
RUN pnpm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# 安装pnpm运行环境
RUN npm install -g pnpm --registry=https://registry.npmjs.org/

# 复制构建产物和必要文件
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/postcss.config.mjs ./
COPY --from=builder /app/.env.production ./.env

# 复制 Prisma 相关文件
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./
COPY --from=builder /app/src/generated ./src/generated

# 复制构建输出和静态资源
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["pnpm", "start"]