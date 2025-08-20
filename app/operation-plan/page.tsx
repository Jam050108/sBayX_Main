
'use client';

import Link from 'next/link';

export default function OperationPlanPage() {
  const operationPlans = [
    {
      icon: 'ri-links-line',
      title: '人才信息互动链接',
      description: '促进海外经济、科技人才之间的信息互动链接',
      details: ['建立人才数据库', '搭建交流平台', '促进信息共享', '加强网络建设']
    },
    {
      icon: 'ri-megaphone-line',
      title: '创新创业政策宣传',
      description: '宣传推介深圳创新创业政策和环境，做好引流工作',
      details: ['政策解读', '环境推介', '案例分享', '引流服务']
    },
    {
      icon: 'ri-user-voice-line',
      title: '人才沙龙活动',
      description: '不定期举办人才沙龙，加强人才交流',
      details: ['定期沙龙', '主题交流', '经验分享', '网络拓展']
    },
    {
      icon: 'ri-discuss-line',
      title: '专业专题研讨会',
      description: '定期举办各种专业和专题研讨会，提供交流与合作的机会',
      details: ['行业研讨', '技术交流', '合作对接', '趋势分析']
    },
    {
      icon: 'ri-calendar-event-line',
      title: '活动会议承办',
      description: '组织承办企业、政府、社会组织等在硅谷的活动和会议',
      details: ['活动策划', '会议组织', '场地协调', '服务支持']
    },
    {
      icon: 'ri-handshake-fill',
      title: '企业人才对接',
      description: '举办企业+人才对接活动，加快人才项目落地市场化',
      details: ['对接活动', '项目匹配', '市场化推进', '落地支持']
    },
    {
      icon: 'ri-stack-line',
      title: '技术企业合作',
      description: '推动人才技术与企业的合作，提供海外项目与企业对接服务',
      details: ['技术转化', '项目对接', '合作促进', '资源整合']
    },
    {
      icon: 'ri-global-line',
      title: '项目落地服务',
      description: '吸引海外科技项目、技术、人才进行项目落地',
      details: ['项目筛选', '落地支持', '资源配置', '跟踪服务']
    },
    {
      icon: 'ri-ship-line',
      title: '企业出海协助',
      description: '协助深圳企业"走出去"，落点在项目，协助搭建国外市场',
      details: ['出海规划', '市场分析', '渠道建设', '本土化支持']
    },
    {
      icon: 'ri-building-2-line',
      title: '海外工作站建设',
      description: '海外服务机构合作，建设海外人才工作站',
      details: ['工作站建设', '机构合作', '服务网络', '持续运营']
    }
  ];

  const teamMembers = [
    {
      name: '张明华',
      position: '首席执行官',
      background: '前跨国企业亚太区总裁，20年国际商务经验',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20business%20executive%20in%20modern%20office%2C%20confident%20CEO%20in%20business%20suit%2C%20clean%20corporate%20headshot%20with%20professional%20lighting%2C%20representing%20senior%20management%20team%20member&width=300&height=300&seq=team-001&orientation=squarish'
    },
    {
      name: 'David Miller',
      position: '法律事务总监',
      background: '美国顶级律师事务所合伙人，专注企业法律服务',
      image: 'https://readdy.ai/api/search-image?query=Professional%20American%20lawyer%20in%20business%20suit%2C%20experienced%20legal%20advisor%20in%20law%20office%2C%20confident%20legal%20expert%20with%20professional%20appearance%2C%20representing%20legal%20team%20director&width=300&height=300&seq=team-002&orientation=squarish'
    },
    {
      name: '李慧敏',
      position: '财务总监',
      background: '注册会计师，曾任职于四大会计师事务所',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20finance%20director%20in%20business%20attire%2C%20confident%20CFO%20in%20modern%20office%20setting%2C%20clean%20corporate%20headshot%20representing%20financial%20expertise&width=300&height=300&seq=team-003&orientation=squarish'
    },
    {
      name: 'Sarah Johnson',
      position: '市场总监',
      background: '北美市场营销专家，15年品牌管理经验',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20marketing%20director%20in%20business%20attire%2C%20experienced%20brand%20manager%20in%20corporate%20environment%2C%20confident%20marketing%20expert%20with%20professional%20appearance&width=300&height=300&seq=team-004&orientation=squarish'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20environment%20with%20professional%20business%20meeting%20room%2C%20international%20business%20collaboration%20setting%2C%20clean%20professional%20workspace%20with%20global%20connectivity%20theme%2C%20sophisticated%20business%20atmosphere&width=1920&height=600&seq=operation-hero-001&orientation=landscape')`}}>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">运营方案及团队</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              深贝思sBayX制定了全面的运营方案，通过十大核心服务模块，为中国企业和海外人才提供专业的对接和支持服务。
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心运营方案
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              通过十大核心模块，为企业和人才提供全方位的对接服务与支持
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {operationPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <i className={`${plan.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心团队
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              汇聚全球顶尖人才，打造专业服务团队
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备开始合作？</h2>
            <p className="text-gray-600 mb-6">联系我们，了解更多关于运营方案和团队服务的详细信息</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap cursor-pointer">
                联系我们
              </Link>
              <Link href="/services" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 font-semibold whitespace-nowrap cursor-pointer">
                了解服务
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}