// API 配置和工具函数

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// 定义统一的后端返回结构
export interface IResponse<T = any> {
  code: number;
  message: string;
  data: T;
  success: boolean;
  timestamp: number;
}

// 前端使用的统一响应结构（为了兼容现有代码，保持 success 和 error 字段）
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  code?: number; // 添加 code 字段
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const result: IResponse<T> = await response.json();

    // 根据后端返回的 success 字段或 code 来判断请求是否成功
    if (result.success || result.code === 200) {
      return { 
        success: true, 
        data: result.data, 
        message: result.message,
        code: result.code 
      };
    } else {
      return { 
        success: false, 
        error: result.message || 'Unknown error',
        code: result.code
      };
    }
  } catch (error) {
    console.error('API request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// 设备相关的API函数
export const deviceApi = {
  // 获取设备列表
  getDevices: () => apiRequest<Device[]>('/devices'),
  
  // 获取单个设备
  getDevice: (id: number) => apiRequest<Device>(`/devices/${id}`),
  
  // 创建设备
  createDevice: (device: Omit<Device, 'id'>) => 
    apiRequest<Device>('/devices', {
      method: 'POST',
      body: JSON.stringify(device),
    }),
  
  // 更新设备
  updateDevice: (id: number, device: Partial<Device>) =>
    apiRequest<Device>(`/devices/${id}`, {
      method: 'PUT',
      body: JSON.stringify(device),
    }),
  
  // 删除设备
  deleteDevice: (id: number) =>
    apiRequest(`/devices/${id}`, {
      method: 'DELETE',
    }),
};

// 设备类型定义（与之前保持一致）
export interface Device {
  id: number;
  name: string;
  type: string;
  status: 'online' | 'offline' | 'maintenance';
  location: string;
  lastUpdate: string;
}