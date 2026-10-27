import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Roboto_Mono, Source_Code_Pro } from "next/font/google"

export const metadata: Metadata = {
  title: "Ayoub El Bouasri | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer in Rabat, Morocco, building web apps with React, Next.js, Node.js and PostgreSQL.",
}

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  weight: ["400", "500", "700"],
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${sourceCodePro.variable}`}>
      <body>{children}</body>
    </html>
  )
}
