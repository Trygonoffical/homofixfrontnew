"use client"
import { useState , useCallback , useRef} from 'react';
import { Dialog } from '@headlessui/react';
import {
    XMarkIcon,
  
  } from '@heroicons/react/24/outline'

const RegisterExp = () => {
    const [isShow, setIsShow] = useState(false);
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [mno , setMno] = useState('')
    const [exType , setExType] = useState('')
    const [selectedFile , setSelectedFile] = useState(null)
    const [address , setAddress] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const fileInputRef = useRef(null);
    const handleBlank = useCallback(()=>{
        console.log('blankfun')
        setName('')
        setEmail('')
        setMno('')
        setExType('')
        setAddress('')
        // setSuccessMsg('')
        setSelectedFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''; // Reset file input
        }
    }, [])
    const handleName = useCallback((event) => {
        setName(event.target.value);
      }, []);
    const handleEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, []);
    const handleMno = useCallback((event) => {
        setMno(event.target.value);
    }, []);
    const handleExType = useCallback((event) => {
        setExType(event.target.value);
    }, []);
    const handleResume = useCallback((event) => {
        setSelectedFile(event.target.files[0]);
      }, []);
    const handleAddress = useCallback((event) => {
        setAddress(event.target.value);
    }, []);

    const handleSendformData = useCallback(() => {
        const applyData = new FormData();
        applyData.append('name', name);
        if(email){
          applyData.append('email', email);
        }
        applyData.append('mobile', mno);
        // applyData.append('resume', selectedFile);
        applyData.append('expert_in', exType);
        applyData.append('full_address', address);
        if (selectedFile) {
            // File is not empty
            if (selectedFile.type !== 'application/pdf') {
              // console.log('Resume file must be in PDF format');
              return;
            }
        
            applyData.resume = selectedFile;
          }
        // console.log('formApply', applyData);
        // console.log('name', name);
        // console.log('email', email);
        // console.log('mobile', mno);
        // console.log('resume', selectedFile);
        // console.log('ex-', exType);
        // console.log('add', address);
        
     
    const postjob = async () => {
      const URL = 'https://support.homofixcompany.com/api/JobEnquiry/'
        try {
          const response = await fetch(URL, {
            method: "POST",
            body: applyData,
          });
      
          if (response.ok) {
            const FeedbackData = await response.json();
            console.log(FeedbackData);
            setSuccessMsg('Form Has Been Submitted')
            handleBlank();
          } else {
            console.error("Request failed with status:", response.status);
            console.error("Response:", response);
           

          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      postjob()
      }, [exType, address, mno, name,selectedFile, email])

    const handleClick = useCallback(() => {
        setIsShow(false);
        setSuccessMsg('')

      }, [URL]);
  return (
    <>
    <button onClick={() => setIsShow(true)} className="bg-basecolor hover:bg-lightbasecolor px-3 py-1 md:py-3 md:px-7 text-white my-3 rounded items-center">Register Now</button>
     <Dialog as="div" open={isShow} onClose={() => setIsShow(false)}>
        {/* Dialog content */}
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[1500] w-full overflow-y-auto bg-[#CAC7CE]  sm:ring-1 sm:ring-gray-900/10">
            <div className="grid md:grid-cols-5">
                <div className='bg-[#004AAC] h-screen col-span-3 hidden md:block overflow-hidden'>
                  <img src="expbg.webp" alt="exp" className='mx-auto w-full h-full' />
                </div>
                <div className='bg-gray-200 h-screen  md:col-span-2'>
                    <div className="w-full py-4 flex justify-between px-6 border-gray-300 border-b-2 ">
                        <h5 className='font-semibold text-xl '>Apply Now</h5>
                        <XMarkIcon className="w-7 mr-5 cursor-pointer" onClick={handleClick}  />
                    </div>
                    <div className="mt-5 ">
                        {successMsg && (
                          <p className="text-indigo-400 text-sm py-3 text-center">{successMsg}</p>
                        )}
                        <div className='flex flex-col px-6 pb-3'>
                            <label htmlFor="Name" className='pb-2 font-medium'>Name</label>
                            <input type="text" className='w-full' value={name} onChange={handleName} />
                        </div>
                        <div className='flex flex-col px-6 pb-3'>
                            <label htmlFor="Mno" className='pb-2 font-medium'>Mobile No</label>
                            <input type="number" className='w-full' max='10' min='10' value={mno} onChange={handleMno}  />
                        </div>
                        <div className='flex flex-col px-6 pb-3'>
                            <label htmlFor="Email" className='pb-2 font-medium'>Email <span className='text-sm text-red'>(Optional)</span> </label>
                            <input type="email" className='w-full' value={email} onChange={handleEmail} />
                        </div>
                        <div className='flex flex-col px-6 pb-3'>
                            <label htmlFor="Extype" className='pb-2 font-medium'>Expert Type</label>
                            <input type="text" className='w-full' value={exType} onChange={handleExType} />
                        </div>
                        <div className='flex flex-col px-6 pb-3'>
                            <label htmlFor="addres" className='pb-2 font-medium'>Address</label>
                            <textarea  className='w-full' rows='3' value={address} onChange={handleAddress}></textarea>
                        </div>
                        <div className='flex flex-col px-6 pb-3 '>
                            <label htmlFor="Resume" className='pb-2 font-medium'>Resume <span className='text-sm text-red'>(Optional)</span></label>
                            <input type="file" className='w-full' ref={fileInputRef} onChange={handleResume}  />
                            <button className='bg-basecolor py-2 px-4 mt-5 text-white font-medium' onClick={handleSendformData}> Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default RegisterExp