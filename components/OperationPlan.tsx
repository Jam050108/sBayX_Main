
'use client';

import Link from 'next/link';

export default function OperationPlan() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            运营方案及团队
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            深贝思sBayX制定了全面的运营方案，通过十大核心服务模块，为中国企业和海外人才提供专业的对接和支持服务。
          </p>
          <Link href="/operation-plan" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold whitespace-nowrap cursor-pointer inline-block">
            查看详细方案
          </Link>
        </div>
      </div>
    </section>
  );
}