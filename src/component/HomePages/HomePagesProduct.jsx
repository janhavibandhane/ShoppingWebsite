import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomeReusableProduct from "../HomePageReusableComponent/HomeReusableProduct";
import mk1 from "/Images/mk1.png";
import mk2 from "/Images/mk2.png";

function HomePageProduct() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing style
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="bg-[#e3dad2] md:p-10 md:pt-0 pt-0 p-4">
        <div
          className="hero bg-[#faf8f4] md:mt-[-2.5rem] pt-20 pb-10"
          md:data-aos="fade-up"
        >
          <div
            className="font-Gupter text-4xl md:mt-[-34rem] mt-[-18rem]"
            data-aos="zoom-in"
          >
            CHOOSE YOUR PRODUCT
          </div>
          <div
            className="carousel carousel-center rounded-box w-full md:max-w-[80rem] space-x-6 p-4 overflow-x-auto"
            data-aos="fade-up"
          >
            <div className="carousel-item" data-aos="fade-right">
              <HomeReusableProduct item1={mk1} />
            </div>
            <div className="carousel-item" data-aos="fade-up">
              <HomeReusableProduct item1={mk2} />
            </div>
            <div className="carousel-item" data-aos="fade-left">
              <HomeReusableProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageProduct;