
'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectOverview from '../components/ProjectOverview';
import BaseDistribution from '../components/BaseDistribution';
import OperationPlan from '../components/OperationPlan';
import FTZIntroduction from '../components/FTZIntroduction';
import Services from '../components/Services';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';
import Resources from '../components/Resources';
import AIAgent from '../components/AIAgent';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景动画层 */}
      <div className="fixed inset-0 z-0">
        {/* 渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100"></div>
        
        {/* 浮动圆圈动画 - 更明显的颜色和动画 */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/50 to-purple-400/50 rounded-full blur-3xl animate-float-large"></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full blur-2xl animate-drift"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/45 to-teal-400/45 rounded-full blur-3xl animate-orbit"></div>
        
        {/* 几何装饰 - 更大更明显 */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/45 to-indigo-400/45 rounded-lg rotate-12 animate-rotate-slow"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/50 to-blue-400/50 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-lg animate-wiggle"></div>
        
        {/* 移动的波纹 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-0 w-96 h-2 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent animate-wave-horizontal"></div>
          <div className="absolute top-0 left-1/2 w-2 h-96 bg-gradient-to-b from-transparent via-cyan-400/35 to-transparent animate-wave-vertical"></div>
        </div>
        
        {/* 粒子效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-blue-400/70 rounded-full animate-twinkle"></div>
          <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-cyan-400/80 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-1/2 left-4/5 w-4 h-4 bg-indigo-400/60 rounded-full animate-twinkle-slow"></div>
          <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-purple-400/70 rounded-full animate-twinkle-fast"></div>
        </div>
        
        {/* 网格纹理 */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 60%)
            `,
            backgroundSize: '300px 300px'
          }}></div>
        </div>
      </div>
      
      {/* 内容层 */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <ProjectOverview />
        <BaseDistribution />
        <Services />
        <FTZIntroduction />
        <OperationPlan />
        <SuccessStories />
        <Resources />
        <ContactCTA />
        <Footer />
        <AIAgent />
      </div>
      {/* 我的使命 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">我们的使命</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              通过提供一站式的出海服务，帮助中国企业在北美市场站稳脚跟、快速发展。 
              我们不仅是服务提供者，更是您在海外市场的可靠伙伴和坚强后盾。
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <i className="ri-check-double-line mr-2 text-green-500"></i>
                <span>100万㎡保税仓储</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-double-line mr-2 text-green-500"></i>
                <span>100+成功孵化企业</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-double-line mr-2 text-green-500"></i>
                <span>7个服务基地</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-double-line mr-2 text-green-500"></i>
                <span>500+专业人才</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
        
        @keyframes float-large {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-15px) translateX(30px);
          }
          75% {
            transform: translateY(-45px) translateX(8px);
          }
        }
        
        @keyframes drift {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(-30px) translateY(-15px);
          }
          50% {
            transform: translateX(-60px) translateY(15px);
          }
          75% {
            transform: translateX(-30px) translateY(-8px);
          }
        }
        
        @keyframes orbit {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(40px) translateY(-20px);
          }
          50% {
            transform: translateX(20px) translateY(-40px);
          }
          75% {
            transform: translateX(-20px) translateY(-20px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }
        
        @keyframes rotate-slow {
          0% {
            transform: rotate(12deg);
          }
          50% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(12deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        
        @keyframes wave-horizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        @keyframes wave-vertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        @keyframes twinkle-delayed {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        @keyframes twinkle-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.3);
          }
        }
        
        @keyframes twinkle-fast {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-float-large {
          animation: float-large 10s ease-in-out infinite;
        }
        
        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 14s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 15s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
        
        .animate-wave-horizontal {
          animation: wave-horizontal 8s linear infinite;
        }
        
        .animate-wave-vertical {
          animation: wave-vertical 10s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-twinkle-delayed {
          animation: twinkle-delayed 2.5s ease-in-out infinite 0.5s;
        }
        
        .animate-twinkle-slow {
          animation: twinkle-slow 3s ease-in-out infinite;
        }
        
        .animate-twinkle-fast {
          animation: twinkle-fast 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
