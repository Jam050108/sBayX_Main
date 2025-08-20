
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NewarkCampusPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center">
              <span className="relative z-10 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 bg-clip-text text-transparent drop-shadow-sm"
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), 0px 0px 8px rgba(29, 78, 216, 0.25), 1px 1px 12px rgba(0, 0, 0, 0.1)',
                      filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.15))'
                    }}>
                智展Smart Campus/海外仓
              </span>
            </h1>
            <p className="text-xl text-gray-600">美国西部孵化区核心项目</p>
          </div>

          <div className="flex gap-8 items-stretch mb-8">
            <div className="flex-1 bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">项目信息</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">项目地址</h3>
                    <p className="text-gray-600 text-lg">8407 Central Ave, Newark CA 94560</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-ruler-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">占地面积</h3>
                    <p className="text-gray-600 text-lg">31,500平方英尺（约3500㎡）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">核心优势</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">硅谷核心位置，科技资源丰富</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">大型仓储空间，满足企业需求</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">完善的孵化服务体系</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-double-line text-xl text-blue-600"></i>
                  <span className="text-lg text-gray-900">便捷的交通和物流网络</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-16 mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 bg-clip-text text-transparent drop-shadow-sm">
                智展Smart Campus实景
              </span>
              <span className="absolute inset-0 text-gray-400/30 blur-sm -z-10 transform translate-x-0.5 translate-y-0.5">
                智展Smart Campus实景
              </span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">现代化的办公和仓储环境，为企业提供一流的工作空间</p>

            <div className="overflow-x-auto">
              <div className="flex space-x-10 pb-8" style={{width: 'max-content'}}>
                <div className="flex-shrink-0">
                  <img 
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/7668691c01b308089a38bb962f55ab98.png" 
                    alt="Smart Campus外观"
                    className="w-[500px] h-96 object-cover object-top rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/d2f7437dea22da71d801aa6eed4e7f31.png" 
                    alt="Smart Campus内部环境"
                    className="w-[500px] h-96 object-cover object-top rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/887336879b81ae8bdb9e7786fcd25e6c.png" 
                    alt="Smart Campus设施环境"
                    className="w-[500px] h-96 object-cover object-top rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            <p className="text-base text-gray-500 text-center mt-8">请横向滑动查看实景照片</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">楼层示意图</h2>
            <div className="space-y-8">
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <img 
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/ce2b5b8de16c658a9a79d98d339e339b.png" 
                    alt="楼层平面图"
                    className="w-full max-w-4xl mx-auto h-auto object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <img 
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8374934d90fd7313cbab9536def8d099.png" 
                    alt="二楼平面图"
                    className="w-full max-w-4xl mx-auto h-auto object-contain"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-25 rounded-lg p-6 text-center" style={{backgroundColor: '#f1f5f9'}}>
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mx-auto mb-4">
                    <i className="ri-building-line text-2xl text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">独立办公室</h4>
                  <p className="text-sm text-gray-600">多间独立办公室，适合不同规模的企业团队</p>
                </div>

                <div className="bg-green-25 rounded-lg p-6 text-center" style={{backgroundColor: '#f0fdf4'}}>
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mx-auto mb-4">
                    <i className="ri-store-line text-2xl text-green-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">仓储区域</h4>
                  <p className="text-sm text-gray-600">大型仓储空间，满足海外仓和物流需求</p>
                </div>

                <div className="bg-purple-25 rounded-lg p-6 text-center" style={{backgroundColor: '#faf9fc'}}>
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mx-auto mb-4">
                    <i className="ri-community-line text-2xl text-purple-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">公共设施</h4>
                  <p className="text-sm text-gray-600">完善的配套设施，包括会议室、休息区等</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">服务项目</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-200 to-red-200 rounded-full mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">企业加速</h3>
                <p className="text-gray-600">为初创企业提供全方位的孵化加速服务</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg border border-teal-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mx-auto mb-4">
                  <i className="ri-megaphone-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">市场推广</h3>
                <p className="text-gray-600">专业的北美市场营销和品牌推广支持</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mx-auto mb-4">
                  <i className="ri-settings-3-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">技术资源</h3>
                <p className="text-gray-600">丰富的技术资源和专业人才网络</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              返回首页
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
