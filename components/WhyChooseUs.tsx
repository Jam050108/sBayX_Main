
'use client';

export default function WhyChooseUs() {
  const stats = [
    {
      number: '500+',
      label: '成功案例',
      icon: 'ri-trophy-line'
    },
    {
      number: '15年',
      label: '行业经验',
      icon: 'ri-calendar-line'
    },
    {
      number: '98%',
      label: '客户满意度',
      icon: 'ri-star-line'
    },
    {
      number: '50+',
      label: '专业顾问',
      icon: 'ri-team-line'
    }
  ];

  const advantages = [
    {
      icon: 'ri-map-pin-line',
      title: '本地化专业知识',
      description: '深入了解北美市场，拥有丰富的本地化经验和专业知识。'
    },
    {
      icon: 'ri-handshake-line',
      title: '端到端服务',
      description: '从市场调研到企业运营，提供全程无缝对接的专业服务。'
    },
    {
      icon: 'ri-shield-check-line',
      title: '合规保障',
      description: '确保您的企业在各个环节都符合当地法律法规要求。'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '双语支持',
      description: '中英文双语团队，消除语言障碍，提供无缝沟通体验。'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            凭借丰富的经验和专业的团队，我们是您北美扩张的最佳合作伙伴。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-md">
                <i className={`${advantage.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
