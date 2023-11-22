// import Link from 'next/link'
"use client"
import Tophead from '@/components/Tophead'
import About from './about'
import { useEffect } from 'react';
import Whychoose from '@/components/Whychoose'
import { initGA, logPageView } from '@/components/Analytics'

const about = () => {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView();
  }, []);
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