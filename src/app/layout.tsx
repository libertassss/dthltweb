import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "电位器专家 - 专业电位器制造商",
  description: "提供高品质、高精度的电位器解决方案，包括旋转电位器、滑动电位器和微调电位器。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">联系我们</h3>
                <p className="text-gray-300">电话：+86 XXX XXXX XXXX</p>
                <p className="text-gray-300">邮箱：contact@example.com</p>
                <p className="text-gray-300">地址：XX省XX市XX区XX路XX号</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">快速链接</h3>
                <ul className="space-y-2">
                  <li><a href="/products" className="text-gray-300 hover:text-white">产品目录</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white">关于我们</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white">联系我们</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">关注我们</h3>
                <p className="text-gray-300">微信公众号：XXXX</p>
                <p className="text-gray-300">企业微信：XXXX</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} 电位器专家. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
