"use client"

import Tophead from "@/components/Tophead"
// import  Data from "./data"
import LegalData from "@/components/LegalData"
import Callbox from '@/components/Callbox'

const blogs = () => {
  return (
    <>
        <Tophead slug={'Terms & Conditions'} />
        <LegalData url='https://support.homofixcompany.com/api/Legal-Page-Get/2/' />
        {/* <Callbox /> */}
    </>
  )
}

export default blogs