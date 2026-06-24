import type { Metadata } from 'next'
import { Archivo_Black } from 'next/font/google'
import './globals.css'

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'Goon — Your Space. Your Style. Your Community.',
  description: 'A safe, affirming grooming studio built exclusively for gay men. Premium haircuts, shaves, facials, waxing, and massage in West Hollywood, CA.',
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
