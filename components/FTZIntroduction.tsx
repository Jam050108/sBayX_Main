
'use client';

import Link from 'next/link';

export default function FTZIntroduction() {
  const ftzBenefits = [
    {
      icon: 'ri-shield-check-line',
      title: '关税优惠',
      description: '享受暂缓缴纳关税的优惠政策，有效降低运营成本',
      benefits: ['暂缓缴纳进口关税', '减免部分税费', '简化海关手续']
    },
    {
      icon: 'ri-time-line',
      title: '通关便利',
      description: '简化的通关流程，提高货物进出口效率',
      benefits: ['24小时通关服务', '简化申报程序', '优先处理机制']
    },
    {
      icon: 'ri-database-line',
      title: '仓储便利',
      description: '灵活的仓储管理，支持多种货物处理方式',
      benefits: ['无限期存储', '自由加工制造', '灵活配送模式']
    },
    {
      icon: 'ri-global-line',
      title: '贸易自由',
      description: '更大的贸易自由度，便于开展国际业务',
      benefits: ['自由贸易政策', '多元化经营', '国际业务拓展']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            美国本土自贸区介绍
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            美国自由贸易区（FTZ）为中国企业在美国开展业务提供了独特的政策优势和便利条件，
            深贝思sBayX助您充分利用这些优势，实现高效运营。
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">自贸区优势</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ftzBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}