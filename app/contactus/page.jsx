"use client"
import Tophead from '@/components/Tophead'
import Gmap from './gmap'
import Callbox from '@/components/Callbox'
import { initGA, logPageView } from '@/components/Analytics'
import { useEffect } from 'react';


const page = () => {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView();
  }, []);
  return (
    <>
    <Tophead slug={'Contact Us'} />
    <Gmap />
    {/* <Callbox /> */}
    </>
    
  )
}

export default page