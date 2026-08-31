# 智能体 Function Calling 功能说明

## 🎯 功能概述

智能助手现在可以**主动调用系统工具**来获取真实数据，而不仅仅是基于通用知识回答问题。

## 🛠️ 可用工具列表

### 1. **get_device_count** - 获取设备总数
**用途**: 查询系统中所有设备的数量

**示例问题**:
- "一共有多少设备？"
- "系统中有几台设备？"
- "设备总数是多少？"

**返回示例**:
```json
{
  "success": true,
  "count": 156,
  "message": "系统中共有 156 台设备"
}
```

---

### 2. **get_device_list** - 获取设备列表
**用途**: 查询设备列表，可按状态筛选

**参数**:
- `status`: 设备状态 (all/online/offline/maintenance)
- `limit`: 返回数量限制 (默认 10)

**示例问题**:
- "显示最近的 5 台设备"
- "有哪些在线设备？"
- "列出所有设备"

**返回示例**:
```json
{
  "success": true,
  "devices": [
    { "id": 1, "name": "温度传感器01", "type": "温度传感器", "status": "在线", "location": "车间1" },
    { "id": 2, "name": "压力传感器01", "type": "压力传感器", "status": "离线", "location": "车间2" }
  ],
  "count": 2
}
```

---

### 3. **get_device_alarms** - 获取设备告警
**用途**: 查询设备的告警信息

**参数**:
- `device_id`: 设备 ID (可选，不提供则返回所有告警)
- `limit`: 返回数量限制 (默认 10)

**示例问题**:
- "有哪些告警？"
- "设备 1 有什么告警？"
- "最近的告警记录"

**返回示例**:
```json
{
  "success": true,
  "alarms": [
    { "id": 1, "deviceId": 1, "deviceName": "温度传感器01", "message": "温度过高", "occurredAt": "2024-01-19T10:30:00Z" }
  ],
  "count": 1
}
```

---

### 4. **search_device** - 搜索设备
**用途**: 根据设备名称搜索设备

**参数**:
- `name`: 设备名称关键字 (必填)

**示例问题**:
- "搜索名称包含'温度'的设备"
- "查找传感器"
- "有没有叫 ABC 的设备？"

**返回示例**:
```json
{
  "success": true,
  "devices": [
    { "id": 1, "name": "温度传感器01" },
    { "id": 2, "name": "温度传感器02" }
  ],
  "count": 2
}
```

---

## 🚀 使用方式

### 普通对话 vs 工具调用对话

**❌ 之前（无法访问真实数据）**:
```
用户: "系统中有多少设备？"
AI: "抱歉，我无法直接访问您的系统数据..."
```

**✅ 现在（自动调用工具）**:
```
用户: "系统中有多少设备？"
AI: [调用 get_device_count 工具]
    → 工具返回: { count: 156 }
AI: "系统中共有 156 台设备。"
```

---

## 🔄 工作流程

```
用户提问
   ↓
AI 分析意图
   ↓
AI 决定是否需要调用工具
   ↓
├─ 不需要 → 直接回答
└─ 需要 → 调用工具获取数据
       ↓
    返回真实数据
       ↓
    AI 基于数据生成回答
```

---

## 💡 测试示例

尝试以下问题来测试 Function Calling 功能:

### 基础查询
1. "系统中一共有多少设备？"
2. "显示最近添加的 5 台设备"
3. "有哪些在线的设备？"

### 复合查询
4. "有多少设备在线，多少设备离线？"
5. "最近有什么告警吗？"
6. "帮我看看设备 1 的告警情况"

### 搜索查询
7. "搜索名称包含'传感器'的设备"
8. "找一下温度相关的设备"

---

## 🎯 技术实现

### 核心文件
- `src/lib/agent-tools.ts` - 工具定义和实现
- `src/app/api/agent/chat/route.ts` - Function Calling 逻辑

### 工作原理
1. **工具注册**: 在 AI 调用时传入 `tools` 参数
2. **意图识别**: AI 分析用户问题，决定是否调用工具
3. **工具执行**: 后端执行对应的工具函数（查询数据库）
4. **结果整合**: 将工具返回的数据提供给 AI
5. **自然回复**: AI 基于真实数据生成自然语言回答

---

## 📝 添加新工具

如果需要添加新的工具函数，修改 `src/lib/agent-tools.ts`:

```typescript
// 1. 在 tools 数组中添加工具定义
export const tools = [
  // ... 现有工具 ...
  {
    type: 'function' as const,
    function: {
      name: 'your_new_tool',
      description: '工具的作用描述',
      parameters: {
        type: 'object',
        properties: {
          param1: {
            type: 'string',
            description: '参数说明',
          },
        },
        required: ['param1'],
      },
    },
  },
];

// 2. 在 executeTool 中添加对应的实现
export async function executeTool(toolName: string, args: any) {
  switch (toolName) {
    // ... 现有工具 ...
    case 'your_new_tool':
      return await yourNewToolFunction(args.param1);
  }
}

// 3. 实现具体的工具函数
async function yourNewToolFunction(param1: string) {
  // 查询数据库或执行其他操作
  return {
    success: true,
    result: '...',
  };
}
```

---

## ⚠️ 注意事项

1. **性能**: 工具调用会增加响应时间（需要额外的 AI 调用和数据库查询）
2. **成本**: 每次工具调用都会消耗额外的 token
3. **安全**: 工具函数应该做好权限控制和参数验证
4. **限制**: 最多支持 5 轮工具调用，防止无限循环

---

## 🎉 效果演示

**问题**: "平台中所有项目有多少设备？"

**AI 思考过程**:
1. 识别意图: 用户想知道设备总数
2. 决定调用: `get_device_count` 工具
3. 执行查询: 从数据库获取 count
4. 生成回复: "系统中共有 156 台设备"

**最终回复**: "系统中共有 156 台设备。"
