'use client'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react'

const ContentSec = () => {
        const [pages , setPages] = useState([]);
        const [isExpanded, setIsExpanded] = useState(false);

        const url = 'https://support.homofixcompany.com/api/Legal-Page-Get/';   
    useEffect(()=>{
                const featch = async() =>{
                    const res = await fetch( url,{cache : 'no-store'});
                    const data = await res.json()
                   const updatedata = data.slice(2);
                   console.log("homepage data - ", updatedata )
                   const filteredData = updatedata.filter(item => 
                    item.subcategory === null && 
                    item.home === true && 
                    item.contact === false
                );
                console.log("homepage data filteredData - ", filteredData )

                    setPages(filteredData)
                }
                featch()
            } , [url])

  return (
    <>
    {pages.length > 0 && (
      <>
      <div className=" md:hidden w-full border-t border-gray-200">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full p-4 flex items-center justify-between text-gray-600 hover:bg-gray-100"
                >
                    <span className="font-medium">More about HomOfix Company</span>
                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
          </div>
      <section className={`${isExpanded ? 'block' : 'hidden'}  container mx-auto mt-10`}>
        <div className='my-5 py-2 w-full p-2'>
            {/* <h2 className='text-2xl font-bold'>{subCat.legal_pages[0].title}</h2> */}
            <div className='productpoints'  dangerouslySetInnerHTML={{ __html: pages[0].content }} style={{ fontSize: '14px' }}></div>
        </div>
      </section>
      <section className={`hidden md:block container mx-auto mt-10`}>
        <div className='my-5 py-2 w-full p-2'>
            {/* <h2 className='text-2xl font-bold'>{subCat.legal_pages[0].title}</h2> */}
            <div className='productpoints'  dangerouslySetInnerHTML={{ __html: pages[0].content }} style={{ fontSize: '14px' }}></div>
        </div>
      </section>
      </>
    )}
    </>
  )
}

export default ContentSec