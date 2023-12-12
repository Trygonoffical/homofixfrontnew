"use client"
import {  useEffect, useState } from "react"

const AddonPage = () => {
  const [addons, setAddons] = useState([])
  // const [message, setMessage] = useState('')

  useEffect(()=>{
    
    const GetData = async ()=>{
    //  const URL = `https://support.homofixcompany.com/api/Addons-GET/`
     const URL = `https://support.homofixcompany.com/api/SpareParts/`
     
      try {
        // Make the API call to fetch the user profile data
        const res = await fetch(URL,{cache : 'no-store'})
        // console.log('res', res)

        if (res.ok) {
          const JobData = await res.json();
          setAddons(JobData);
        //   console.log('JobData', JobData)
          // console.log('jab', jobs)
        } else {
          console.error('Error fetching user profile data');
        //   router.push('/'); // Redirect to homepage if there is an error
        }
      } catch (error) {
        // Handle error case when an exception occurs during the API call
        console.error('Error fetching user profile data:', error);
        // router.push('/'); // Redirect to homepage if there is an error
      }


  }
  GetData();
  }, [URL])

  
  return (
    <>
    <section className="container mx-auto my-10 px-4 md:px-0">
        <h2 className="text-3xl text-center pb-6">Spare  <strong>Parts</strong> Chart </h2>
        {/* <p className="text-center py-4 ">   </p> */}
        <div class="relative overflow-x-auto max-w-lg mx-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                {addons.length > 0 ? (
                    addons.map((addon, idx) => (
                    <tr
                        key={idx}
                        className="border-b border-gray-200 dark:border-gray-700"
                    >
                        <th scope="row" className="px-6 py-4">
                        {addon.spare_part}
                        </th>
                        <td className="px-6 py-4">{addon.price}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="2" className="px-6 py-4 text-center">
                        No addons found.
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

    </section>
    </>
  )
}

export default AddonPage