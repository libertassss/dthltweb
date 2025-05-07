'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 这里添加发送邮件的逻辑
      // 示例：await sendContactEmail(formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">联系我们</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 联系信息 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">联系方式</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">公司地址</h3>
                <p className="text-gray-600">XX省XX市XX区XX路XX号</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">联系电话</h3>
                <p className="text-gray-600">+86 XXX XXXX XXXX</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">电子邮箱</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">工作时间</h3>
                <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                <p className="text-gray-600">周六至周日: 休息</p>
              </div>
            </div>

            {/* 地图占位 */}
            <div className="mt-8 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">地图加载中...</p>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">发送消息</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  电话
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主题 *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  消息内容 *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                  消息已发送，我们会尽快与您联系！
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                  发送失败，请稍后重试或直接拨打电话联系我们。
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {isSubmitting ? '发送中...' : '发送消息'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 