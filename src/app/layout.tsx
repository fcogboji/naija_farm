// src/app/layout.tsx
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naija Farm Marketplace',
  description: 'Buy fresh farm products directly from Nigerian farmers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar /> {/* ✅ This must be inside <body>, not <html> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
