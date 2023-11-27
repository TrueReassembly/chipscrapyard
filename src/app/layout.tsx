import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Assembly's Scrapyard",
  description: "The stuff I've made to learn Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Assembly&apos;s Scrapyard</title>
        <meta content="Assembly&apos;s Scrapyard" property="og:title" />
        <meta content="The useless things I&apos;ve made to learn Next.js" property="og:description" />
        <meta content="https://scrapyard.reassembly.dev" property="og:url" />
        <meta content="https://pbs.twimg.com/profile_images/1726294196573642752/Gb-VwBsQ_400x400.jpg" property="og:image" />
        <meta content="#55199E" data-react-helmet="true" name="theme-color" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
