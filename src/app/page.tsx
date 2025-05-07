import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              产品快速选型
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              提供高品质、高精度的电位器解决方案
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                浏览产品
              </Link>
              <Link 
                target="_blank"
                href="/product-guide.pdf"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                产品指南
              </Link>
              <Link 
                target="_blank"
                href="/product-overview.pdf"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                产品概览
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">热门产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={product.image || '/images/products/default.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-800 mb-4">{product.description}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
                  >
                    查看详情
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">高精度</h3>
              <p className="text-gray-600">严格的品质控制，确保产品精度</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">快速响应</h3>
              <p className="text-gray-600">专业的客户服务团队，及时响应需求</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">技术支持</h3>
              <p className="text-gray-600">专业的技术团队，提供全方位支持</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
