"use client"
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const animation = { duration: 5000, easing: (t) => t }
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const ExclusiveOffer = (props) => {
  const [offer, setOffer] = useState([]);
 
  const settings = {
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    dots: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 500,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          infinite: true,
          speed: 1000,
        }
      }
    ]
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(props.url, { cache: "no-store" });
      const data = await res.json();
      setOffer(data);
    };
    fetchData();
  }, [props.url]);

  return (
    <section className="container mx-auto py-10 md:mt-10">
      <h2 className="hidden md:block text-2xl text-center font-semibold">
        {props.title}
      </h2>
      <div className="md:mt-9 ">
           {offer.length > 0 && (
              <Slider {...settings} >
                {offer.map((cat, idx) => (
                  <div key={idx} className="outline-none">
                    <Link href={cat.url} className="outline-none">
                      <img
                        src={cat.offer_pic}
                        alt="Ac"
                        width={285}
                        className="mx-auto w-11/12 md:w-11/12 outline-none"
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
           ) }
      </div>
      {/* Add the CSS styling to remove outline when clicking */}
      
    </section>
  );
};

export default ExclusiveOffer;
