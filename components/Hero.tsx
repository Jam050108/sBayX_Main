
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/IMG_2956.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 背景动画层 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight transform transition-all duration-1000 animate-slideInLeft"
                style={{
                  background: 'linear-gradient(145deg, #f8fafc, #7dd3fc, #f8fafc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(125, 211, 252, 0.2)',
                  filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1))'
                }}>
              <span className="inline-block">深贝思</span>
              <span className="inline-block ml-2"> sBayX </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4 transform transition-all duration-1000 delay-200 animate-slideInLeft">
              <span className="inline-block">中国企业北美出海基地</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed transform transition-all duration-1000 delay-400 animate-slideInLeft">
              <span className="inline-block">专业的一站式服务平台，助力中国企业在北美市场成功落地、合规运营、持续发展。</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-600 animate-slideInUp">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg whitespace-nowrap cursor-pointer inline-block text-center">
                立即咨询
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* 景深装饰元素 */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float-delay"></div>
      <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-blue-400/15 rounded-full blur-md animate-float-slow"></div>
      
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 4s;
        }
      `}</style>
    </section>
  );
}
