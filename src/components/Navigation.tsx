'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* 左侧：Logo和公司名 */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png?t=12"
              alt="亨利电子"
              width={720}
              height={360}
              style={{ objectFit: 'contain', marginLeft: '-160px' }}
              priority
            />
           
          </div>
          {/* 右侧：主菜单和电话 */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`${isActive('/') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                首页
              </Link>
              <Link
                href="/products"
                className={`${isActive('/products') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                产品目录
              </Link>
              <Link
                href="/about"
                className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                关于我们
              </Link>
              <Link
                href="/contact"
                className={`${isActive('/contact') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                联系我们
              </Link>
            </div>
            <div className="text-red-600 font-bold text-lg whitespace-nowrap">电话：+86-13851022208</div>
            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="切换菜单"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`${isActive('/') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors px-4 py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                href="/products"
                className={`${isActive('/products') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors px-4 py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                产品目录
              </Link>
              <Link
                href="/about"
                className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors px-4 py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                关于我们
              </Link>
              <Link
                href="/contact"
                className={`${isActive('/contact') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors px-4 py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                联系我们
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 