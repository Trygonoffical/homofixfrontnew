'use client'
import Tophead from "@/components/Tophead"
import  Data from "./data"
import Callbox from '@/components/Callbox'

const blogs = () => {
  return (
    <>
        <Tophead slug={'Blogs'} />
        <Data />
        {/* <Callbox /> */}
    </>
  )
}

export default blogs