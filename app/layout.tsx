import type { Metadata } from 'next'
import { Cormorant_Garamond, Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Providers from './providers' // 추가

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const notoSansKr = Noto_Sans_KR({
  variable: '--font-noto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Mingles — Fine Dining Reservation',
  description: '밍글스 예약',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f0ebe3]">
        <Providers>
          {' '}
          {/* 추가 */}
          <Navbar />
          {children}
        </Providers>{' '}
        {/* 추가 */}
      </body>
    </html>
  )
}
