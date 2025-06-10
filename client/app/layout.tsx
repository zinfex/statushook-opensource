import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <link rel="icon" href="/favicon.png" />
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}


import './globals.css'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'StatusHook - Monitore suas automações',
    template: '%s - Monitore suas automações',
    absolute: '',
  },
  description: 'Automação de Webhooks com integração ao Discord, Telegram e WhatsApp',
  generator: 'v0.dev',
  keywords: ["automation", "platform", "webhooks", "api", "integrations"],
};
