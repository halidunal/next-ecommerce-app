import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Category from './components/home/Category'
import CartProvider from '@/hooks/provider/CartProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Ecommerce',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position='top-right' reverseOrder={false}/>
        <div className='flex flex-col min-h-screen w-[1024px] lg:w-full'>
          <CartProvider>
            <Navbar/>
            <Category/>
            <div className='flex flex-col items-center bg-gray-100'>
              <main className='flex-grow flex justify-center w-[1024px] bg-gray-100' style={{minHeight: "calc(100vh - 94px)"}}>{children}</main>
              <Footer/>
            </div >
          </CartProvider>
        </div>
      </body>
    </html>
  )
}
