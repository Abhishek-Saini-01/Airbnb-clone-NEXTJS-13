import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Model from './components/model/Model'
import RegisterModel from './components/model/RegisterModel'
import ToasterProvider from './providers/ToasterProvider'
import LoginModel from './components/model/LoginModel'
import getCurrentUser from './actions/getCurrentUser'
import RentModel from './components/model/RentModel'
import SearchModel from './components/model/SearchModel'

export const metadata = {
  title: 'Airbnb-clone',
  description: 'Airbnb-clone website',
}

const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModel />
          <RentModel/>
          <LoginModel />
          <RegisterModel />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
