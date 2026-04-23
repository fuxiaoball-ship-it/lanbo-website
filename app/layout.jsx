import "./globals.css";

export const metadata = {
  title: "泸州航发3D智造空间",
  description: "泸州航发3D智造空间 AI+3D打印研学创新平台",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
