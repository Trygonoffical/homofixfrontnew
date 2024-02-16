"use client"
import { Tab, Dialog, Transition } from '@headlessui/react'
import Payment from '@/components/Payment';
import { useEffect, useState, Fragment, useCallback  } from 'react';
// import { useClient } from '@chakra-ui/react';
import Loading from "./Loading";
import Feedback from './Feedback';

const BookingTab = ({bookings , userProfileInfo}) => {
    const [isClient, setIsClient] = useState(false)
    const [name , setName] = useState('')
    const [add , setAdd] = useState('')
    const [area , setArea] = useState('')
    const [city , setCity] = useState('')
    const [state , setState] = useState('')
    const [zip , setZip] = useState('')
    const [mno , setMno] = useState(userProfileInfo.mobile)
    let [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const [fetchedBookings, setFetchedBookings] = useState([]);
    
      const closeModal = useCallback(() => {
        setIsOpen(false);
      }, []);
    
      const openModal = useCallback(() => {
        setIsOpen(true);
      }, []);
    
      
      const handleNameChange = useCallback((event) => {
        setName(event.target.value);
      }, []);
    
      const handleAddChange = useCallback((event) => {
        setAdd(event.target.value);
      }, []);
    
      const handleAreaChange = useCallback((event) => {
        setArea(event.target.value);
      }, []);
    
      const handleCityChange = useCallback((event) => {
        setCity(event.target.value);
      }, []);
    
      const handleStateChange = useCallback((event) => {
        setState(event.target.value);
      }, []);
    
      const handleZipChange = useCallback((event) => {
        setZip(event.target.value);
      }, []);
      const handleMnoChange = useCallback(() => {
        // //console.log('zip - ', zip) 
      }, []);
     
      const handleUpdateProfile = () =>{
        let pData = {
            'first_name': name,
            'address': add,
            'area': area,
            'city': city,
            'state': state,
            'zipcode': zip,
        }
        const URL = 'https://support.homofixcompany.com/api/customer/profile/update/'
        const authToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;  
        const postProfile = async () => {
            try {
              const response = await fetch(URL, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify(pData),
              });
          
              if (response.ok) {
                const Profiledata = await response.json();
                // console.log(Profiledata);
                openModal()
              } else {
                console.error("Request failed with status:", response.status);
              }
            } catch (error) {
              console.error("An error occurred:", error);
            }
          }
          postProfile()
    }

  useEffect(() => {
    setLoading(true);
    setIsClient(true);
    if (userProfileInfo) {
        setAdd(userProfileInfo.address || '');
        setArea(userProfileInfo.area || '');
        setCity(userProfileInfo.city || '');
        setState(userProfileInfo.state || '');
        setZip(userProfileInfo.zipcode || '');
        setName(userProfileInfo.first_name || '');
        setMno(userProfileInfo.mobile || '');
    } 
    // console.log(bookings);
    // console.log('fetchedBookings',fetchedBookings);
  // setLoading2(false);
  // Fetch bookings data
  const fetchBookings = async () => {
    try {
      // Your logic to fetch bookings data
      // For example purposes, let's simulate a delay with setTimeout
      setTimeout(() => {
        // Update bookings state with fetched data
        // Set loading to false
        // console.log('in fatuch booking value ', bookings)
        setFetchedBookings(bookings);
        setLoading(false);
      }, 3000); // Simulating a delay of 3 seconds
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setLoading(false);
    }
  };

  fetchBookings();
  }, [userProfileInfo]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  if (!isClient) {
    return null; // Return null while rendering on the server-side
  }

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true, // Use 12-hour clock
      // timeZoneName: 'short',
    };
  
    return new Date(dateTimeString).toLocaleString('en-US', options);
  }

  const cancelbooking = (bkID)=>{
    let pData = {
      "booking_id": bkID,
  }
  const URL = 'https://support.homofixcompany.com/api/Booking/Status/Update/';
  const postaction = async () => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pData),
      });
  
      if (response.ok) {
        window.location.reload();
        // console.log(response);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  postaction();
  }


  const mergedBookings = [...bookings, ...fetchedBookings];
  return (
    <>
    <Tab.Group>
          <Tab.List className="flex space-x-1 w-fit mx-auto  rounded-xl bg-[#2c319b92] p-1">
            <Tab 
            className={({ selected }) =>
              classNames(
                'rounded-lg py-3 px-6 text-sm font-medium leading-5 text-basecolor',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
            }
            >Bookings</Tab>
            <Tab 
                className={({ selected }) =>
                classNames(
                'rounded-lg py-3 px-6 text-sm font-medium leading-5 text-basecolor',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                    ? 'bg-white shadow'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                )}
                >Profile</Tab>
          </Tab.List>
        
        <Tab.Panels className='mt-4 min-h-[400px] md:p-5' >
         
         {/* First Panel  */}
          <Tab.Panel className='mt-4 min-h-[400px] p-5'>
             {/* {bookings != '' ? ( */}
             {loading ? (<Loading />) : mergedBookings && mergedBookings.length > 0 ? (
            //  bookings.length > 0 && (
              <ul className='list-none' style={{paddingLeft: 'initial'}}>
                 
              {mergedBookings.map((booking, idx)=>(
               <li
               key={idx}
               className="relative rounded-md py-3 mb-4 border p-3 md:p-3 "
             >
              {/* hover:bg-gray-100 */}
              <div className=" flex justify-between">
                <h3 className="text-sm font-medium leading-5">
                  Booking ID: {booking.id} 
                </h3> 
                {booking.cash_on_service == false && ( <>
                {booking.pay_amt > 0 &&(
                  <Payment amount={booking.pay_amt} name={userProfileInfo.first_name}   mobile={userProfileInfo.mobile}  bookingID={booking.id} />
                )}
                </>
                
                )}
                {booking.status == "Completed" && (
                  <a href={`https://support.homofixcompany.com/api/invoice/download/${booking.id}/`} target='_blank' className='text-white text-sm rounded bg-basecolor px-2 py-1 my-2'>Invoice</a>
                )}
               
              </div>
              <div className='flex justify-between'>
                <h5 className="text-sm font-medium leading-5">Order Id: {booking.order_id}</h5>
                <h5> 
                {booking.status == "Completed" && (
                  <span className='rounded-full border border-Green-100 bg-Green-500 text-white px-2 py-0.5 text-sm '>{booking.status}</span>
                )}
                {booking.status == "Cancelled"  && (
                  <span className="rounded-full border border-Red-100 bg-Red-500 text-white px-2 py-0.5 text-sm ">{booking.status}</span>
                )}
                {booking.status == "cancelled"  && (
                  <span className='rounded-full border border-Red-100 bg-Red-500 text-white px-2 py-0.5 text-sm '>{booking.status}</span>
                )}
                {booking.status == "New"  && (
                  <>
                  <span className='rounded-full border border-Blue-100 bg-Blue-500 text-white px-2 py-0.5 text-sm '>Booked</span>

                  {/* <button className='text-white text-sm rounded bg-red px-4 py-2 ml-2' onClick= {() => cancelbooking(booking.id)}>Cancel Now</button> */}
                  </>
                  
                )}
                {booking.status == "Assign"  && (
                  <span className='rounded-full border border-Lime-100 bg-Lime-500 text-white px-2 py-0.5 text-sm '>Assigned</span>
                )}
                {booking.status == "Proceed"  && (
                  <span className='rounded-full border border-Lime-100 bg-Lime-500 text-white px-2 py-0.5 text-sm '>Assigned</span>
                )}
                  
                </h5>
              </div>
               
               <h5>Amount: ₹{booking.final_amount} {booking.online == true && (<>|  <span className='rounded-full border border-Lime-100 bg-Lime-500 text-white px-2 py-0.5 text-sm '>Paid</span></>) }</h5>
               <h5>Booking Timging: {formatDateTime(booking.booking_date)}</h5>
               <h5>Booking Address: {booking.booking_address} {booking.area} {booking.city} {booking.state} - {booking.zipcode}</h5>
               <h5>Booking Details: </h5>
                {booking.booking_product.map((pros , idx)=>(
                    // w-fit mx-auto
                      <ul key={idx} className='bg-gray-300 px-2 py-1 my-2 text-sm'>
                        <li className='flex justify-between'> <span className='p-2'><strong>Product Name </strong>: {pros.product.name} </span> <span className='p-2'>Price: ₹ {pros.selling_price}</span> <span className='p-2'>Qnt: {pros.quantity}</span></li>
                        {pros.addon_set.map((addons, idx)=>(
                            <ul key={idx}>
                                <li className='flex justify-between '> <span className='p-2'><strong>Spare Parts</strong>:  {addons.spare_part_name}</span>   <span className='p-2'>Price: ₹ {addons.spare_part_price}</span> <span className='p-2'>Qnt :  {addons.quantity}</span> </li>
                            </ul>
                            
                        ))}
                         
                      </ul>
                    ))}
                <div><span className='text-basecolor'>For Support Call : <a href="tel:918130105760">+91-813-0105-760</a></span></div>
                {/* <div className='flex justify-center py-2'>
                  {booking.status == "New"  && (
                  <>
                  <button className='text-white text-sm rounded bg-red px-2 py-1 ' onClick= {() => cancelbooking(booking.id)}>Cancel Now</button>
                  </>
                )}
                </div> */}
                
                <div className="rating">
                    {booking.status == "Completed" && (
                       < Feedback bookingID={booking.id} />
                    )}
                        
                </div>


                {/* Status booking details  */}
                <div className='bg-gray-100 p-2 hover:bg-gray-200 mb-2'>
                  <p className='text-sm py-2 text-gray-500 flex justify-between'> <span>Booking Status </span>
                    <span>{booking.status == "Completed" && (
                      <span className='rounded-full border border-Green-100 bg-Green-500 text-white px-2 py-0.5 text-sm '>{booking.status}</span>
                    )}
                    {booking.status == "Cancelled"  && (
                      <span className="rounded-full border border-Red-100 bg-Red-500 text-white px-2 py-0.5 text-sm ">{booking.status}</span>
                    )}
                    {booking.status == "cancelled"  && (
                      <span className='rounded-full border border-Red-100 bg-Red-500 text-white px-2 py-0.5 text-sm '>{booking.status}</span>
                    )}
                    {booking.status == "New"  && (
                      <>
                      <span className='rounded-full border border-Blue-100 bg-Blue-500 text-white px-2 py-0.5 text-sm '>Booked</span>

                      {/* <button className='text-white text-sm rounded bg-red px-4 py-2 ml-2' onClick= {() => cancelbooking(booking.id)}>Cancel Now</button> */}
                      </>
                      
                    )}
                    {booking.status == "Assign"  && (
                      <span className='rounded-full border border-Lime-100 bg-Lime-500 text-white px-2 py-0.5 text-sm '>Assigned</span>
                    )}
                    {booking.status == "Proceed"  && (
                      <span className='rounded-full border border-Lime-100 bg-Lime-500 text-white px-2 py-0.5 text-sm '>Assigned</span>
                    )}</span>
                    {booking.cash_on_service == false && ( <>
                        {booking.pay_amt > 0 &&(
                          <Payment amount={booking.pay_amt} name={userProfileInfo.first_name}   mobile={userProfileInfo.mobile}  bookingID={booking.id} />
                        )}</>)} 
                    </p>
                  
                  <hr />
                  <div className='pt-2'>
                    <ul  style={{paddingLeft: 'initial'}}>
                        <li className='flex justify-between '> <span className='p-2 text-sm'>Booking ID </span><span className='p-2 text-sm'>{booking.id}</span></li>
                        <li className='flex justify-between '> <span className='p-2 text-sm'>Tax</span><span className='p-2 text-sm'>₹ {booking.tax_amount} </span></li>
                        <hr />
                        <li className='flex justify-between '> <span className='p-2 text-sm'>Amount</span><span className='p-2 text-sm'>₹ {booking.final_amount} </span></li>
                    </ul>
                  </div>
                </div>
                {/* bookign details  */}
                <div className='bg-gray-100 p-2 hover:bg-gray-200 mb-2'>
                  <p className='text-sm py-2 text-gray-500'>Booking Details</p>
                  <hr />
                  <div className='flex pt-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    <div>
                      <h5 className='text-sm pl-2'>
                      {booking.booking_customer} <br />
                      {booking.booking_address} {booking.area} {booking.city} {booking.state} - {booking.zipcode}
                      </h5>
                    </div>
                  </div>
                </div>
                {/* order details  */}
                <div className='bg-gray-100 p-2 hover:bg-gray-200 mb-2'>
                  <p className='text-sm py-2 text-gray-400'>Order Details</p>
                  <hr />

                  {booking.booking_product.map((pros , idx)=>(
                    // w-fit mx-auto
                      <ul key={idx} className='px-2 py-1 my-2 text-sm'>
                        <li className='flex justify-between'> <span className='p-2'><strong>{pros.product.name}</strong> <span className='rounded-full border border-Lime-100 bg-Lime-500 text-white px-2 py-0.5 text-xs '>x {pros.quantity} </span> </span> <span className='p-2'> ₹ {pros.selling_price}</span></li>
                        {pros.addon_set.map((addons, idx)=>(
                            <ul key={idx} style={{paddingLeft: 'initial'}}>
                                <li className='flex justify-between '> <span className='p-2'><strong>{addons.spare_part_name}</strong><span className='rounded-full border border-Lime-100 bg-Lime-500 text-white px-2 py-0.5 text-xs '>x {addons.quantity} Spare Parts </span> </span><span className='p-2'>₹ {addons.spare_part_price}</span></li>
                            </ul>
                            
                        ))}
                         
                      </ul>
                    ))}
                    <hr />

                  <div className=' pt-2'>
                  <ul  style={{paddingLeft: 'initial'}}>
                      <li className='flex justify-between '> <span className='p-2 text-sm'>Price</span><span className='p-2 text-sm'>₹ {booking.total_amount} </span></li>
                      <li className='flex justify-between '> <span className='p-2 text-sm'>Tax</span><span className='p-2 text-sm'>₹ {booking.tax_amount} </span></li>
                      <hr />
                      <li className='flex justify-between '> <span className='p-2 text-sm'>Amount</span><span className='p-2 text-sm'>₹ {booking.final_amount} </span></li>
                      
                      
                  </ul>
                  </div>
                </div>
                
                
             </li>
             
              ))}
            </ul>
            
              )
              : (
                <p>No bookings found</p>
              )}
          </Tab.Panel>
          {/* third panel */}
          <Tab.Panel className='mt-4 min-h-[400px] max-w-[800px] border mx-auto p-5' >
            <div className='flex justify-between mb-3'>
                <div>
                    <h2 className='font-bold text-lg '>Profile Settings</h2>
                    <p className='text-sm text-gray-400'>View and update your details</p>
                </div>
            </div>
            
            <hr />
            <div className="formareaa pt-9">
                <div className="md:flex justify-between  pb-5">
                    <div className="lable">
                        
                        <h4>Name</h4>
                        <p className='text-sm text-gray-400'>Appears on reciepts, invoices, and more </p>
                    </div>
                    <div className="lable py-3">
                        <input type="text" className='w-screen-full border-gray-600 text-gray-800 w-full'  value={name} onChange={handleNameChange} />
                    </div>
                </div>
                <div className="md:flex justify-between pb-5 ">
                    <div className="lable">
                       
                        <h4>Mobile Number</h4>
                        <p className='text-sm text-gray-400'>Register Mobile no, Appears on reciepts, invoices, and more  </p>
                    </div>
                    <div className="lable py-3">
                        <input type="number" disabled className= 'w-screen-full border-gray-600 text-gray-800 w-full'  value={mno} onChange={handleMnoChange}  />
                    </div>
                </div>

                <div className="md:flex justify-between pb-5 ">
                    <div className="lable">
                        
                        <h4>Address</h4>
                        <p className='text-sm text-gray-400'>Address where you live, Appears on reciepts, invoices, and more  </p>
                    </div>
                    <div className="lable py-3">
                        <input type="text"  className= 'w-screen-full border-gray-600 text-gray-800 w-full'  value={add} onChange={handleAddChange} />
                    </div>
                </div>

                <div className="md:flex justify-between pb-5 ">
                    <div className="lable">
                        
                        <h4>Area</h4>
                        <p className='text-sm text-gray-400'>Area where you live, Appears on reciepts, invoices, and more  </p>
                    </div>
                    <div className="lable py-3">
                        <input type="text"  className= 'w-screen-full border-gray-600 text-gray-800 w-full'  value={area} onChange={handleAreaChange} />
                    </div>
                </div>

                <div className="md:flex justify-between pb-5 ">
                    <div className="lable">
                        
                        <h4>State</h4>
                        <p className='text-sm text-gray-400'>State where you live, Appears on reciepts, invoices, and more  </p>
                    </div>
                    <div className="lable py-3">
                        <input type="text"  className= 'w-screen-full border-gray-600 text-gray-800 w-full'  value={state} onChange={handleStateChange} />
                    </div>
                </div>

                <div className="md:flex justify-between pb-5 ">
                    <div className="lable">
                        
                        <h4>City</h4>
                        <p className='text-sm text-gray-400'>City where you live, Appears on reciepts, invoices, and more  </p>
                    </div>
                    <div className="lable py-3">
                        <input type="text"  className= 'w-screen-full border-gray-600 text-gray-800 w-full'  value={city}  onChange={handleCityChange}  />
                    </div>
                </div>

                <div className="md:flex justify-between pb-5 ">
                    <div className="lable">
                        
                        <h4>zipcode</h4>
                        <p className='text-sm text-gray-400'>Zipcode , Appears on reciepts, invoices, and more </p>
                    </div>
                    <div className="lable py-3">
                        <input type="number"  className= 'w-screen-full border-gray-600 text-gray-800 w-full'  value={zip} onChange={handleZipChange} />
                    </div>
                </div>
                <hr />
                <div className="text-center py-5">
                    <button onClick={handleUpdateProfile} className='bg-basecolor text-white py-2 px-4 text-md rounded'>Save Changes</button>
                </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                    <img src="/cracker.png" alt="congs" width={100}  className='mx-auto pb-4' />
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Profile Updated Successfully
                  </Dialog.Title>
                 
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


     
      </>
  )
}

export default BookingTab