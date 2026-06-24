import type { Metadata } from 'next'
import { Archivo_Black } from 'next/font/google'
import './globals.css'

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'Goon — Your Space. Your Style. Your Sanctuary.',
  description: 'A safe, affirming grooming space for gay men. Haircuts, grooming, facials, and massage — built for you. Coming soon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.className}`}>
        {children}
      </body>
    </html>
  )
}
