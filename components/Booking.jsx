'use client'
import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';
import CongBooking from './CongBooking';
// import Razorpay  from 'react-razorpay';
// import Razorpay from 'react-razorpay';
import Script from "next/script";
import crypto from "crypto"
import { XMarkIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';
import Loading from './Loading';

const Booking = ({ cnames, title , cartItems , customer , couponID , PaymentAmount}) => {
  const [bookingShow, setBookingShow] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [bookingDateTime, setBookingDateTime] = useState('');
  const [name , setName] = useState('')
  const [add , setAdd] = useState('')
  const [area , setArea] = useState('')
  const [city , setCity] = useState('')
  const [state , setState] = useState('')
  const [zip , setZip] = useState('')
  const [paymentMethod , setPaymentMethod] = useState('Online')
  const [userProfileInfo , setUserProfileInfo] = useState({})
  const [bookingID , setBookingID] = useState(null)
  const [isBookingCompleted, setBookingCompleted] = useState(false);
  const [congBookingShow, setCongBookingShow] = useState(false);
  const [loading, setLoading] = useState(false);

//   const [paymentID , setPaymentID] = useState(null)
  // Rest of the code...

  const handleDateTimeChange = (event) => {
    setBookingDateTime(event.target.value);
  };
//   const [bookingDate, setBookingDate] = useState('');
//   const [bookingTime, setBookingTime] = useState('');

//   // Rest of the code...
const handlePaymentChange = (val) => {
    setPaymentMethod(val);
    // console.log('Payment Method - ', paymentMethod)
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log('name - ', name)
  };
  const handleAddChange = (event) => {
    setAdd(event.target.value);
    // console.log('add - ', add)
  };
  const handleAreaChange = (event) => {
    setArea(event.target.value);
    // console.log('area - ', area)
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
    // console.log('city - ', city)
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
    // console.log('state - ', state) 
  };
  const handleZipChange = (event) => {
    setZip(event.target.value);
    // console.log('zip - ', zip) 
  };
  useEffect(() => {
    // console.log('testing')
    // console.log('bID', bookingID)
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
     const fetchUserProfile = async () => {
         const URL = 'https://support.homofixcompany.com/api/Customer/'
       try {
         // Make the API call to fetch the user profile data
         const response = await fetch(URL, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });
 
         if (response.ok) {
           const userData = await response.json();
          //  console.log('userData', userData)
          //  console.log('token val', token)
           setUserProfileInfo(userData[0]);
         } else {
           // Handle error case when the response is not ok
           console.log('token val in error', token)
 
           console.error('Error fetching user profile data');
         //   router.push('/'); // Redirect to homepage if there is an error
         }
       } catch (error) {
         // Handle error case when an exception occurs during the API call
         console.error('Error fetching user profile data:', error);
         // router.push('/'); // Redirect to homepage if there is an error
       }
     } 
     if (!token) {
         // Redirect to the homepage if there is no token
         router.push('/');
       } else {
         fetchUserProfile();
       }
     }, [URL]);
//   const handleTimeChange = (event) => {
//     setBookingTime(event.target.value);
//   };
const handleProfileDataUpdate = () =>{
    const authToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null; // Replace with your actual authentication token
    const Burl = `https://support.homofixcompany.com/api/customer/profile/update/`;

    let profiledata = {
        'address': add,
        'area' : area, 
        'city' : city,
        'first_name' : name,
        'state': state,
        'zipcode': zip,
    }
    // console.log('profiledata', profiledata)
    const postProfile = async () =>{
        try {
            const response = await fetch(Burl, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
              },
              body: JSON.stringify(profiledata),
            });
        
            if (response.ok) {
              const data = await response.json();
            //   console.log(data);
            } else {
              console.error("Request failed with status:", response.status);
            }
          } catch (error) {
            console.error("An error occurred:", error);
          }
    }
    postProfile()
}

const handleBookingDetails = ({COS , OL}) =>{
    const authToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null; 
    console.log('inbooknow fun' , cartItems)
    console.log('cos ' , COS)
    let payload = {
        "booking_date": bookingDateTime,
        "customer": customer,
        "coupon": couponID,
        "cash_on_service": COS,
        "online": OL,
        "booking_product": cartItems,
    }
    // console.log('payload', payload)
    // const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    const url = "https://support.homofixcompany.com/api/create_booking/";

const postData = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

postData();
  }
const handleOnlinePayment = async() => {
    const apiKey = 'rzp_test_C8XkYZBi6Tpn1G';
    const apiSecret = 'izRT1cAew7L1lfmQfbelyJZs';
    let localbookindID = '';
    const authToken = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    const valord = {
    amount: PaymentAmount * 100,
    currency: 'INR',
    receipt: 'rep_001',
    };

    const data = await fetch("/api/v1/orders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Basic ${authToken}`,
    },
    body: JSON.stringify(valord),
    }).then((t) => t.json());

    

         

        const handleBookingDetailsinner = ({COS='False' , OL='True' , PaymentID}) =>{
            const authToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null; 
            // console.log('cartItems' , cartItems)
            // console.log('cos ' , COS)
            let payload = {
                "booking_date": bookingDateTime,
                "customer": customer,
                "coupon": couponID,
                "cash_on_service": COS,
                "online": OL,
                "booking_product": cartItems,
            }
            // console.log('payload', payload)
            // const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
            const url = "https://support.homofixcompany.com/api/create_booking/";
        
        const postData = async () => {
          try {
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
              },
              body: JSON.stringify(payload),
            });
        
            if (response.ok) {
              const data = await response.json();
            //   console.log(data);
              localbookindID = data.data.id ;
              handlePaymentRep(PaymentID, localbookindID)
            //   console.log('loc in booking', localbookindID)
              
            //   console.log( 'bookingID-handleBookingDetailsinner', data.data.id);
            //   setBookingID(data.data.id)
            } else {
              console.error("Request failed with status:", response.status);
            }
          } catch (error) {
            console.error("An error occurred:", error);
          }
        }
        
         postData();
          }
          const handlePaymentRep = (paymentID ,localbookindID )=>{
            const authToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;  
            // url = 'https://support.homofixcompany.com/api/customer/payments/'
            // console.log('PayID' , paymentID)
            // console.log('bookingID' , localbookindID)
            // console.log('PaymentAmount' , PaymentAmount)
            let rept = {
                "payment_id": paymentID,
                "payment_mode": 'Online',
                "amount": PaymentAmount,
                "booking_id": localbookindID,
            }
            const postResp = async () => {
                try {
                  const response = await fetch('https://support.homofixcompany.com/api/customer/payments/', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${authToken}`,
                    },
                    body: JSON.stringify(rept),
                  });
              
                  if (response.ok) {
                    const data = await response.json();
                    // console.log(data);
                  } else {
                    console.error("Request failed with status:", response.status);
                  }
                } catch (error) {
                  console.error("An error occurred:", error);
                }
              }
              postResp()
        }

          // console.log('data', data);
        const razorpayOptions = {
            key: apiKey, // Replace with your Razorpay key ID
            amount: PaymentAmount * 100, // Replace with the actual amount to be charged
            currency: 'INR', // Replace with the appropriate currency code
            name: 'Homofix Company', // Replace with your company name
            description: 'Home Service', // Replace with the payment description
            order_id: data.id, // Replace with your unique order ID
            handler: (response) => {
              // Payment successful, perform necessary actions
              // console.log('Payment successful:', response)
              handleBookingDetailsinner({ COS: 'False', OL: 'True' , PaymentID: response.razorpay_payment_id})
              handleProfileDataUpdate()
              setBookingCompleted(true);
              Congratsmesg();
              setCongBookingShow(true)
            },
            prefill: {
              name: name, // Replace with the customer's name
              contact: userProfileInfo.mobile, // Replace with the customer's phone number
            },
            theme: {
              color: '#F37254', // Replace with your desired color theme
            },
          };

    if (typeof window !== 'undefined' && window.Razorpay) {
        const razorpayInstance = new window.Razorpay(razorpayOptions);
        razorpayInstance.open();
        } else {
        console.error('Razorpay script is not loaded.');
        }
        // handlePaymentRep()
    }
    
    const Congratsmesg = () => {
        // console.log('incongfun')
        // console.log(isBookingCompleted)
        if (isBookingCompleted) {
            // console.log(isBookingCompleted)

            return <CongBooking />;
          }
          return null;
  }
  const handleOfflinePayment = () => {
    handleBookingDetails({ COS: 'True', OL: 'False' });
    handleProfileDataUpdate();
    setBookingCompleted(true);
    Congratsmesg();
    setCongBookingShow(true)

    }

  const getLocation = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    // console.log('usprofile', userProfileInfo)
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log( 'address',  data)
        const address = {
          road: data.address.state_district,
          city: data.address.city,
          state: data.address.state,
          residential :  data.address.residential,
          postcode :  data.address.postcode,
          state_district :  data.address.state_district,
          // Add additional address components as needed
        };
        setAddress(address);
        if(address){
            setAdd(address.residential || '');
            setName(name || '');
            setArea(address.road || '');
            setCity(address.city || '');
            setState(address.state || '');
            setZip(address.postcode || '');
        }
        
      } else {
        console.error('Failed to retrieve address');
      }
    } catch (error) {
      console.error('Error occurred while retrieving address:', error);
    }
    setLoading(false);
  };

  const handleLocation = () => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          getLocation(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error occurred while retrieving geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser');
    }
    setLoading(false);
  };
// Update input fields when the address state changes
useEffect(() => {
    // console.log('in')
    // console.log('userProfileInfo', userProfileInfo)
    if (userProfileInfo) {
        setAdd(userProfileInfo.address || '');
        setArea(userProfileInfo.area || '');
        setCity(userProfileInfo.city || '');
        setState(userProfileInfo.state || '');
        setZip(userProfileInfo.zipcode || '');
        setName(userProfileInfo.first_name || '');
    } else {
      setAdd(address.residential || '');
      setName(name || '');
      setArea(address.road || '');
      setCity(address.city || '');
      setState(address.state || '');
      setZip(address.postcode || '');
    }
  }, [userProfileInfo]);

  const handleDatetimeval = (bookinttime) =>{
    const originalTime = bookinttime; // Your original time string
    const date = new Date(originalTime);
    const formatted = date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    return formatted ;
  }
  const handleOnlinePayment2 = async() => {
    console.log('teesting in the payment fun');
    const Mkey = '2PBP7IABZ2';
    const predata = {
      'key': Mkey,
      'txnid' : 'test101',
      'amount': 100.00,
      'productinfo': 'testing',
      'firstname': 'vikas',
      'phone': '8989898989',
      'email': 'vikasgupta282@gmail.com',
      'hash': 'b1ee3658d3f5caab82d1e9abcafa5143df6c89ce5ba3c8db55a1c2b0f3dca6ed668e89bc4a57f65f4598f00107a2c031f63bde90e55e2b496286dd1cdea1477e',
      'surl': 'https://homofixcompany.com/about',
      'furl': 'https://homofixcompany.com/about'
    }

    const prereqst = async () => {
      try {
        const response = await fetch('/api/easebuzz', {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(predata),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  // const url = '/api/easebuzz';
  // const acceskeyresp = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({'Mkey': Mkey}),
  //       });
  // console.log(acceskeyresp);
   const reqacess =  prereqst();
  //  const  access_key = reqacess.data ; //1 sec 
  // // const  access_key = 'b62c0177f39c0127ba24b3a48ee8ab798373b9c1fdb6754bf062f8f7e3033318' ;
  //  const easebuzzCheckout = new window.EasebuzzCheckout(Mkey, 'test');
  //  const options = {
  //     access_key: access_key, // access key received via Initiate Payment
  //     onResponse: (response) => {
  //         console.log(response);
  //     },
  //     theme: "#123456" // color hex
  // }
  // easebuzzCheckout.initiatePayment(options);
  }
  
  return (
    <>
      <button className={cnames} onClick={() => setBookingShow(true)}>
        {title}
      </button>

      <Dialog as="div" open={bookingShow} onClose={() => setBookingShow(false)}>
        {/* Dialog content */}
        <div className="fixed inset-0 z-[1300]" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-[1300] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-md sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between border-b-2 pb-3">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Homofix Company</span>
              <h2 className="text-xl font-semibold">Booking</h2>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setBookingShow(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="my-6 flow-root">
            <div className="my-6  divide-gray-500/10">
              {/* <h2>Name</h2> */}
              <label htmlFor="State">Name</label>

              <input type="text" value={name }  className="w-full py-2 my-2 border-indigo-800" onChange={handleNameChange} />
             
              <button className='my-2 text-basecolor' onClick={handleLocation}>Get Location</button> <br /> <br />
             
              {loading ? <Loading /> :   <>
               <label htmlFor="Address">Address</label>
                <input type="text" value={add } onChange={handleAddChange} className="w-full py-2 my-2 border-indigo-800" />
                <label htmlFor="Area">Area</label>
                <input type="text" value={area} onChange={handleAreaChange}  className="w-full py-2 my-2 border-indigo-800" />
                <label htmlFor="city">City</label>
                <input type="text" value={city} onChange={handleCityChange} className="w-full py-2 my-2 border-indigo-800" />
                <label htmlFor="State">State</label>
                <input type="text" value={state} onChange={handleStateChange} className="w-full py-2 my-2 border-indigo-800" />
                <label htmlFor="Pincode">Pincode </label>
                <input type="text" value={zip} onChange={handleZipChange} className="w-full py-2 my-2 border-indigo-800" />
              

               </>
            }
                  
                
              <div className="mt-4">
                <label htmlFor="bookingDateTime" className="block text-sm font-medium text-gray-700">
                  Select Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="bookingDateTime"
                  name="bookingDateTime"
                  value={bookingDateTime}
                  onChange={handleDateTimeChange}
                  className="w-full py-2 my-2 border-indigo-800"
                />
              </div>
              <div className='py-3'>
                <h3>Payment Method</h3>
                <div className='mt-2'>
                <input type="radio" name="PAYMENT" id="payment-method" value='ONLINE' onChange={()=>{handlePaymentChange('Online')}}  />
                <label htmlFor="PAYMENT"> Make Payment</label><br />
                </div>
                <div className='mt-2'>
                <input type="radio" name="PAYMENT" id="payment-method" value='CASH ON SERVICE' onChange={()=>{handlePaymentChange('Cash')}}   />
                <label htmlFor="PAYMENT"> Cash on Service</label><br />
                </div>
                
                {paymentMethod=='Online' ? (
                    <>
                    {/* <Script
                      id="razorpay-checkout-js"
                      src="https://checkout.razorpay.com/v1/checkout.js"
                    /> */}
              
                    <button className='mt-5 bg-basecolor text-white py-2 px-9 mx-auto '
                      onClick={() => {
                        // makePayment({ productId: "example_ebook" });
                        handleOnlinePayment2()
                      }}
                    >
                      Pay Now
                    </button>

                  </>

                ):(
                    <button className='mt-5 bg-basecolor text-white py-2 px-9 mx-auto ' onClick={handleOfflinePayment}>Book Now</button>

                )}
                

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <Dialog as="div" open={congBookingShow} onClose={() => setCongBookingShow(false)}>
        {/* Dialog content */}
        <div className="fixed inset-0 z-[1500]" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-[1500] w-full overflow-y-auto bg-white sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-center border-b-2 py-10 bg-basecolor rounded-t-none rounded-3xl "> 
          </div>
          <div className="mb-6 flow-root items-center justify-center text-center px-2">
          <img src="/cracker.png" alt="congrats" width={120} className='mx-auto -mt-16' />
            <h2 className='text-3xl text-basecolor font-bold py-3'>Congratulation</h2>
                <p className='text-sm text-gray-400'>You have successfully done the booking</p>
                <ul>
                    <li className='py-3 font-semibold text-lg'>Booking Date:Time - {handleDatetimeval(bookingDateTime) }</li>
                </ul>
                <Link href='/' className='px-4 py-2 bg-basecolor text-white'> Go to Home Page</Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export { Booking };
