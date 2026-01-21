'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { deviceApi, Device } from '@/lib/api';

// Device 接口已从 '@/lib/api' 导入

interface DeviceConfig {
  name: string;
  type: string;
  status: 'online' | 'offline' | 'maintenance';
  location: string;
  ipAddress?: string;
  notes?: string;
}

// 移除了模拟数据，将使用真实API

export default function DevicesPage() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [showConfigPanel, setShowConfigPanel] = useState(false);
  const [formData, setFormData] = useState<DeviceConfig>({
    name: '',
    type: '',
    status: 'online',
    location: '',
    ipAddress: '',
    notes: ''
  });

  useEffect(() => {
    // 从API加载设备数据
    const loadDevices = async () => {
      const result = await deviceApi.getDevices();
      if (result.success && result.data) {
        setDevices(result.data);
      } else {
        console.error('加载设备失败:', result.error);
        // 可以在这里添加错误处理，比如显示提示信息
      }
    };

    loadDevices();
  }, []);

  const filteredDevices = devices.filter(device => 
    filter === 'all' || device.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-100 text-green-800';
      case 'offline':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return '在线';
      case 'offline':
        return '离线';
      case 'maintenance':
        return '维护中';
      default:
        return '未知';
    }
  };

  const handleConfigClick = (device: Device) => {
    setSelectedDevice(device);
    setFormData({
      name: device.name,
      type: device.type,
      status: device.status,
      location: device.location,
      ipAddress: '',
      notes: ''
    });
    setShowConfigPanel(true);
  };

  const handleSaveConfig = async () => {
    if (!selectedDevice) return;

    try {
      // 更新设备配置
      const result = await deviceApi.updateDevice(selectedDevice.id, formData);
      
      if (result.success) {
        console.log('设备配置更新成功:', result.data);
        // 更新本地设备列表
        setDevices(prev => prev.map(device => 
          device.id === selectedDevice.id 
            ? { ...device, ...formData }
            : device
        ));
      } else {
        console.error('更新设备配置失败:', result.error);
        // 可以在这里添加错误提示
      }
    } catch (error) {
      console.error('保存配置时发生错误:', error);
    } finally {
      setShowConfigPanel(false);
      setSelectedDevice(null);
    }
  };

  const handleInputChange = (field: keyof DeviceConfig, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCloseConfig = () => {
    setShowConfigPanel(false);
    setSelectedDevice(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
                设备列表
              </h1>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setFilter('all')}
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                >
                  全部
                </Button>
                <Button
                  onClick={() => setFilter('online')}
                  variant={filter === 'online' ? 'default' : 'outline'}
                  size="sm"
                >
                  在线
                </Button>
                <Button
                  onClick={() => setFilter('offline')}
                  variant={filter === 'offline' ? 'default' : 'outline'}
                  size="sm"
                >
                  离线
                </Button>
                <Button
                  onClick={() => setFilter('maintenance')}
                  variant={filter === 'maintenance' ? 'default' : 'outline'}
                  size="sm"
                >
                  维护中
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">设备名称</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">类型</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">状态</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">位置</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">最后更新</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredDevices.map((device) => (
                    <tr key={device.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {device.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {device.type}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
                          {getStatusText(device.status)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {device.location}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {device.lastUpdate}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <Button
                          onClick={() => handleConfigClick(device)}
                          variant="ghost"
                          size="sm"
                        >
                          配置
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredDevices.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                暂无设备数据
              </div>
            )}

            <div className="mt-6 text-sm text-gray-500">
              共 {filteredDevices.length} 台设备
            </div>
          </div>
        </div>
      </div>

      {/* 设备配置面板 */}
      {showConfigPanel && selectedDevice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                设备配置 - {selectedDevice.name}
              </h3>
              <Button
                onClick={handleCloseConfig}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                ✕
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  设备名称
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  设备类型
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="服务器">服务器</option>
                  <option value="工作站">工作站</option>
                  <option value="网络设备">网络设备</option>
                  <option value="外设">外设</option>
                  <option value="安防设备">安防设备</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  设备状态
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value as 'online' | 'offline' | 'maintenance')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="online">在线</option>
                  <option value="offline">离线</option>
                  <option value="maintenance">维护中</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  位置
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  IP地址
                </label>
                <input
                  type="text"
                  value={formData.ipAddress || ''}
                  onChange={(e) => handleInputChange('ipAddress', e.target.value)}
                  placeholder="192.168.1.100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  备注信息
                </label>
                <textarea
                  rows={3}
                  value={formData.notes || ''}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="请输入设备备注信息..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <Button
                onClick={handleCloseConfig}
                variant="outline"
              >
                取消
              </Button>
              <Button
                onClick={handleSaveConfig}
              >
                保存配置
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}