import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"

// Custom fonts
const orbitron = localFont({
  src: [
    {
      path: "../public/fonts/Orbitron-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Orbitron-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-orbitron",
})

const rajdhani = localFont({
  src: [
    {
      path: "../public/fonts/Rajdhani-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Rajdhani-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Rajdhani-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rajdhani",
})

const exo2 = localFont({
  src: [
    {
      path: "../public/fonts/Exo2-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Exo2-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Exo2-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-exo2",
})

export const metadata = {
  title: "NUTEC 2025 | KPK's Biggest Olympiad",
  description:
    "Join KPK's Biggest Tech Olympiad - NUTEC 2025. May 2-4, 2025. Featuring coding competitions, tech showcases, and more.",
    generator: 'FOSLX'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#010920] font-sans antialiased",
          orbitron.variable,
          rajdhani.variable,
          exo2.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
