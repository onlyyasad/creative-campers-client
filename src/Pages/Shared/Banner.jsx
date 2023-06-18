import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner1.svg";
import banner2 from "../../assets/banner2.svg";
import banner3 from "../../assets/banner3.svg";

// Import Swiper styles
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-500">
      <div className="container mx-auto">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="hero min-h-screen px-10 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2  text-neutral-content">
                  <div className="flex items-center">
                    <div className="max-w-lg">
                      <h1 className="mb-5 text-4xl md:text-5xl text-yellow-400 font-bold">
                        Ignite Your Imagination
                      </h1>
                      <p className="text-black mb-5">
                        Embark on an Exciting Creative Journey and Discover the
                        Boundless World of Digital Art and Design at
                        CreativeCampers
                      </p>
                    </div>
                  </div>
                  <img className="w-full" src={banner1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero min-h-screen px-10 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 text-neutral-content">
                  <div className="flex items-center">
                    <div className="max-w-lg">
                      <h1 className="mb-5 text-4xl md:text-5xl text-yellow-400 font-bold">
                        Unleash Your Creative Potential
                      </h1>
                      <p className="text-black mb-5">
                        Transform Your Innovative Ideas into Stunning Visuals
                        with the Power of Professional Digital Tools and Expert
                        Guidance at CreativeCampers
                      </p>
                    </div>
                  </div>
                  <img className="w-full" src={banner2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero min-h-screen px-10 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2  text-neutral-content">
                  <div className="flex items-center">
                    <div className="max-w-lg">
                      <h1 className="mb-5 text-4xl md:text-5xl text-yellow-400 font-bold">
                        Dive into the Digital Art Universe
                      </h1>
                      <p className="text-black mb-5">
                        Immerse Yourself in a Captivating World of Artistic
                        Expression and Unleash Your Creative Genius with the
                        Help of CreativeCampers Experienced Instructors
                      </p>
                    </div>
                  </div>
                  <img className="w-full" src={banner3} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Banner;
