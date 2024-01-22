import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperLogo from "/src/assets/images/swiperLogo.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const slideData = [
  {
    title: "Great Fast Reliable Service",
    content:
      "Request money from friends and family around the world. Whether you're sending or receiving international payments, you're always getting the best rates via our partners, up to 3x cheaper than the banks.",
    logo: swiperLogo,
    company: "Aspen Press",
    position: "Web Designer",
    stars: [1, 2, 3, 4, 5],
  },
  {
    title: "Great Fast Reliable Service",
    content:
      "Request money from friends and family around the world. Whether you're sending or receiving international payments, you're always getting the best rates via our partners, up to 3x cheaper than the banks.",
    logo: swiperLogo,
    company: "Aspen Press",
    position: "Web Designer",
    stars: [1, 2, 3, 4, 5],
  },
  {
    title: "Great Fast Reliable Service",
    content:
      "Request money from friends and family around the world. Whether you're sending or receiving international payments, you're always getting the best rates via our partners, up to 3x cheaper than the banks.",
    logo: swiperLogo,
    company: "Aspen Press",
    position: "Web Designer",
    stars: [1, 2, 3, 4, 5],
  },
  {
    title: "Great Fast Reliable Service",
    content:
      "Request money from friends and family around the world. Whether you're sending or receiving international payments, you're always getting the best rates via our partners, up to 3x cheaper than the banks.",
    logo: swiperLogo,
    company: "Aspen Press",
    position: "Web Designer",
    stars: [1, 2, 3, 4, 5],
  },
  // Add more entries for additional slides if needed
];

const SwiperComponent = () => {
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = () => {
    if (swiper) {
      const slides = document.querySelectorAll(".swiperCard01");
  
      slides.forEach((slide, index) => {
        const distance = Math.abs(swiper.activeIndex - index);
        let opacity = '';
  
        if (window.innerWidth > 1200) {
          opacity = index === 0 ? 0.3 : distance === 1 ? 1 : distance === 2 ? 0.5 : 0.3;
        }
  
        slide.style.opacity = opacity;
      });
    }
  };
  

  return (
    <Swiper
      onSwiper={(s) => setSwiper(s)}
      onSlideChange={handleSlideChange}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      spaceBetween={36}
      loop={true}
      slidesPerView={3}
      initialSlide={1} // Set the second card as the initial active slide
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 26,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}>
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} className="swiperCard01">
          <div className="swiperCardContent01">
            <div className="starFillDiv">
              {slide.stars.map((star, starIndex) => (
                <i key={starIndex} className="bi bi-star-fill"></i>
              ))}
            </div>
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
          </div>
          <div className="swiperLogoDiv">
            <img src={slide.logo} alt="" />
            <div>
              <h6>{slide.company}</h6>
              <p>{slide.position}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
