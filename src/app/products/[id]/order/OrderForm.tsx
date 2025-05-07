'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';

type OrderFormProps = {
  productId: string;
};

export default function OrderForm({ productId }: OrderFormProps) {
  const router = useRouter();
  const product = products.find((p) => p.id === productId);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    quantity: 1,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!product) {
    notFound();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 模拟发送邮件
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setTimeout(() => {
        router.push('/products');
      }, 2000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setFormData((prev) => ({ ...prev, quantity: value }));
    }
  };

  return (
    <main className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">产品订购</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* 产品信息 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold mb-4">产品信息</h2>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-medium">产品名称：</span>
                {product.name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">产品型号：</span>
                {product.model}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">产品价格：</span>
                ¥{product.price?.toFixed(2)}
              </p>
              <div className="pt-4 border-t">
                <p className="text-gray-600">
                  <span className="font-medium">产品规格：</span>
                </p>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-600">
                    电阻值：{product.specifications.resistance}
                  </p>
                  <p className="text-sm text-gray-600">
                    容差：{product.specifications.tolerance}
                  </p>
                  <p className="text-sm text-gray-600">
                    功率：{product.specifications.power}
                  </p>
                  <p className="text-sm text-gray-600">
                    温度范围：{product.specifications.temperature}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 订购表单 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  公司名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的公司名称"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  电话 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的电话号码"
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  订购数量 <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  required
                  min="1"
                  value={formData.quantity}
                  onChange={handleQuantityChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  留言
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的留言（选填）"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? '提交中...' : '提交订单'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">订单提交成功！</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  订单提交失败，请稍后重试。
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 