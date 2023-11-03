"use client"
import {  useEffect, useState } from "react"
import JobApply from "@/components/JobApply"
const CarrerPage = () => {
  const [jobs, setJobs] = useState([])
  // const [message, setMessage] = useState('')

  useEffect(()=>{
    
    const GetData = async ()=>{
     const URL = `https://support.homofixcompany.com/api/Carrer-Get/`
      try {
        // Make the API call to fetch the user profile data
        const res = await fetch(URL,{cache : 'no-store'})
        // console.log('res', res)

        if (res.ok) {
          const JobData = await res.json();
          setJobs(JobData.reverse())
          // console.log('JobData', JobData)
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
        <h2 className="text-3xl text-center">Current <strong>JOB</strong> Openings</h2>
        <p className="text-center py-4 ">Job Opening On HOMOFIX is happens here. Apply For the job  </p>

        {jobs.map((job) => 
                <div className="p-4 py-8 shadow-2xl mt-5 text-center" key={job.id}>
                  <h2 className="text-xl font-semibold py-3">{job.title}</h2>
                  <div className="p-5 jobdes w-fit mx-auto" dangerouslySetInnerHTML={{ __html: job.description }}></div>
                  <div className="text-center">
                  <JobApply JobID={job.id} />
                  </div>
                </div>
            )}
    
    </section>
    </>
  )
}

export default CarrerPage