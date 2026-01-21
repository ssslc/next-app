import { prisma } from '@/lib/prisma';
import { Result } from '@/lib/response';

export async function GET() {
  let dbStatus = 'unknown';
  let errorDetail = null;

  try {
    // 尝试执行一个简单的查询来检查数据库连接
    await prisma.$queryRaw`SELECT 1`;
    dbStatus = 'connected';
  } catch (error) {
    dbStatus = 'disconnected';
    errorDetail = error instanceof Error ? error.message : String(error);
    console.error('Database connection check failed:', error);
  }

  const data = {
    status: dbStatus === 'connected' ? 'healthy' : 'unhealthy',
    database: dbStatus,
    error: errorDetail,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  };

  if (dbStatus === 'connected') {
    return Result.success(data, 'System is healthy');
  } else {
    return Result.error('System is unhealthy', 503, 503);
  }
}

export const dynamic = 'force-dynamic';
