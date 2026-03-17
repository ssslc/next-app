This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

mkdir -p src/app/api/devices
touch src/app/api/devices/route.ts
touch src/app/api/devices/[id]/route.ts

## 项目结构

```
next-app/
├── src/
│   ├── app/                          # Next.js App Router 目录
│   │   ├── api/                      # 【后端】API 路由 (Next.js Route Handlers)
│   │   │   ├── devices/
│   │   │   │   └── route.ts          # GET/POST /api/devices
│   │   │   └── health/
│   │   │       └── route.ts          # GET /api/health
│   │   ├── devices/                  # 【前端】设备管理页面
│   │   │   ├── page.tsx              # /devices
│   │   │   └── alarms/
│   │   │       └── page.tsx          # /devices/alarms
│   │   ├── user/                     # 【前端】用户相关页面
│   │   │   ├── page.tsx              # /user
│   │   │   ├── profile/
│   │   │   │   └── page.tsx          # /user/profile
│   │   │   └── permissions/
│   │   │       └── page.tsx          # /user/permissions
│   │   ├── layout.tsx                # 【前端】根布局组件
│   │   ├── page.tsx                  # 【前端】首页 (/)
│   │   └── globals.css               # 全局样式
│   ├── components/                   # 【前端】React 组件
│   │   ├── ui/
│   │   │   └── button.tsx            # UI 组件
│   │   └── Navigation.tsx            # 导航组件
│   ├── lib/                          # 【共享】工具库
│   │   ├── api.ts                    # API 客户端封装
│   │   ├── prisma.ts                 # Prisma 客户端实例
│   │   └── response.ts               # API 响应工具
│   └── function-demo/                # 功能演示代码
│       └── reactiveHandle.jsx
├── prisma/                           # 【后端】数据库相关
│   └── schema.prisma                 # Prisma 数据库模型定义
├── scripts/                          # 【后端】脚本工具
│   ├── seed-alarms.ts                # 数据库种子脚本
│   └── query-alarms.ts               # 查询脚本
├── public/                           # 【前端】静态资源
│   ├── next.svg
│   └── ...
├── package.json                      # 项目依赖配置
├── next.config.ts                    # Next.js 配置
├── tsconfig.json                     # TypeScript 配置
├── prisma.config.ts                  # Prisma 配置
└── Dockerfile                        # Docker 部署配置
```

### 架构说明

本项目采用 **Next.js 全栈架构**：

- **前端代码**：
  - `src/app/` 下的 `page.tsx`、`layout.tsx` 等文件（除了 `api/` 目录）
  - `src/components/` - React 组件
  - `public/` - 静态资源（图片、字体等）

- **后端代码**：
  - `src/app/api/` - Next.js API 路由（Route Handlers），提供 RESTful API
  - `prisma/` - 数据库模型和迁移
  - `scripts/` - 数据库脚本和后端工具

- **共享代码**：
  - `src/lib/` - 前后端共用的工具函数和类型定义

### 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **数据库**: Prisma ORM
- **包管理**: pnpm
- **样式**: CSS Modules + Tailwind CSS
- **部署**: Docker