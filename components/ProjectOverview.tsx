
'use client';

import Link from 'next/link';

export default function ProjectOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 border-2 border-gray-200 rounded-2xl p-12 bg-gray-50/50">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            关于我们
          </h2>
          <div className="max-w-6xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              深贝思sBayX致力于成为中国企业进入北美市场的首选合作伙伴。我们在美国境内建立了完整的服务网络，
              包括四个孵化区、两个海外仓和一个自贸区，为中国企业提供从企业注册、人才对接到市场推广的全链条服务。
            </p>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">我们的使命</h3>
              <p className="text-lg leading-relaxed mb-6">
                通过提供一站式的出海服务，帮助中国企业在北美市场站稳脚跟、快速发展。
                我们不仅是服务提供者，更是您在海外市场的可靠伙伴和坚强后盾。
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>100万㎡保税仓储</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>100+成功孵化企业</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>7个服务基地</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-300"></i>
                  <span>500+专业人才</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xl whitespace-nowrap cursor-pointer group"
              >
                <span className="mr-2">了解更多</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}