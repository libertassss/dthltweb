import nodemailer from 'nodemailer';

// 创建邮件传输器
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// 发送订单邮件
export async function sendOrderEmail(data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  productId: string;
  quantity: number;
  message?: string;
}) {
  const { name, email, company, phone, productId, quantity, message } = data;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.ORDER_EMAIL_RECIPIENT,
    subject: `新订单 - ${name}`,
    html: `
      <h2>新订单详情</h2>
      <p><strong>客户姓名：</strong>${name}</p>
      <p><strong>邮箱：</strong>${email}</p>
      <p><strong>公司：</strong>${company}</p>
      <p><strong>电话：</strong>${phone}</p>
      <p><strong>产品ID：</strong>${productId}</p>
      <p><strong>订购数量：</strong>${quantity}</p>
      ${message ? `<p><strong>备注信息：</strong>${message}</p>` : ''}
    `,
  };

  await transporter.sendMail(mailOptions);
}

// 发送联系邮件
export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const { name, email, phone, subject, message } = data;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL_RECIPIENT,
    subject: `新咨询 - ${subject}`,
    html: `
      <h2>新咨询详情</h2>
      <p><strong>姓名：</strong>${name}</p>
      <p><strong>邮箱：</strong>${email}</p>
      <p><strong>电话：</strong>${phone}</p>
      <p><strong>主题：</strong>${subject}</p>
      <p><strong>留言内容：</strong>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
} 