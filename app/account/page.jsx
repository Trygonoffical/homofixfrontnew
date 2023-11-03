'use client'
import { useEffect, useState, useContext , Fragment} from 'react';
import { useRouter } from 'next/navigation';
import BookingTab from '@/components/BookingTab';
// import { AuthContext } from '@/components/AuthContext';
import { Tab } from '@headlessui/react'
import Payment from '@/components/Payment';
const Profile = () => {
  const [userProfileInfo , setUserProfileInfo] = useState([]);
  const [bookings , setBookings] = useState([]);

  const router = useRouter();
  const [userData, setUserData] = useState([])
  useEffect(() => {
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
          console.log('userData', userData)
          console.log('token val', token)
          setUserProfileInfo(userData[0]);
          console.log('usprofile', userProfileInfo)
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
    const fetchBookingDetails = async ()=>{
      const URL2 = 'https://support.homofixcompany.com/api/Customer-Booking-Details/'

      try {
        // Make the API call to fetch the user profile data
        const response = await fetch(URL2, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const bookingData = await response.json();
          // console.log('bookingData', bookingData)
          // const latestbooking = userData[userData.length - 1];
          setBookings(bookingData.reverse())
        } else {
          // Handle error case when the response is not ok
          // console.log('token val in error', token)

          // console.error('Error fetching user profile data');
        //   router.push('/'); // Redirect to homepage if there is an error
        }
      } catch (error) {
        // Handle error case when an exception occurs during the API call
        // console.error('Error fetching user profile data:', error);
        // router.push('/'); // Redirect to homepage if there is an error
      }
    }
    if (!token) {
        // Redirect to the homepage if there is no token
        router.push('/');
      } else {
        fetchUserProfile();
        fetchBookingDetails();
      }
    }, [])

    // Fetch user profile data when the component mounts
    
//   }, []);


// let categories = ['Bookings','Profile']
  return (
    
     <div className="container mx-auto py-10">
      <div className="bg-gradient-to-r from-bgleft to-Orange text-center py-20 -mb-10">
        <h2 className="text-3xl font-bold text-white">Account</h2>
      </div>
      {/* <div className="grid grid-cols-1 -mt-8 pb-9"> */}
        {/* <BookingTab bookings={bookings} /> */}
        {/* <div className="-mt-3">
            <div className="flex w-fit mx-auto  rounded-xl bg-[#2c319b92] p-1">
                <span className='rounded-lg py-3 px-6 text-sm font-medium leading-5 text-basecolor
                ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'  >Tab  1</span>
                <span className='rounded-lg py-3 px-6 text-sm font-medium leading-5 text-basecolor
                ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' >Tab  2</span>
            </div>
        </div> */}
      {/* </div> */}
      <BookingTab bookings={bookings} userProfileInfo={userProfileInfo} />
    </div>
   
  );
};

export default Profile;
