import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito, Vazirmatn } from 'next/font/google'

const nunito = Nunito({subsets: ['latin']})
const vazir = Vazirmatn({subsets: ['arabic']})

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone project.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${vazir.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
