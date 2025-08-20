
'use client';

import Link from 'next/link';

export default function BaseDistribution() {
  const bases = [
    {
      id: 'silicon-valley',
      name: '硅谷深圳湾大楼孵化基地',
      location: '加利福尼亚州硅谷',
      area: '临近Google/NVIDIA',
      features: ['科技创新中心', '顶级孵化环境', '丰富创投资源', '技术人才聚集'],
      image: 'https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/82747c32093ae094883627329a83e78d.png',
      link: '/silicon-valley-campus'
    },
    {
      id: 'newark-campus',
      name: '智展Smart Campus/海外仓',
      location: '加利福尼亚州纽瓦克',
      area: '31,500平方英尺',
      features: ['大型仓储空间', '智能化管理', '便捷物流网络', '一体化服务'],
      image: 'https://readdy.ai/api/search-image?query=Large%20modern%20warehouse%20and%20office%20complex%20in%20Newark%20California%2C%20smart%20campus%20facility%20with%20integrated%20storage%20and%20office%20spaces%2C%20contemporary%20industrial%20architecture%20with%20loading%20docks%20and%20office%20areas&width=600&height=400&seq=base-002&orientation=landscape',
      link: '/newark-campus'
    },
    {
      id: 'east-coast',
      name: '美东孵化基地',
      location: '美国东海岸',
      area: '战略位置布局',
      features: ['东海岸市场', '金融中心接近', '国际贸易便利', '政策资源丰富'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20incubator%20facility%20on%20US%20East%20Coast%2C%20modern%20office%20building%20with%20financial%20district%20skyline%20in%20background%2C%20contemporary%20architecture%20representing%20business%20growth%20and%20innovation&width=600&height=400&seq=base-003&orientation=landscape',
      link: '/east-coast-campus'
    },
    {
      id: 'chicago-ftz',
      name: '芝加哥自贸区基地',
      location: '伊利诺伊州芝加哥',
      area: '2900英亩保税土地',
      features: ['自贸区政策', '关税优惠', '产品组装', '贸易便利化'],
      image: 'https://readdy.ai/api/search-image?query=Chicago%20free%20trade%20zone%20facility%20with%20cargo%20operations%2C%20modern%20logistics%20and%20manufacturing%20complex%20near%20airport%2C%20industrial%20buildings%20with%20trade%20zone%20signage%20and%20shipping%20containers&width=600&height=400&seq=base-004&orientation=landscape',
      link: '/chicago-ftz'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            基地分布
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            深贝思sBayX在北美建立了完整的服务网络，四大孵化基地战略布局，
            覆盖美国西部、东部及中部自由贸易区，为中国企业提供全方位支持。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {bases.map((base, index) => (
            <div key={base.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${base.image})` }}>
                <div className="h-full bg-black bg-opacity-20 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{base.name}</h3>
                    <p className="text-sm opacity-90">{base.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span className="text-sm">{base.area}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {base.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={base.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer group"
                >
                  <span className="mr-2">了解详情</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">全面覆盖，就近服务</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            四大基地形成完整的服务网络，无论您的目标市场在美国的哪个区域，
            我们都能为您提供就近的专业服务和支持。
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <div className="flex items-center">
              <i className="ri-building-line mr-2 text-blue-600"></i>
              <span>4个孵化基地</span>
            </div>
            <div className="flex items-center">
              <i className="ri-global-line mr-2 text-blue-600"></i>
              <span>覆盖东西海岸</span>
            </div>
            <div className="flex items-center">
              <i className="ri-truck-line mr-2 text-blue-600"></i>
              <span>2个海外仓</span>
            </div>
            <div className="flex items-center">
              <i className="ri-shield-check-line mr-2 text-blue-600"></i>
              <span>1个自贸区</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
