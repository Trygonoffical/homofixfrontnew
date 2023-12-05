'use client'
import Header from '@/components/Header'
import { AuthProvider } from '@/components/AuthContext'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
// import { Metadata } from 'next'
// import { hydrate } from 'react-dom';
import { metadata } from '@/components/metadata'
import Head from 'next/head';
import Script from 'next/script'
import { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Homofix Company',
//   description: 'Repair, Cleaning, Grooming, Painting & More Services by Expert Professionals. One stop solution for your household needs. Get 100% safe service by verified partners.',
// }


export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
  <>
  
  <html lang="en">
        <Head>
        <title>Homofix Company</title>
        <meta name="description" content={metadata.description} />
        
        </Head>
        <AuthProvider>
            <body className={inter.className}>
              <Header />
              {children}
              <Footer />
            </body>
        </AuthProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-0KJ071CS4W" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-0KJ071CS4W');
          `}
        </Script>
    </html>
  </>
      

  )
}
