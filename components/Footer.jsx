

export const Footer = () => {
    const locations = ['Delhi' , 'Noida' , 'Gurgaon' , 'Ghaziabad' ,'Kanpur'];
    const ComingSoons = ['Mumbai', 'Pune', 'Hyderabad', 'Bangalore', 'Kolkata', 'Jaipur', 'Chandigarh', 'Lucknow', 'Gorakhpur', 'Patna'];
  return (
    <section >
        <div className="w-full bg-black py-10 ">
            <div className="container mx-auto">
                <div className="flex justify-center mb-5 flex-wrap">
                    <a href="/about" className='text-white px-4 py-2 text-sm'>About Us </a>
                    <a href="/blogs" className='text-white px-4 py-2 text-sm'>Blogs </a>
                    <a href="/career" className='text-white px-4 py-2 text-sm'>Career </a>
                    <a href="/addons" className='text-white px-4 py-2 text-sm'>Addons-list </a>
                    <a href="/contactus" className='text-white px-4 py-2 text-sm'>Contact Us </a>
                    <a href="/terms" className='text-white px-4 py-2 text-sm'>Terms & Condition</a>
                    <a href="/privacy" className='text-white px-4 py-2 text-sm'>Privacy Policy</a>
                    {/* <a href="/refund" className='text-white px-4 py-2 text-sm'>Refund Policy</a> */}
                </div>
                <hr className='border-dotted' />
                <div className="locations p-4  sm:py-8">
                    <h3 className='text-white text-lg mb-3  '>Serving in</h3>
                    <div className="flex justify-start flex-wrap">
                    {locations.map((location , idx) => <h1 key={idx} className='text-white p-2 text-sm'>{location}</h1>)}
                    </div>
                </div>
                <div className="locations p-4  sm:py-8">
                    <h3 className='text-white text-lg mb-3  '>Coming soon cities</h3>
                    <div className="flex justify-start flex-wrap">
                    {ComingSoons.map((location , idx) => <h1 key={idx} className='text-white p-2 text-sm'>{location}</h1>)}
                    </div>
                </div>
                <div className="social ">
                <img width={200} className="mx-auto" src="/logolight.png" alt="" />
                <h4 className="text-white py-7 text-center">Follow Us</h4>
                <div className="media flex justify-center mb-10">
                    <a href="https://www.facebook.com/Homerepairingandservices"  target="_blank">
                    <img src="/assets/imgs/fb.png" width={49} height={49} className="mr-2 "  alt="facebook" />
                    </a>
                    <a href="https://instagram.com/homofixcompany?igshid=MzNlNGNkZWQ4Mg=="  target="_blank">
                    <img src="/assets/imgs/insta.png" width={49} height={49} className="mr-2" alt="Insta" />
                    </a>
                    <a href="https://www.linkedin.com/company/homofix-in/" target="_blank">
                    <img src="/assets/imgs/linkdin.png" width={49} height={49} className="mr-2 " alt="Lindin" />
                    </a>
                    <a href="#" target="_blank">
                    <img src="/assets/imgs/twitter.png" width={49} height={49} className="mr-2 " alt="Twitter" />
                    </a>
                </div>
                <hr className='border-dotted' />

                <div className="copyright py-6 text-center">
                    <h5 className="text-white text-sm">© 2023 Homofix Technologies Pvt. Ltd. All Rights Reserved.
                     {/* Designed By <a href="https://trygon.in" className="text-indigo">TRYGON</a> */}
                    </h5>
                </div>
                </div>
            </div>
           
        </div>
    </section>
  )
}
