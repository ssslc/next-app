import { prisma } from '../src/lib/prisma'

async function main() {
  console.log('开始插入设备告警测试数据...')

  // 先确保至少有一个设备存在
  let device = await prisma.device_basic_info.findFirst()
  
  if (!device) {
    console.log('未找到设备，先创建一个测试设备...')
    device = await prisma.device_basic_info.create({
      data: {
        name: '测试设备-001'
      }
    })
    console.log(`✓ 已创建设备: ${device.name} (ID: ${device.id})`)
  }

  const deviceId = device.id

  // 准备十条测试告警数据
  const alarmData = [
    { message: '设备温度超过阈值 85°C', occurred_at: new Date('2026-01-19T08:30:00') },
    { message: 'CPU使用率达到95%，请检查', occurred_at: new Date('2026-01-19T09:15:00') },
    { message: '内存使用率异常，已达90%', occurred_at: new Date('2026-01-19T09:45:00') },
    { message: '网络连接中断，持续5分钟', occurred_at: new Date('2026-01-19T10:00:00') },
    { message: '磁盘空间不足，剩余空间<10%', occurred_at: new Date('2026-01-19T10:20:00') },
    { message: '设备离线告警', occurred_at: new Date('2026-01-19T10:35:00') },
    { message: '电池电量低于20%', occurred_at: new Date('2026-01-19T10:50:00') },
    { message: '异常重启检测到', occurred_at: new Date('2026-01-19T11:00:00') },
    { message: '传感器数据异常波动', occurred_at: new Date('2026-01-19T11:10:00') },
    { message: '固件版本过期，建议升级', occurred_at: new Date('2026-01-19T11:15:00') }
  ]

  // 批量插入告警数据
  for (let i = 0; i < alarmData.length; i++) {
    const alarm = await prisma.device_alarm_info.create({
      data: {
        device_id: deviceId,
        message: alarmData[i].message,
        occurred_at: alarmData[i].occurred_at
      }
    })
    console.log(`✓ [${i + 1}/10] 已插入告警: ${alarm.message}`)
  }

  console.log('\n✅ 成功插入 10 条设备告警测试数据！')

  // 查询并展示结果
  const totalAlarms = await prisma.device_alarm_info.count()
  console.log(`\n📊 当前数据库中共有 ${totalAlarms} 条告警记录`)
}

main()
  .catch((e) => {
    console.error('❌ 插入数据时发生错误:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })