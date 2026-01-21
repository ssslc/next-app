export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              欢迎来到设备管理系统
            </h1>
            <p className="text-gray-600 mb-8">
              这是一个现代化的设备管理平台，帮助您高效管理各类设备信息。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">设备管理</h2>
                <p className="text-blue-600">查看和管理所有设备信息，包括设备状态、配置和使用情况。</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-2">实时监控</h2>
                <p className="text-green-600">实时监控设备运行状态，及时发现和处理设备异常。</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-500 mb-4">点击上方导航栏开始使用系统</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/devices" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  查看设备列表
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
