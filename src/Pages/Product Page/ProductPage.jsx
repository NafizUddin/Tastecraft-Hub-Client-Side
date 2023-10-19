import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ItemCard from "../../Components/Item Cards/ItemCard";

const ProductPage = () => {
  const selectedBrand = useLoaderData();

  const brandName = selectedBrand.brandName;

  const [singleBrandItems, setSingleBrandItems] = useState([]);

  useEffect(() => {
    fetch("https://tastecraft-hub-server-side.vercel.app/items")
      .then((res) => res.json())
      .then((data) =>
        setSingleBrandItems(data.filter((item) => item.brand === brandName))
      );
  }, [brandName]);
  console.log(singleBrandItems);

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

      <div className="my-16">
        <h1 className="font-bold text-5xl text-[#D72323] text-center">
          {selectedBrand.brandName}&apos;s Items
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10 pb-10 md:mx-8 xl:mx-0">
          <div className="mt-16 lg:mt-0 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-6 xl:mx-0">
              {singleBrandItems.map((item) => (
                <ItemCard key={item._id} item={item}></ItemCard>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
