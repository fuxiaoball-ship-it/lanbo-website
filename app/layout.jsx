import "./globals.css";

export const metadata = {
  title: "蓝博航发研学基地",
  description: "蓝博航发研学基地 3D打印创客空间官方网站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
