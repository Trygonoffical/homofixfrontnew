
import Heroserc from '@/components/Heroserc'
import Partner from '@/components/Partner'
// import Whychoose from '@/components/Whychoose'
import Mostbooked from '@/components/Mostbooked'
import Exclusiveoffer from '@/components/Exclusiveoffer'
import Ourservice from '@/components/Ourservice'
import Issuesec from '@/components/Issuesec'
import Homeservice from '@/components/Homeservice'
import Sidebar from '@/components/Sidebar'
import ContentSec from '@/components/ContentSec'


export default function Home() {

  return (
    <main className="p-0 m-0">
      
      <Heroserc url='https://support.homofixcompany.com/api/Category-Get/' />
      <Exclusiveoffer title='Exclusive Offers' url='https://support.homofixcompany.com/api/Offer/'  />
      <Ourservice url='https://support.homofixcompany.com/api/Category-Get/' />
      < Homeservice url='https://support.homofixcompany.com/api/HomePageService/5/' />
      <Mostbooked url='https://support.homofixcompany.com/api/MostViewed-Get/' />
      < Homeservice url='https://support.homofixcompany.com/api/HomePageService/6/' />
      < Homeservice url='https://support.homofixcompany.com/api/HomePageService/8/' icenter="justify-center" />

      < Homeservice url='https://support.homofixcompany.com/api/HomePageService/7/' bgImg="w-full bg-[url('/ad2bg.webp')]" icenter="justify-center" />
      <Partner />
      <ContentSec />
      <Sidebar />

    </main>
  )
}
