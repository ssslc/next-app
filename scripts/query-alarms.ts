import { prisma } from '../src/lib/prisma'
import type { device_alarm_info, device_basic_info } from '@prisma/client'

// 定义告警信息类型（包含关联的设备信息）
type AlarmWithDevice = device_alarm_info & {
  device: device_basic_info
}

async function main() {
  console.log('📋 查询设备告警信息...\n')

  // 查询所有告警记录，包含关联的设备信息
  const alarms = await prisma.device_alarm_info.findMany({
    include: {
      device: true
    },
    orderBy: {
      occurred_at: 'asc'
    }
  })

  if (alarms.length === 0) {
    console.log('暂无告警记录')
    return
  }

  console.log(`共找到 ${alarms.length} 条告警记录：\n`)
  
  alarms.forEach((alarm: AlarmWithDevice, index: number) => {
    console.log(`[${index + 1}] 告警ID: ${alarm.id}`)
    console.log(`    设备: ${alarm.device.name} (ID: ${alarm.device.id})`)
    console.log(`    告警信息: ${alarm.message}`)
    console.log(`    发生时间: ${alarm.occurred_at.toLocaleString('zh-CN')}`)
    console.log('')
  })

  // 统计信息
  const deviceCount = await prisma.device_basic_info.count()
  console.log(`\n📊 统计信息：`)
  console.log(`   设备总数: ${deviceCount}`)
  console.log(`   告警总数: ${alarms.length}`)
}

main()
  .catch((e) => {
    console.error('❌ 查询数据时发生错误:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })