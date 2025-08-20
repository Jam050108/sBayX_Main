
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SiliconValleyCampusPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16 pb-20">
        {/* Hero区域 */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* 背景图片 */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/57dd5f691ac26f65aa685f12466b689b.png)`
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* 内容 */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" 
                    style={{
                      textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3), 0 4px 20px rgba(0, 0, 0, 0.3)',
                      filter: 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.4))'
                    }}>
                AI国际空间站
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-cyan-100 animate-fade-in-up animation-delay-300" 
               style={{
                 textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(34, 211, 238, 0.3)'
               }}>
              硅谷深圳湾大楼孵化基地
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in-up animation-delay-500" 
               style={{
                 textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
               }}>
              位于硅谷核心区域的人工智能产业基地，打通中国科技企业和美国硅谷之间的链接通道
            </p>
            <div className="flex items-center justify-center text-cyan-200 text-lg animate-fade-in-up animation-delay-700" 
                 style={{
                   textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'
                 }}>
              <i className="ri-map-pin-line mr-2 text-2xl animate-bounce-slow"></i>
              <span>3120 SCOTT BLVD, Santa Clara, CA</span>
            </div>
          </div>

          {/* 装饰性元素 */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 项目诉求 */}
          <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl mb-20 relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-400 rounded-lg rotate-45 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl animate-float"></div>
            </div>

            <div className="relative z-10 text-center text-white px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  项目诉求
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed">
                <p className="text-cyan-100">
                  <span className="text-2xl font-bold text-cyan-300">AI&机器人</span> 
                  是人类进入下一个文明的重要生产力、重要的伙伴、重要的载体
                </p>
                
                <p className="text-blue-100">
                  未来科技迅猛发展，人工智能成长迅速， 
                  <span className="text-xl font-semibold text-blue-300">全球各个国家和资本都在重点关注这个赛道</span>
                </p>
                
                <p className="text-purple-100">
                  <span className="text-xl font-bold text-purple-300">3120 SCOTT BLVD</span> 
                  位于硅谷核心区域，利用我们的核心区位优势，打造一个人工智能产业基地
                </p>
                
                <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border border-cyan-400/20">
                  <p className="text-2xl font-bold text-white mb-4">
                    打通中国科技企业和美国硅谷之间的链接通道
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    成为一个"AI国际空间站"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 场地信息 */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl mb-20">
            <div className="px-8">
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  场地信息
                </span>
              </h2>

              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">平面图</h3>
                  <img 
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/5236c88b0de083f8f4a5f8429f70e01f.png"
                    alt="场地平面图"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 text-center mb-6">
                    场地详细平面布局图
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">楼层布局详图</h3>
                  <img 
                    src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8856231970172784cc3b256d0ba73640.png"
                    alt="楼层布局详图"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 text-center mt-4">
                    楼层功能区域分布详图
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 整体概念部分 */}
          <section className="mb-20">
            <div className="bg-white rounded-xl shadow-lg px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  整体概念
                </span>
              </h2>
              
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  <span className="text-2xl font-bold text-blue-900 mr-2">AI空间站</span>
                  作为硅谷园区的核心理念，致力于打造一个集人工智能研发、孵化、交流于一体的创新生态空间。
                  我们相信，在这个充满无限可能的AI时代，只有通过跨界合作与创新思维的碰撞，
                  才能推动人工智能技术的突破与应用，为全球科技进步贡献力量。
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-8">时光旅行概念设计，探索未来科技与传统文化的融合</p>
                <img 
                  src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/e08566c7a47510a49f0a4db6c637e6e0.png"
                  alt="时光旅行概念图"
                  className="w-full h-auto object-contain rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </section>

          {/* 视觉方案模块 */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  视觉方案
                </span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center leading-relaxed mb-12">
                  通过现代化的视觉设计展现AI国际空间站的创新理念和未来愿景
                </p>

                {/* 滑动图片容器 */}
                <div className="relative overflow-hidden">
                  <div className="flex space-x-8 pb-4 overflow-x-auto scrollbar-hide" id="visualGallery">
                    <div className="flex-shrink-0 w-[480px)">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/28f3c1ee8db43eaec0c3a0c5a56b4b61.png"
                          alt="电梯厅设计"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-[480px)">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/de0b7a7179e4b6fdbbe6933f3746b65b.png"
                          alt="AI研发实验室"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-[480px)">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8fab6241d2fd8fe49a88f93ee7d583ed.png"
                          alt="空间补给站"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-[480px)">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src="https://readdy.ai/api/search-image?query=collaborative%20meeting%20rooms%20with%20digital%20displays%20and%20modern%20furniture%2C%20bright%20natural%20lighting%2C%20glass%20partitions%2C%20contemporary%20design%20for%20tech%20companies&width=480&height=320&seq=visual3&orientation=landscape"
                          alt="协作会议室"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-[480px)">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/8f51965c0bc65e8f7c1a938f9c1f706e.png"
                          alt="智能接待大厅"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-[480px)">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/c1a0bed64d9af9396ab9be320695632d.png"
                          alt="AI研发实验室"
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 滑动控制按钮 */}
                  <div className="flex justify-center mt-8 space-x-4">
                    <button 
                      onClick={() => {
                        const gallery = document.getElementById('visualGallery');
                        if (gallery) gallery.scrollLeft -= 480;
                      }}
                      className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer shadow-md hover:shadow-lg transition-all"
                    >
                      <i className="ri-arrow-left-line text-gray-600 text-lg"></i>
                    </button>
                    <button 
                      onClick={() => {
                        const gallery = document.getElementById('visualGallery');
                        if (gallery) gallery.scrollLeft += 480;
                      }}
                      className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer shadow-md hover:shadow-lg transition-all"
                    >
                      <i className="ri-arrow-right-line text-gray-600 text-lg"></i>
                    </button>
                  </div>
                </div>

                {/* 滑动指示器 */}
                <div className="flex justify-center mt-6 space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* 联系我们 */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">开启您的AI星辰大海之旅</h2>
            <p className="text-xl text-gray-600 mb-8">
              加入AI国际空间站，与全球顶尖科技企业共同探索未来
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-medium whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                <i className="ri-mail-line mr-2"></i>
                联系我们
              </Link>
              <Link 
                href="/" 
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                返回首页
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(405deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
