// import Link from 'next/link'
import Tophead from '@/components/Tophead'
import About from './about'
// import Callbox from '@/components/Callbox'
import Whychoose from '@/components/Whychoose'
const about = () => {
  return (
    <>
    <Tophead slug={'About'} />
    <About />
    <Whychoose />
    {/* <Callbox /> */}
    </>
    
  )
}

export default about