import './globals.css'

export const metadata = {
  title: '泸州航发3D智造空间',
  description: '面向未来智能制造的人才启蒙与实践平台',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}