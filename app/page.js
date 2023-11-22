
import Heroserc from '@/components/Heroserc'
import Partner from '@/components/Partner'
// import Whychoose from '@/components/Whychoose'
import Mostbooked from '@/components/Mostbooked'
import Exclusiveoffer from '@/components/Exclusiveoffer'
import Ourservice from '@/components/Ourservice'
import Issuesec from '@/components/Issuesec'
import Homeservice from '@/components/Homeservice'
import Sidebar from '@/components/Sidebar'



export default function Home() {

  return (
    <main className="p-0 m-0">
      
      <Heroserc url='https://support.homofixcompany.com/api/Category-Get/' />
      {/* <Heroserc url='/api/getcat' /> */}
      <Exclusiveoffer title='Exclusive Offers' url='https://support.homofixcompany.com/api/Offer/'  />
      {/* <Exclusiveoffer title='Exclusive Offers' url='/api/eoffers'  /> */}
      <Ourservice url='https://support.homofixcompany.com/api/Category-Get/' />
      {/* <Ourservice url='/api/cats' /> */}
      < Homeservice url='https://support.homofixcompany.com/api/HomePageService/5/' />
      {/* < Homeservice url='/api/homeser2/?test=5' /> */}

      {/* <Issuesec /> */}
      <Mostbooked url='https://support.homofixcompany.com/api/MostViewed-Get/' />
      {/* <Mostbooked url='/api/mvisit' /> */}

      {/* <Exclusiveoffer title='Appliance Repair & Service' />
      <Exclusiveoffer title='Cleaning' /> */}
      < Homeservice url='https://support.homofixcompany.com/api/HomePageService/6/' />
      {/* < Homeservice url='/api/homeser2/?test=6' /> */}
      {/* < Homeservice url='https://support.homofixcompany.com/api/HomePageService/3/' />
      < Homeservice url='https://support.homofixcompany.com/api/HomePageService/4/' /> */}
      {/* <Whychoose /> */}
      <Partner />
      <Sidebar />
    </main>
  )
}
