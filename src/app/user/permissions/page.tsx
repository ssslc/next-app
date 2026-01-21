'use client';

import { useState } from 'react';

interface Permission {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState<Permission[]>([
    { id: 'device_read', name: '设备查看', description: '查看设备列表和信息', enabled: true },
    { id: 'device_edit', name: '设备编辑', description: '修改设备信息', enabled: true },
    { id: 'device_delete', name: '设备删除', description: '删除设备', enabled: false },
    { id: 'user_manage', name: '用户管理', description: '管理系统用户', enabled: true },
    { id: 'report_view', name: '报表查看', description: '查看系统报表', enabled: true },
    { id: 'system_config', name: '系统配置', description: '修改系统设置', enabled: false },
  ]);

  const togglePermission = (id: string) => {
    setPermissions(permissions.map(perm =>
      perm.id === id ? { ...perm, enabled: !perm.enabled } : perm
    ));
  };

  const handleSave = () => {
    // 这里可以添加保存逻辑
    alert('权限设置保存成功！');
  };

  const handleReset = () => {
    setPermissions([
      { id: 'device_read', name: '设备查看', description: '查看设备列表和信息', enabled: true },
      { id: 'device_edit', name: '设备编辑', description: '修改设备信息', enabled: true },
      { id: 'device_delete', name: '设备删除', description: '删除设备', enabled: false },
      { id: 'user_manage', name: '用户管理', description: '管理系统用户', enabled: true },
      { id: 'report_view', name: '报表查看', description: '查看系统报表', enabled: true },
      { id: 'system_config', name: '系统配置', description: '修改系统设置', enabled: false },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">权限信息</h1>

            {/* 权限信息 */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">当前用户权限</h3>
                <p className="text-gray-600 text-sm">
                  系统管理员 - 拥有大部分系统操作权限
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-medium text-gray-700">权限设置</h3>
                
                {permissions.map((permission) => (
                  <div key={permission.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{permission.name}</h4>
                      <p className="text-sm text-gray-600">{permission.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={permission.enabled}
                        onChange={() => togglePermission(permission.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  重置
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  保存设置
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}