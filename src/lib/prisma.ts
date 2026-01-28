import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/client'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.error('❌ DATABASE_URL 未定义！');
  console.error('当前工作目录:', process.cwd());
  console.error('NODE_ENV:', process.env.NODE_ENV);
  throw new Error('DATABASE_URL environment variable is required');
}

console.log('✅ 数据库连接字符串已加载');
console.log('连接目标:', connectionString.replace(/:[^:@]+@/, ':****@')); // 隐藏密码

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }