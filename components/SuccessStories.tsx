
'use client';

import Link from 'next/link';

export default function SuccessStories() {
  const stories = [
    {
      company: '科技流解决方案',
      industry: '科技行业',
      achievement: '营收增长300%',
      description: '成功从上海扩张到硅谷，在北美科技市场建立了强大的影响力。',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20office%20with%20diverse%20team%20working%20collaboratively%2C%20clean%20professional%20environment%2C%20glass%20walls%20and%20modern%20furniture%2C%20representing%20successful%20technology%20company%20expansion%2C%20natural%20lighting%20and%20professional%20atmosphere&width=400&height=300&seq=success-001&orientation=landscape',
      results: ['开设3个办公室', '雇佣50+员工', '获得重要合同']
    },
    {
      company: '绿色能源集团',
      industry: '可再生能源',
      achievement: '获得5000万美元投资',
      description: '通过战略合作和政府支持，在北美建立了可再生能源业务。',
      image: 'https://readdy.ai/api/search-image?query=Solar%20panels%20and%20wind%20turbines%20in%20a%20clean%20energy%20facility%2C%20modern%20renewable%20energy%20infrastructure%2C%20professional%20industrial%20setting%20with%20blue%20skies%2C%20representing%20successful%20green%20energy%20expansion&width=400&height=300&seq=success-002&orientation=landscape',
      results: ['建设5个太阳能农场', '政府合同', '本地合作伙伴']
    },
    {
      company: '时尚前沿公司',
      industry: '零售时尚',
      achievement: '150家门店',
      description: '从中国时尚品牌转型为北美零售成功案例，实现战略市场定位。',
      image: 'https://readdy.ai/api/search-image?query=Modern%20fashion%20retail%20store%20with%20elegant%20displays%2C%20contemporary%20clothing%20boutique%20interior%2C%20professional%20retail%20environment%20with%20stylish%20clothing%20displays%2C%20clean%20minimalist%20design&width=400&height=300&seq=success-003&orientation=landscape',
      results: ['全国零售连锁', '品牌认知度', '客户忠诚度']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            成功案例
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            来自信任我们进行北美扩张的中国企业的真实成果。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${story.image})` }}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{story.company}</h3>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {story.industry}
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-3">
                  {story.achievement}
                </div>
                <p className="text-gray-600 mb-4">
                  {story.description}
                </p>
                <div className="space-y-2">
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/success-stories" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap cursor-pointer inline-block">
            查看所有成功案例
          </Link>
        </div>
      </div>
    </section>
  );
}
