'use client'
import { useEffect, useState, useContext , Fragment} from 'react';
import { useRouter } from 'next/navigation';
import BookingTab from '@/components/BookingTab';
import Loading from '@/components/Loading';
// import { AuthContext } from '@/components/AuthContext';
import { Tab } from '@headlessui/react'
import Payment from '@/components/Payment';
const Profile = () => {
  const [userProfileInfo , setUserProfileInfo] = useState([]);
  const [bookings , setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userData, setUserData] = useState([])
  // useEffect(() => {
  //  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
  //   const fetchUserProfile = async () => {
  //       const URL = 'https://support.homofixcompany.com/api/Customer/'
  //     try {
  //       // Make the API call to fetch the user profile data
  //       const response = await fetch(URL, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (response.ok) {
  //         const userData = await response.json();
  //         //console.log('userData', userData)
  //         //console.log('token val', token)
  //         setUserProfileInfo(userData[0]);
  //         //console.log('usprofile', userProfileInfo)
  //       } else {
  //         // Handle error case when the response is not ok
  //         //console.log('token val in error', token)

  //         console.error('Error fetching user profile data');
  //       //   router.push('/'); // Redirect to homepage if there is an error
  //       }
  //     } catch (error) {
  //       // Handle error case when an exception occurs during the API call
  //       console.error('Error fetching user profile data:', error);
  //       // router.push('/'); // Redirect to homepage if there is an error
  //     }
  //   } 
  //   const fetchBookingDetails = async ()=>{
  //     const URL2 = 'https://support.homofixcompany.com/api/Customer-Booking-Details/'

  //     try {
  //       // Make the API call to fetch the user profile data
  //       const response = await fetch(URL2, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (response.ok) {
  //         const bookingData = await response.json();
          // console.log('bookingData', bookingData)
  //         // const latestbooking = userData[userData.length - 1];
  //         setBookings(bookingData.reverse())
  //       } else {
  //         // Handle error case when the response is not ok
  //         // //console.log('token val in error', token)

  //         console.error('Error fetching user profile data');
  //       //   router.push('/'); // Redirect to homepage if there is an error
  //       }
  //     } catch (error) {
  //       // Handle error case when an exception occurs during the API call
  //       console.error('Error fetching user profile data:', error);
  //       // router.push('/'); // Redirect to homepage if there is an error
  //     }
  //   }
  //   if (!token) {
  //       // Redirect to the homepage if there is no token
  //       router.push('/');
  //     } else {
  //       fetchUserProfile();
  //       fetchBookingDetails();
  //     }
  //   }, [])

    // Fetch user profile data when the component mounts
    
//   }, []);
const custURL = 'https://support.homofixcompany.com/api/Customer/';
const bokkingURL = 'https://support.homofixcompany.com/api/Customer-Booking-Details/';

useEffect(() => {
  const fetchData = async () => {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

    if (!token) {
      // Redirect to the homepage if there is no token
      // setToken(null);
      // setUserInfo(null);
      // Clear user data from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      router.push('/');
      return;
    }

    try {
      // Fetch user profile data
      setLoading(true)

      const responseProfile = await fetch(custURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!responseProfile.ok) {
        throw new Error('Error fetching user profile data');
      }

      const userData = await responseProfile.json();
      setUserProfileInfo(userData[0]);

      // Check if there is user data before fetching bookings
      if (userData.length > 0) {
        // Fetch booking details
        const responseBooking = await fetch(bokkingURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!responseBooking.ok) {
          throw new Error('Error fetching booking details');
        }

        const bookingData = await responseBooking.json();
        setBookings(bookingData.reverse());
        // console.log('bookingData 121', bookingData)
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      router.push('/');
    }
  };

  fetchData();
}, [bokkingURL]);

// let categories = ['Bookings','Profile']
  return (
    <>
    {/* {loading ? <Loading /> : ( */}
      <div className="container mx-auto md:py-3">
      <div className="bg-gradient-to-r from-bgleft to-Orange text-center py-20 -mb-10">
        <h2 className="text-3xl font-bold text-white">Account</h2>
      </div>
      <BookingTab bookings={bookings} userProfileInfo={userProfileInfo} />
    </div>
    {/* ) } */}
    
    </>
  );
};

export default Profile;
