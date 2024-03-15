
import Header from '@/components/Header'
import { AuthProvider } from '@/components/AuthContext'
import { GoogleTagManager , GoogleAnalytics } from '@next/third-parties/google'
// import googletag from './googletag'
import Head from 'next/head'
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
    {/* <googletag/> */}
     <Head >
     <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16494970140" />
        
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'AW-16494970140');`}} />
          
        
        {/* <script dangerouslySetInnerHTML={{__html:`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window, document, "clarity", "script", "lgxt601tn5");`}} /> */}
     </Head>
        <AuthProvider>
          
            <body className={inter.className}>
              <Header />
              {children}
              <Footer />
            </body>
            <GoogleTagManager gtmId="GTM-MVVP33ZX" />
            <GoogleTagManager gtmId="AW-16494970140" />
            <GoogleAnalytics gtmId="G-KDV329WZFW" />
        </AuthProvider>
        <Scripthead />
        
    </html>
  </>
      

  )
}
