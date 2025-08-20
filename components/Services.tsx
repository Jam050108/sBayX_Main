
'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            服务项目介绍
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            深贝思sBayX为中国企业提供全方位的出海服务，涵盖企业设立、运营管理、市场拓展等各个环节，
            确保您的北美之路顺利成功。
          </p>
          <Link href="/services">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              查看详情
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}