'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ResourcesPage() {
  const resources = [
    {
      type: '指南',
      title: '北美市场进入完整指南',
      description: '涵盖从市场调研到企业注册的全方位分步指南。',
      readTime: '15分钟阅读',
      category: '市场进入',
      image: 'https://readdy.ai/api/search-image?query=Business%20planning%20documents%20and%20charts%20on%20a%20desk%2C%20professional%20workspace%20with%20market%20analysis%20reports%2C%20clean%20office%20environment%20with%20strategic%20planning%20materials%2C%20representing%20business%20guide%20resources&width=400&height=250&seq=resource-001&orientation=landscape',
      featured: true
    },
    {
      type: '报告',
      title: '2024年中国企业扩张趋势',
      description: '对北美市场当前趋势和机遇的全面分析。',
      readTime: '12分钟阅读',
      category: '市场分析',
      image: 'https://readdy.ai/api/search-image?query=Financial%20charts%20and%20growth%20graphs%20on%20computer%20screen%2C%20business%20analytics%20dashboard%20with%20trending%20data%2C%20professional%20office%20setting%20with%20data%20visualization%2C%20representing%20market%20research%20report&width=400&height=250&seq=resource-002&orientation=landscape',
      featured: true
    },
    {
      type: '清单',
      title: '中国企业法律合规检查清单',
      description: '在北美开展业务的基本法律要求和合规步骤。',
      readTime: '8分钟阅读',
      category: '法律合规',
      image: 'https://readdy.ai/api/search-image?query=Legal%20documents%20and%20compliance%20paperwork%20on%20desk%2C%20professional%20law%20office%20environment%20with%20contracts%20and%20legal%20files%2C%20clean%20organized%20workspace%20representing%20legal%20compliance&width=400&height=250&seq=resource-003&orientation=landscape'
    },
    {
      type: '模板',
      title: '市场进入商业计划模板',
      description: '专为中国企业设计的可定制商业计划模板。',
      readTime: '10分钟阅读',
      category: '商业规划',
      image: 'https://readdy.ai/api/search-image?query=Business%20plan%20template%20on%20computer%20screen%2C%20professional%20office%20workspace%20with%20strategic%20planning%20documents%2C%20clean%20modern%20desk%20setup%20with%20business%20planning%20materials&width=400&height=250&seq=resource-004&orientation=landscape'
    },
    {
      type: '网络研讨会',
      title: '文化融合最佳实践',
      description: '学习如何成功融入北美商业文化。',
      readTime: '45分钟观看',
      category: '文化融合',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20meeting%20with%20diverse%20team%20members%2C%20international%20business%20conference%20room%2C%20modern%20office%20setting%20with%20collaborative%20discussion%2C%20representing%20cultural%20integration%20training&width=400&height=250&seq=resource-005&orientation=landscape'
    },
    {
      type: '案例研究',
      title: '制造业在北美的成功',
      description: '中国制造企业成功扩张的详细案例研究。',
      readTime: '20分钟阅读',
      category: '成功案例',
      image: 'https://readdy.ai/api/search-image?query=Modern%20manufacturing%20facility%20with%20advanced%20equipment%2C%20clean%20industrial%20environment%20with%20production%20lines%2C%20professional%20manufacturing%20plant%20representing%20successful%20business%20expansion&width=400&height=250&seq=resource-006&orientation=landscape'
    },
    {
      type: '网站',
      title: '北美商业生态系统导航',
      description: '一站式平台，连接北美商业资源、合作伙伴和服务提供商。',
      readTime: '立即访问',
      category: '商业网络',
      image: 'https://readdy.ai/api/search-image?query=Interactive%20business%20ecosystem%20dashboard%20on%20computer%20screen%2C%20professional%20office%20with%20network%20diagrams%20and%20business%20connections%2C%20modern%20workspace%20representing%20business%20ecosystem%20platform&width=400&height=250&seq=resource-007&orientation=landscape',
      externalUrl: 'https://northamerica-business-ecosystem.com',
      featured: true
    },
    {
      type: '工具',
      title: '市场调研工具包',
      description: '包含调查问卷、分析模板和评估框架的完整工具包。',
      readTime: '下载使用',
      category: '市场调研',
      image: 'https://readdy.ai/api/search-image?query=Market%20research%20tools%20and%20analytics%20software%20on%20desktop%2C%20professional%20business%20intelligence%20dashboard%2C%20modern%20office%20with%20data%20analysis%20equipment&width=400&height=250&seq=resource-008&orientation=landscape'
    },
    {
      type: '白皮书',
      title: '数字化转型策略',
      description: '中国企业北美数字化转型的完整策略指南。',
      readTime: '25分钟阅读',
      category: '数字化转型',
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20strategy%20presentation%20on%20screen%2C%20modern%20technology%20office%20with%20digital%20tools%2C%20professional%20workspace%20representing%20digital%20innovation&width=400&height=250&seq=resource-009&orientation=landscape'
    }
  ];

  const categories = ['全部', '市场进入', '市场分析', '法律合规', '商业规划', '文化融合', '成功案例', '商业网络', '市场调研', '数字化转型'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              资源与洞察中心
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              获取宝贵的资源、指南和洞察，支持您的北美扩张之旅
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            精选资源
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.filter(r => r.featured).map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${resource.image})` }}>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      精选
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {resource.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.category}
                    </span>
                    {resource.externalUrl ? (
                      <a 
                        href={resource.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer"
                      >
                        立即访问 →
                      </a>
                    ) : (
                      <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer">
                        阅读更多 →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            所有资源
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${resource.image})` }}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {resource.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.category}
                    </span>
                    {resource.externalUrl ? (
                      <a 
                        href={resource.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer"
                      >
                        立即访问 →
                      </a>
                    ) : (
                      <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer">
                        阅读更多 →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            需要更多帮助？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            我们的专业团队随时为您提供个性化咨询服务
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold whitespace-nowrap cursor-pointer inline-block">
            立即咨询
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
