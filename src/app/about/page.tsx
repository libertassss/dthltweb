import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
          <span className="relative inline-block">
            关于我们
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-2"></span>
          </span>
        </h1>
        
        {/* 公司简介 */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/about/company.jpg"
                alt="公司外观"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">公司简介</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  我们是一家专业从事电位器研发、生产和销售的高新技术企业。自成立以来，我们始终致力于为客户提供高品质的电位器产品和专业的技术服务。
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  公司拥有先进的生产设备和专业的技术团队，产品广泛应用于工业控制、消费电子、医疗设备等领域。我们以&ldquo;质量第一、服务至上&rdquo;为经营理念，不断追求卓越，为客户创造价值。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 发展历程 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            <span className="relative inline-block">
              发展历程
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-2"></span>
            </span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-blue-400"></div>
            <div className="space-y-12">
              {[
                { year: '2010', title: '公司成立', content: '在深圳成立，开始电位器研发和生产' },
                { year: '2015', title: '技术突破', content: '成功研发高精度数字电位器，获得多项专利' },
                { year: '2018', title: '规模扩张', content: '新建现代化生产基地，年产能提升至5000万只' },
                { year: '2023', title: '创新发展', content: '推出新一代智能电位器产品，获得市场广泛认可' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <div className="text-blue-700 font-bold text-xl mb-3">{item.year}</div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                        <p className="text-gray-700 text-lg">{item.content}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 企业文化 */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            <span className="relative inline-block">
              企业文化
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-2"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '企业使命',
                content: '为客户提供高品质的电位器产品和专业的技术服务',
                icon: '🎯',
                color: 'bg-blue-50'
              },
              {
                title: '企业愿景',
                content: '成为全球领先的电位器制造商',
                icon: '👀',
                color: 'bg-green-50'
              },
              {
                title: '核心价值观',
                content: '诚信、创新、品质、服务',
                icon: '💎',
                color: 'bg-purple-50'
              }
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 