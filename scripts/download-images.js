import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建产品图片目录
const imageDir = path.join(process.cwd(), 'public', 'images', 'products');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// 示例图片URL（使用一些免费的电位器图片）
const imageUrls = {
  'potentiometer-1.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/rotary-1.jpg',
  'potentiometer-2.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/rotary-2.jpg',
  'potentiometer-3.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/slide-1.jpg',
  'potentiometer-4.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/trimmer-1.jpg',
  'potentiometer-5.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/rotary-3.jpg',
  'potentiometer-6.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/slide-2.jpg',
  'potentiometer-7.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/trimmer-2.jpg',
  'potentiometer-8.jpg': 'https://raw.githubusercontent.com/example/potentiometer-images/main/rotary-4.jpg',
};

// 下载图片函数
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imageDir, filename);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// 下载所有图片
async function downloadAllImages() {
  try {
    for (const [filename, url] of Object.entries(imageUrls)) {
      await downloadImage(url, filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages(); 