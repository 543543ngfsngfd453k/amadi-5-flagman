import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Rekomendacje z Piekła - Ekskluzywne bonusy i dobra zabawa!",
  description:
    "Odkryj najlepsze oferty od sprawdzonych kasyn online. Zdobądź ekskluzywne oferty i darmowe spiny z piekielnie dobrymi bonusami.",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "LuKi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} ${montserrat.variable} min-h-screen bg-black text-white`}>{children}</body>
    </html>
  )
}
