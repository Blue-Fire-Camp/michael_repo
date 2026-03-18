import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Senior Software Engineer | Portfolio",
  description: "Portfolio showcasing projects: Weather Forecast, 2nd Brain, Tesla Rental App, and more.",
  keywords: ["Full-Stack Developer", "AI", "SaaS", "React", "Next.js", "Mobile Development", "Weather App", "Study App", "Tesla Rental"],
  authors: [{ name: "Full-Stack Developer" }],
  openGraph: {
    title: "Senior Software Engineer | Portfolio",
    description: "Portfolio showcasing projects: Weather Forecast, 2nd Brain, Tesla Rental App, and more.",
    type: "website",
  icons: {
    icon: "/logo/logo.png",
  },
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M2V1CEY3J9"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M2V1CEY3J9');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
