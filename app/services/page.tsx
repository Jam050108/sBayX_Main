
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: 'ri-building-line',
      title: '企业注册设立',
      description: '协助完成美国公司注册，包括选择合适的商业实体形式和注册地点。',
      items: [
        { name: '加州公司注册', price: '$680', note: '不含商业地址' },
        { name: '年审服务', price: '$520', note: '' },
        { name: '0报税服务', price: '$520', note: '' }
      ]
    },
    {
      icon: 'ri-home-office-line',
      title: '硅谷深圳湾大楼孵化基地',
      description: '位于硅谷核心地带，为企业提供灵活的办公空间解决方案。',
      items: [
        { name: '小面积出租', price: '$3.68/尺/月', note: '' },
        { name: '虚拟办公室', price: '$900/年', note: '' },
        { name: '工位（个）', price: '$300/月', note: '' }
      ]
    },
    {
      icon: 'ri-cpu-line',
      title: '智展Smart Campus孵化基地',
      description: '现代化智能园区，集办公、仓储、物流于一体的综合服务基地。',
      items: [
        { name: '小面积出租', price: '$3.68/尺/月', note: '' },
        { name: '工位（个）', price: '$300/月', note: '' },
        { name: '海外仓散货仓储', price: '$0.5/CMB/天起', note: '' },
        { name: '海外仓散货发货', price: '$0.1/件起', note: '' }
      ]
    },
    {
      icon: 'ri-map-pin-line',
      title: '美东孵化基地',
      description: '位于美国东部战略位置，服务于东海岸市场的企业需求。',
      items: [
        { name: '小面积出租', price: '$3.68/尺/月', note: '' },
        { name: '工位（个）', price: '$300/月', note: '' }
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: '芝加哥自贸区',
      description: '享受自贸区政策优惠，提供产品组装和贸易便利化服务。',
      items: [
        { name: '产品组装', price: '$20/小时/人', note: '享关税减免' }
      ]
    },
    {
      icon: 'ri-truck-line',
      title: '海外仓服务',
      description: '专业的海外仓储和物流服务，支持跨境电商和贸易企业。',
      items: [
        { name: '散货仓储', price: '$0.5/CMB/天起', note: '灵活计费' },
        { name: '散货发货', price: '$0.1/件起', note: '快速处理' }
      ]
    }
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                服务项目详情
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                深贝思sBayX提供全方位的出海服务解决方案，助力中国企业成功进入北美市场
              </p>
            </div>
          </div>
        </div>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          {item.note && <div className="text-xs text-gray-500 mt-1">{item.note}</div>}
                        </div>
                        <div className="text-sm font-semibold text-blue-600 ml-4">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">立即开始您的出海之旅</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                联系我们的专业团队，获取个性化的服务方案和详细报价
              </p>
              <Link href="/">
                <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  返回首页
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}