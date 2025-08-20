'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/b349e6c779d18317080a5713af35b2e4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 背景遮罩层 */}
        <div className="absolute inset-0 bg-white/85"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              关于深贝思sBayX
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* 公司介绍 */}
            <div>
              <p className="text-xl text-gray-700 leading-relaxed">
                深贝思（sBayX）企业北美出海基地，是致力于服务中国企业全球化发展的战略平台。我们立足北美，依托硅谷创新资源，构建覆盖美国西部、东部及中部自由贸易区的四大孵化基地，配备办公空间、海外仓储、自贸区资源与一站式落地服务，帮助企业从0到1、高效、合规、低成本地完成出海布局。
              </p>
            </div>

            {/* 我们的使命 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h2>
              <p className="text-xl text-gray-700">
                连接中美商业桥梁，推动中国企业走向全球市场。
              </p>
            </div>

            {/* 我们的优势 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的优势</h2>
              <div className="text-xl text-gray-700 space-y-4">
                <p><strong>战略选址：</strong>硅谷（临近Google/NVIDIA）、芝加哥机场、自贸区（2900英亩保税土地）</p>
                <p><strong>多元孵化空间：</strong>展厅、办公区、花园、会议及培训场所一应俱全</p>
                <p><strong>一站式出海服务：</strong>从注册公司、财税法务，到仓储物流、贴标发货、退货处理，再到技术人才孵化与投资对接，全程支持企业出海成长</p>
                <p><strong>资源协同：</strong>联合政府、高校、科研机构与投资方，组织沙龙、研讨会、项目对接，激发技术与商业价值落地</p>
              </div>
            </div>

            {/* 我们的服务 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的服务</h2>
              <div className="text-xl text-gray-700 space-y-2">
                <p>企业注册与年审</p>
                <p>虚拟办公室与办公工位租赁</p>
                <p>海外仓储与发货（支持TikTok、小红书电商模式）</p>
                <p>自贸区产品组装与税收优化</p>
                <p>项目孵化、人才引进、市场推广</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}