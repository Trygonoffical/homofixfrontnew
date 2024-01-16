
import Header from '@/components/Header'
import { AuthProvider } from '@/components/AuthContext'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Scripthead from '@/components/Scripthead'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Homofix Company',
  description: 'Repair, Cleaning, Grooming, Painting & More Services by Expert Professionals. One stop solution for your household needs. Get 100% safe service by verified partners.',
}


export default function RootLayout({ children }) {
 
  return (
  <>
  <html lang="en">
        <AuthProvider>
            <body className={inter.className}>
              <Header />
              {children}
              <Footer />
            </body>
        </AuthProvider>
        <Scripthead />
        
    </html>
  </>
      

  )
}
