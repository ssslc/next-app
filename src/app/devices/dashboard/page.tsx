export default function DevicesDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">设备监控仪表盘</h1>
      
      {/* 2列3行的Grid布局 */}
      <div className="grid grid-cols-2 gap-6">
        {/* 第一个数据块 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">设备状态概览</h2>
          <div className="text-gray-600">
            <p>数据报表内容区域</p>
          </div>
        </div>

        {/* 第二个数据块 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">在线设备统计</h2>
          <div className="text-gray-600">
            <p>数据报表内容区域</p>
          </div>
        </div>

        {/* 第三个数据块 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">设备告警分析</h2>
          <div className="text-gray-600">
            <p>数据报表内容区域</p>
          </div>
        </div>

        {/* 第四个数据块 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">设备类型分布</h2>
          <div className="text-gray-600">
            <p>数据报表内容区域</p>
          </div>
        </div>

        {/* 第五个数据块 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">设备运行时长</h2>
          <div className="text-gray-600">
            <p>数据报表内容区域</p>
          </div>
        </div>

        {/* 第六个数据块 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">维护记录统计</h2>
          <div className="text-gray-600">
            <p>数据报表内容区域</p>
          </div>
        </div>
      </div>
    </div>
  );
}
