import { prisma } from '@/lib/prisma'
import type { device_alarm_info, device_basic_info } from '../../../generated/client'

// 强制动态渲染，避免构建时预渲染
export const dynamic = 'force-dynamic'
export const revalidate = 0

// 定义告警信息类型（包含关联的设备信息）
type AlarmWithDevice = device_alarm_info & {
  device: device_basic_info
}

export default async function AlarmsPage() {
  let alarms: AlarmWithDevice[] = []
  let error: string | null = null

  try {
    // 获取所有告警信息，包含关联的设备信息
    alarms = await prisma.device_alarm_info.findMany({
    include: {
      device: true
    },
      orderBy: {
        occurred_at: 'desc' // 按时间倒序排列,最新的在前
      },
      take: 100 // 限制返回数量，避免数据过多
    })
  } catch (e) {
    console.error('Failed to fetch alarms:', e)
    error = e instanceof Error ? e.message : '获取告警信息失败'
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">设备告警信息</h1>
        <p className="text-gray-600 mt-2">共 {alarms.length} 条告警记录</p>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg shadow-md p-8 text-center">
          <div className="text-red-600 text-lg mb-2">⚠️ 数据加载失败</div>
          <div className="text-red-500 text-sm">{error}</div>
        </div>
      ) : alarms.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-gray-400 text-lg">暂无告警信息</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alarms.map((alarm) => (
            <div
              key={alarm.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* 卡片头部 - 告警级别标识 */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2"></div>
              
              {/* 卡片内容 */}
              <div className="p-6">
                {/* 告警ID和时间 */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded">
                    ID: {alarm.id.toString()}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(alarm.occurred_at).toLocaleString('zh-CN', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>

                {/* 设备信息 */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <svg 
                      className="w-5 h-5 text-gray-600 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" 
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      {alarm.device.name || '未命名设备'}
                    </span>
                  </div>
                </div>

                {/* 告警信息 */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <p className="text-gray-800 leading-relaxed">
                      {alarm.message}
                    </p>
                  </div>
                </div>

                {/* 底部操作按钮（可选） */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    查看详情 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}