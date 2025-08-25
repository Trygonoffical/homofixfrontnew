"use client";

import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

const Footer = () => {
  


    const locations = ['Delhi' , 'Noida' , 'Gurgaon' , 'Ghaziabad' ,'Kanpur' ];
        const ComingSoons = ['Mumbai', 'Pune', 'Hyderabad', 'Bangalore', 'Kolkata', 'Jaipur', 'Chandigarh', 'Lucknow', 'Gorakhpur', 'Patna' , 'Chapra', 'Siwan'];
        const [pages , setPages] = useState([]);
        const url = 'https://support.homofixcompany.com/api/Legal-Page-Get/';
        const [isExpanded, setIsExpanded] = useState(false);
        const router = useRouter();
        useEffect(()=>{
          
          console.log('router of the footer - ', router)
          console.log('router of the window.location.pathname - ', window.location.pathname)
            const featch = async() =>{
                const res = await fetch( url,{cache : 'no-store'});
                const data = await res.json()
               const updatedata = data.slice(2);
               console.log("res updatedata - ", updatedata )
               const filteredData = updatedata.filter(item => 
                item.subcategory === null && 
                item.home === false && 
                item.contact === false
            );
            console.log("filteredData - ", filteredData )
                setPages(filteredData)
            }
            featch()
        } , [url])
  return (
    <>
    <footer className="bg-gray-100 md:py-12 ">
        {/* <div className=" md:hidden w-full border-t border-gray-200">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full p-4 flex items-center justify-between text-gray-600 hover:bg-gray-100"
                >
                    <span className="font-medium">More about HomOfix Company</span>
                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
            </div> */}
        {/* className="hidden md:block container mx-auto px-4" */}
      <div  className={`hidden md:block container mx-auto px-4 max-w-7xl`}>
        <div className='px-0 mb-5'>
            <img width={150} style={{ marginLeft: '-14px' }} src="/logodark.png" alt="" /> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Keep in Touch */}
          <div>
            {/* <img width={150} className="ml-0" src="/logodark.png" alt="" /> */}
            <h3 className="text-gray-800 font-semibold mb-4">KEEP IN TOUCH</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/Homerepairingandservices" target="_blank" rel="noopener noreferrer">
                <img src="/assets/imgs/fb.png" alt="Facebook" width={28} height={28} />
              </a>
              <a href="https://instagram.com/homofixcompany" target="_blank" rel="noopener noreferrer">
                <img src="/assets/imgs/insta.png" alt="Instagram" width={28} height={28} />
              </a>
              <a href="https://www.linkedin.com/company/homofix-in/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/imgs/linkdin.png" alt="LinkedIn" width={28} height={28} />
              </a>
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/imgs/youtube.png" alt="YouTube" width={28} height={28} />
              </a> */}
            </div>
            <div className="mb-6">
              <h4 className="text-gray-800 font-semibold mb-2">DOWNLOAD OUR APP</h4>
              <a href="https://play.google.com/store/apps/details?id=com.homofix.homo_fix" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <img 
                  src="/assets/imgs/googlepaystore.webp" 
                  alt="Get it on Google Play" 
                  className="max-w-[140px]"
                />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">COMPANY</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
              <Link href="/contactus" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
              <Link href="/career" className="text-gray-600 hover:text-blue-600">Career</Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
              {/* <Link href="/partner" className="text-gray-600 hover:text-blue-600">Register as a Professional</Link> */}
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">FOR CUSTOMERS</h3>
            <div className="flex flex-col space-y-2">
              {/* <Link href="/services" className="text-gray-600 hover:text-blue-600">Services Near You</Link> */}
              <Link href="/addons" className="text-gray-600 hover:text-blue-600">Addon Services</Link>
              <Link href="/blogs" className="text-gray-600 hover:text-blue-600">Blogs</Link>
              {/* <Link href="/locations" className="text-gray-600 hover:text-blue-600">Serving Locations</Link> */}
              {/* {pages.length>0 && pages.map((custpage , idx)=>  
                <Link key={idx} href={`/page/${slugify(custpage.title)}`} className="text-gray-600 hover:text-blue-600">
                    {custpage.title}
                </Link>
                )} */}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} HomOfix Technologies Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>

      <div  className={`block md:hidden container mx-auto px-4 max-w-7xl`}>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex justify-between pt-5">
            {/* Keep in Touch */}
            <div>
              {/* <img width={150} className="ml-0" src="/logodark.png" alt="" /> */}
              <h3 className="text-gray-800 text-sm font-semibold mb-4">KEEP IN TOUCH</h3>
              <div className="flex gap-4 mb-6">
                <a href="https://www.facebook.com/Homerepairingandservices" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/imgs/fb.png" alt="Facebook" width={28} height={28} />
                </a>
                <a href="https://instagram.com/homofixcompany" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/imgs/insta.png" alt="Instagram" width={28} height={28} />
                </a>
                <a href="https://www.linkedin.com/company/homofix-in/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/imgs/linkdin.png" alt="LinkedIn" width={28} height={28} />
                </a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/imgs/youtube.png" alt="YouTube" width={28} height={28} />
                </a> */}
              </div>
              <div className="mb-6">
                <h4 className="text-gray-800 text-sm font-semibold mb-2">DOWNLOAD OUR APP</h4>
                <a href="https://play.google.com/store/apps/details?id=com.homofix.homo_fix" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <img 
                    src="/assets/imgs/googlepaystore.webp" 
                    alt="Get it on Google Play" 
                    className="max-w-[140px]"
                  />
                </a>
              </div>
            </div>
            <div className='px-0 mb-5'>
              <img width={150} style={{ marginLeft: '-14px' }} src="/logodark.png" alt="" /> 
            </div>

          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-gray-800 text-sm font-semibold mb-4">COMPANY</h3>
            <div className="flex flex-wrap  ">
              <Link href="/about" className="text-gray-600 text-xs hover:text-blue-600 px-2">About Us</Link> <span className="text-gray-600 text-xs">|</span> 
              <Link href="/contactus" className="text-gray-600 text-xs hover:text-blue-600 px-2">Contact Us</Link> <span className="text-gray-600 text-xs ">|</span>
              <Link href="/career" className="text-gray-600 text-xs hover:text-blue-600 px-2">Career</Link> <span className="text-gray-600 text-xs ">|</span>
              <Link href="/terms" className="text-gray-600 text-xs hover:text-blue-600 px-2">Terms & Conditions</Link> <span className="text-gray-600 text-xs ">|</span>
              <Link href="/privacy" className="text-gray-600 text-xs hover:text-blue-600 px-2">Privacy Policy</Link> <span className="text-gray-600 text-xs ">|</span>
              {/* <Link href="/partner" className="text-gray-600 text-xs hover:text-blue-600 px-2">Register as a Professional</Link>  */}
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-gray-800 text-sm font-semibold mb-4">FOR CUSTOMERS</h3>
            <div className="flex flex-wrap">
              {/* <Link href="/services" className="text-gray-600 hover:text-blue-600">Services Near You</Link> */}
              <Link href="/addons" className="text-gray-600 hover:text-blue-600 text-xs px-2">Addon Services</Link> <span className="text-gray-600 text-xs ">|</span> 
              <Link href="/blogs" className="text-gray-600 hover:text-blue-600 text-xs px-2">Blogs</Link>
              {/* <Link href="/locations" className="text-gray-600 hover:text-blue-600">Serving Locations</Link> */} 
              {/* <span className="text-gray-600 text-xs ">|</span> */}
              {/* {pages.length>0 && pages.map((custpage , idx)=>   
              <>
              <Link key={idx} href={`/page/${slugify(custpage.title)}`} className="text-gray-600 hover:text-blue-600 text-xs ">
                    {custpage.title} 
                </Link> 
                {idx !== pages.length - 1 && <span className="text-gray-600 text-xs px-2">|</span>}
              </>
                )}  */}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 py-8 border-t border-gray-200">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} HomOfix Technologies Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>

      

    </footer>
    <div className="  px-4 w-full  py-8 border-t bg-gray-900 text-white">
    <div className='container mx-auto px-4'>
    <h2 className=' md:text-2xl mb-3 text-left flex flex-wrap font-semibold'>Locations</h2>

    {pages.length>0 && pages.map((custpage , idx)=>  
            <>
            <Link key={idx} href={`/page/${slugify(custpage.title)}`} className="text-gray-50 hover:text-gray-200 text-xs ">
                  {custpage.title} 
              </Link> 
              {idx !== pages.length - 1 && <span className="text-gray-50 text-xs px-2">|</span>}
            </>
              )} 
    </div>
    
    </div>
    </>
  );
};

export default Footer;


const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/[^\w-]+/g, '') // Remove non-word characters except dashes
      .replace(/--+/g, '-') // Replace multiple dashes with a single dash
      .replace(/^-+|-+$/g, ''); // Trim dashes from the beginning and end
  };