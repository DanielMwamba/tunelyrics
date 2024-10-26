import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "TuneLyrics - Découvrez la Poésie dans Vos Chansons Préférées",
  description: "Plongez dans le monde des paroles de musique avec TuneLyrics. Découvrez, explorez et connectez-vous avec les mots qui vous touchent.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans antialiased bg-gradient-to-br from-[#d4792a] via-[#541563] to-[#1472a6] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}