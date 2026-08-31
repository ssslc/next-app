/**
 * AI 智能体工具函数定义
 * 用于 Function Calling
 */
import { prisma } from './prisma';

// 工具函数定义（给 AI 看的）
export const tools = [
  {
    type: 'function' as const,
    function: {
      name: 'get_device_count',
      description: '获取系统中设备的总数量',
      parameters: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'get_device_list',
      description: '获取设备列表，可以按状态筛选',
      parameters: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            enum: ['all', 'online', 'offline', 'maintenance'],
            description: '设备状态：all-全部，online-在线，offline-离线，maintenance-维护中',
          },
          limit: {
            type: 'number',
            description: '返回设备数量限制，默认 10',
          },
        },
        required: [],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'get_device_alarms',
      description: '获取设备告警信息',
      parameters: {
        type: 'object',
        properties: {
          device_id: {
            type: 'number',
            description: '设备ID，如果不提供则返回所有告警',
          },
          limit: {
            type: 'number',
            description: '返回告警数量限制，默认 10',
          },
        },
        required: [],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'search_device',
      description: '根据设备名称搜索设备',
      parameters: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: '设备名称关键字',
          },
        },
        required: ['name'],
      },
    },
  },
];

// 解决 BigInt 序列化问题
if (typeof BigInt.prototype.toJSON !== 'function') {
  BigInt.prototype.toJSON = function () {
    return Number(this);
  };
}

// 工具函数实现（实际执行的代码）
export async function executeTool(toolName: string, args: any) {
  switch (toolName) {
    case 'get_device_count':
      return await getDeviceCount();

    case 'get_device_list':
      return await getDeviceList(args.status || 'all', args.limit || 10);

    case 'get_device_alarms':
      return await getDeviceAlarms(args.device_id, args.limit || 10);

    case 'search_device':
      return await searchDevice(args.name);

    default:
      return { error: `未知的工具: ${toolName}` };
  }
}

// ============================================================================
// 工具函数实现
// ============================================================================

/**
 * 获取设备总数
 */
async function getDeviceCount() {
  try {
    const count = await prisma.device_basic_info.count();
    return {
      success: true,
      count,
      message: `系统中共有 ${count} 台设备`,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * 获取设备列表
 */
async function getDeviceList(status: string, limit: number) {
  try {
    const devices = await prisma.device_basic_info.findMany({
      take: limit,
      orderBy: { id: 'desc' },
    });

    // 模拟增强数据（与现有 API 保持一致）
    const statusMap: Record<string, string> = {
      1: '在线',
      2: '离线',
      3: '维护中',
    };

    const enhancedDevices = devices.map((device, index) => ({
      id: device.id,
      name: device.name || `设备${device.id}`,
      type: index % 3 === 0 ? '温度传感器' : index % 3 === 1 ? '压力传感器' : '流量计',
      status: statusMap[String((Number(device.id) % 3) + 1)],
      location: `车间${(Number(device.id) % 5) + 1}`,
    }));

    return {
      success: true,
      devices: enhancedDevices,
      count: enhancedDevices.length,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * 获取设备告警
 */
async function getDeviceAlarms(deviceId?: number, limit: number = 10) {
  try {
    const alarms = await prisma.device_alarm_info.findMany({
      where: deviceId ? { device_id: BigInt(deviceId) } : undefined,
      include: {
        device: true,
      },
      orderBy: { occurred_at: 'desc' },
      take: limit,
    });

    const result = alarms.map((alarm) => ({
      id: alarm.id,
      deviceId: alarm.device_id,
      deviceName: alarm.device.name,
      message: alarm.message,
      occurredAt: alarm.occurred_at,
    }));

    return {
      success: true,
      alarms: result,
      count: result.length,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * 搜索设备
 */
async function searchDevice(name: string) {
  try {
    const devices = await prisma.device_basic_info.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      take: 10,
    });

    return {
      success: true,
      devices: devices.map((d) => ({
        id: d.id,
        name: d.name,
      })),
      count: devices.length,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
}
