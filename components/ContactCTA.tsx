
'use client';

import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 开启您的北美出海之旅 */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            开启您的北美出海之旅
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            立即联系深贝思sBayX专业团队，获取量身定制的出海解决方案，让您的企业在北美市场取得成功。
          </p>
          <div className="flex justify-center mb-12">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold whitespace-nowrap cursor-pointer inline-block">
              立即咨询
            </Link>
          </div>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-full mb-4">
                <i className="ri-phone-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">美国电话</h3>
              <p className="text-blue-100">+1 (650) 690-2661</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-full mb-4">
                <i className="ri-phone-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">中国电话</h3>
              <p className="text-blue-100">+86 18676379410</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-full mb-4">
                <i className="ri-mail-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">邮件联系</h3>
              <p className="text-blue-100">support@sBayX.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-full mb-4">
                <i className="ri-global-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">官方网站</h3>
              <p className="text-blue-100">www.sBayX.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-full mb-4">
                <i className="ri-wechat-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">微信联系</h3>
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="https://static.readdy.ai/image/a877363f9e9c7b45b36403e1347a6ab2/2bc5381a4a01caaef5f8498507473627.png" 
                  alt="微信二维码" 
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
