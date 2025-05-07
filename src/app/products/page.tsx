'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';

type SortBy = 'name' | 'price';
type SortOrder = 'asc' | 'desc';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 获取所有产品类别
  const categories = ['all', ...new Set(products.map((p) => p.category))];

  // 过滤和排序产品
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return sortOrder === 'asc'
          ? (a.price || 0) - (b.price || 0)
          : (b.price || 0) - (a.price || 0);
      }
    });

  return (
    <main className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">产品列表</h1>

        {/* 搜索和筛选区域 */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* 搜索框 */}
            <div className="w-full md:w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索产品名称或型号..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* 移动端筛选按钮 */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              {isFilterOpen ? '收起筛选' : '显示筛选'}
            </button>

            {/* 排序选项 */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">按名称</option>
                <option value="price">按价格</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>

          {/* 类别筛选 - 移动端 */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? '全部' : category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 类别筛选 - 桌面端 */}
          <div className="hidden md:flex justify-center mt-6 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? '全部' : category}
              </button>
            ))}
          </div>
        </div>

        {/* 产品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-w-16 aspect-h-9 bg-gray-100">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">型号：{product.model}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    ¥{product.price?.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 无结果提示 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">未找到匹配的产品</p>
          </div>
        )}
      </div>
    </main>
  );
} 