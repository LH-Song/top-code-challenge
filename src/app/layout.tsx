import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import AuthProvider from './AuthProvider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taxify.io',
  description: 'Taxed by the best',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
        </Head>
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </AuthProvider>
  )
}
