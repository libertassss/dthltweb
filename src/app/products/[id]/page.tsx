'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [currentMainIndex, setCurrentMainIndex] = useState(0);

  if (!product) {
    notFound();
  }

  const handlePrevMain = () => {
    setCurrentMainIndex((prev) => 
      prev === 0 ? (product.images?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextMain = () => {
    setCurrentMainIndex((prev) => 
      prev === (product.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const handlePdfClick = (pdfUrl?: string): void => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <main className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* 产品图片区域 */}
          <div className="space-y-8">
            {/* 主图 */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              {(product.images || [product.image]).map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    index === currentMainIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image || '/images/products/default.jpg'}
                    alt={`${product.name} - 主图 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              
              {/* 切换按钮 */}
              {(product.images?.length || 1) > 1 && (
                <>
                  <button
                    onClick={handlePrevMain}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
                  >
                    ‹
                  </button>
                  <button
                    onClick={handleNextMain}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
                  >
                    ›
                  </button>

                  {/* 指示器 */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {(product.images || [product.image]).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMainIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentMainIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* 产品详情图 */}
            {product.details && product.details.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">产品详情</h2>
                  {product.pdf && (
                    <button
                      onClick={() => handlePdfClick(product.pdf)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      查看PDF
                    </button>
                  )}
                </div>
                <div className="space-y-6">
                  {product.details.map((detail, index) => (
                    <div key={index} className="relative w-full rounded-lg overflow-hidden">
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <Image
                          src={detail}
                          alt={`${product.name} - 产品详情 ${index + 1}`}
                          fill
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 产品信息 */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{product.name}</h1>
            <p className="text-gray-600 text-sm md:text-base mb-2">型号：{product.model}</p>
            <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-3 md:mb-4">
              ¥{product.price?.toFixed(2)}
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">{product.description}</p>

            {/* 产品规格 */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900">产品规格</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <p className="text-gray-800 text-sm md:text-base">电阻值</p>
                  <p className="font-medium text-sm md:text-base text-gray-900">{product.specifications.resistance}</p>
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base">容差</p>
                  <p className="font-medium text-sm md:text-base text-gray-900">{product.specifications.tolerance}</p>
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base">功率</p>
                  <p className="font-medium text-sm md:text-base text-gray-900">{product.specifications.power}</p>
                </div>
                <div>
                  <p className="text-gray-800 text-sm md:text-base">温度范围</p>
                  <p className="font-medium text-sm md:text-base text-gray-900">{product.specifications.temperature}</p>
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href={`/products/${product.id}/order`}
                className="flex-1 bg-blue-600 text-white text-center py-2 md:py-3 rounded-lg hover:bg-blue-700 text-sm md:text-base"
              >
                立即订购
              </Link>
              <Link
                href="/products"
                className="flex-1 border border-gray-300 text-gray-700 text-center py-2 md:py-3 rounded-lg hover:bg-gray-50 text-sm md:text-base"
              >
                返回列表
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 