import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zoho Workplace - Giải Pháp Email & Văn Phòng Doanh Nghiệp | Connecta',
  description: 'Tiết kiệm 50% chi phí email và văn phòng doanh nghiệp. Zoho Workplace được triển khai bởi Connecta - đối tác chính thức tại Việt Nam.',
  keywords: 'Zoho Workplace, Connecta, Email doanh nghiệp, Microsoft 365, Google Workspace',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#374B6B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="scroll-smooth bg-background">
      <body className="antialiased font-sans text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
