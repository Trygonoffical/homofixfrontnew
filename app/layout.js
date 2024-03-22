
import Header from '@/components/Header'
// import Script from 'next/script';
import { AuthProvider } from '@/components/AuthContext'
import { GoogleTagManager , GoogleAnalytics } from '@next/third-parties/google'

import Googletags from '@/components/metrics/Googletags'
import MicrosoftClarity from '@/components/metrics/MicrosoftClarity'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Scripthead from '@/components/Scripthead'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'HomOfix Company',
  description: 'Repair, Cleaning, Grooming, Painting & More Services by Expert Professionals. One stop solution for your household needs. Get 100% safe service by verified partners.',
}


export default function RootLayout({ children }) {
 
  return (
  <>
  <html lang="en">
    {/* <googletag/> */}
     
        <AuthProvider>
            <Googletags />
            <MicrosoftClarity />
            <body className={inter.className}>
              <Header />
              {children}
              <Footer />
            </body>
            <GoogleTagManager gtmId="GTM-MVVP33ZX" />
            {/* <GoogleAnalytics gaId="AW-16494970140" /> */}
            <GoogleAnalytics gaId="G-KDV329WZFW" />
        </AuthProvider>
        <Scripthead />
        
    </html>
  </>
      

  )
}
