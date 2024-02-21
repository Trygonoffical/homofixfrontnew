

const about = () => {
  return (
    <section className="container mx-auto mt-10 max-w-[1200px]">
        {/* <div className="grid md:grid-cols-2 my-12"> */}
        <div className="my-12">
            {/* <div className="columns-1">
                <img src="/abbg.webp" alt="aboutus" width='100%'  />
            </div> */}
            <div className="p-5 text-center">
                <h2 className="text-3xl">Who We Are</h2>
                <p className="py-4 text-sm md:text-base">
                HomOfix Company is a leading provider of home services, facilitating seamless
                connections between service professionals and customers through our platform. Our
                primary goal is to deliver top-notch home services right at your doorstep, making
                your life more convenient and hassle-free. With a wide array of services ranging from
                Appliance Repair & Service, Cleaning, Pest Control, Electrician, Carpentry, Plumbing,
                Home Painting, and more, we strive to meet all your home service needs. We take
                immense pride in our team of highly skilled and experienced professionals who are
                dedicated to delivering exceptional service quality at doorstep.
                
                </p>
                <p className="text-sm md:text-base">
                HomOfix Company aims to be synonymous with trust, reliability, and convenience in
                the home service industry. We are dedicated to making life easier for our customers,
                providing them with a sense of security and peace of mind. Together with our service
                professionals, we are committed to raising the bar and setting new standards for
                home services.
                </p>
            </div>
        </div>
        <div className="py-10 bg-gray-100 rounded-sm">
        <h2 className="text-3xl text-center">Our   <strong>Leadership</strong></h2>
            <div className="pt-16 grid md:grid-cols-3">
                <div className="card text-center mb-5">
                    <img src="/oneL.webp" alt="leader" className="mx-auto pb-2" />
                    <h5 className="text-sm">Aftab Khan: - Co-Founder & CEO</h5>
                    <span className="flex justify-center py-2">
                        <a href="https://www.linkedin.com/in/aftab-khan-46a27a9b/" target="_blank">
                        <img src="/assets/imgs/linkdin.png" width={30} height={30} className="mr-2 " alt="Lindin" />
                        </a>
                        <a href=" https://twitter.com/Aftabkhan92" target="_blank">
                        <img src="/assets/imgs/twitter.png" width={30} height={30} className="mr-2 " alt="Twitter" />
                        </a>
                    </span>
                </div>

                <div className="card text-center mb-5">
                    <img src="/threeL.webp" alt="leader" className="mx-auto pb-2" />
                    <h5 className="text-sm">Soaib Akhtar: - Co-Founder & COO</h5>

                    <span className="flex justify-center py-2">
                        <a href="https://www.linkedin.com/in/soaib-akhtar-3ab65a167" target="_blank">
                        <img src="/assets/imgs/linkdin.png" width={30} height={30} className="mr-2 " alt="Lindin" />
                        </a>
                        {/* <a href="#" target="_blank">
                        <img src="/assets/imgs/twitter.png" width={30} height={30} className="mr-2 " alt="Twitter" />
                        </a> */}
                    </span>
                </div>

                <div className="card text-center mb-5">
                    <img src="/twoL.webp" alt="leader" className="mx-auto pb-2" />
                    <h5 className="text-sm">Ishteyaque Ahmad: - Co-Founder & CTO </h5>

                    <span className="flex justify-center py-2">
                        <a href="https://www.linkedin.com/in/ishteyaque-ahmad-875885131" target="_blank">
                        <img src="/assets/imgs/linkdin.png" width={30} height={30} className="mr-2 " alt="Lindin" />
                        
                        </a>
                        <a href="https://twitter.com/ishti06" target="_blank">
                        <img src="/assets/imgs/twitter.png" width={30} height={30} className="mr-2 " alt="Twitter" />
                        </a>
                    </span>
                </div>
                
            </div>
        </div>
        {/* <div className="my-20 px-2">
            <h2 className="text-xl md:text-3xl text-center">How Service On <strong>HOMOFIX COMPANY</strong> works</h2>
            <p className="text-center py-4 text-sm md:text-base">Service On HOMOFIX is the smart way to get things done by connecting you with others in your neighbourhood.</p>
            <div className="grid grid-cols-2 my-12 text-center">
                <div className="columns-1 flex flex-col justify-center">
                    <h2 className="md:text-xl font-semibold">Step 1: </h2>
                    <p className="py-2 text-sm md:text-base">Book Online or Phone</p>
                </div>
                <div className="columns-1 p-3">
                    <img src="/hstep1.png" alt="step1" width={200} className="mx-auto" />
                </div>
                <div className="columns-1  p-3">
                    <img src="/hstep2.png" alt="step1" width={200} className="mx-auto" />
                </div>

                <div className="columns-1 flex flex-col justify-center">
                    <h2 className="md:text-xl font-semibold">Step 2: </h2>
                    <p className="py-2 text-sm md:text-base">Get Booking Details Via SMS</p>
                    
                </div>

                <div className="columns-1 flex flex-col justify-center">
                <h2 className="md:text-xl font-semibold">Step 3: </h2>
                <p className="py-2 text-sm md:text-base">Pay After Work is Done</p>
            </div>
            <div className="columns-1 p-3">
                <img src="/hstep1.png" alt="step1" width={200} className="mx-auto" />
            </div>
            </div>
        </div> */}

    </section>
  )
}

export default about