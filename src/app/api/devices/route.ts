import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Result } from '@/lib/response';

// 解决 BigInt 无法序列化的问题
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return Number(this);
};

export async function GET() {
  try {
    const devices = await prisma.device_basic_info.findMany();
    
    // 由于数据库字段较少，我们为演示目的补充一些模拟数据
    const enhancedDevices = devices.map(device => ({
      id: Number(device.id), // 转换为 Number
      name: device.name || '未命名设备',
      type: '服务器', // 默认值
      status: Math.random() > 0.3 ? 'online' : (Math.random() > 0.5 ? 'offline' : 'maintenance'), // 随机状态用于演示
      location: '数据中心 A区', // 默认值
      lastUpdate: new Date().toISOString().split('T')[0] // 当前日期
    }));

    return Result.success(enhancedDevices);
  } catch (error) {
    console.error('获取设备列表失败:', error);
    return Result.error('获取设备列表失败');
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.name) {
      return Result.badRequest('设备名称不能为空');
    }

    const newDevice = await prisma.device_basic_info.create({
      data: {
        name: body.name
      }
    });

    const responseData = { 
      ...newDevice,
      id: Number(newDevice.id),
      // 补充前端需要的字段
      type: body.type || '服务器',
      status: body.status || 'online',
      location: body.location || '未知',
      lastUpdate: new Date().toISOString().split('T')[0]
    };

    return Result.success(responseData, '设备创建成功');
  } catch (error) {
    console.error('创建设备失败:', error);
    return Result.error('创建设备失败');
  }
}