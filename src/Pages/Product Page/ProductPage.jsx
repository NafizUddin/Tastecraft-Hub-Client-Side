import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductPage = () => {
  const selectedBrand = useLoaderData();
  console.log(selectedBrand);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center gap-5">
        <img
          src={selectedBrand.brandImage}
          className="h-[100px] object-cover"
        />
        <h1 className="font-bold text-3xl text-[#D72323]">
          {selectedBrand.brandName}
        </h1>
      </div>

      <div className="mt-12">
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
            <img
              className="w-full h-[500px]"
              src={selectedBrand.sliderImg1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src={selectedBrand.sliderImg2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src={selectedBrand.sliderImg3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="my-10">
        <h1 className="font-bold text-5xl text-[#D72323] text-center">
          {selectedBrand.brandName}&apos;s Items
        </h1>
      </div>
    </div>
  );
};

export default ProductPage;
