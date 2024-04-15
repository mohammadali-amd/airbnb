import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import Navbar from './components/navbar/Navbar'
import ToasterProvider from './providers/ToasterProvider'
import './globals.css'
import { Nunito, Vazirmatn } from 'next/font/google'
import { getCurrentUser } from './actions/getCurrentUser'

const nunito = Nunito({subsets: ['latin']})
const vazir = Vazirmatn({subsets: ['arabic']})

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone project.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={`${nunito.className} ${vazir.className}`}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
