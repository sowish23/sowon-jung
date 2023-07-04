import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProviderC from './themeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Portfolio',
  description: 'Sowon Jung Frontend Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}><ThemeProviderC>{children}</ThemeProviderC></body>
      </html>
  )
}
