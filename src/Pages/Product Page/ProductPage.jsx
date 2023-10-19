import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import ItemCard from "../../Components/Item Cards/ItemCard";
import { MyContext } from "../../Main Layout/MainLayout";
import { BiArrowBack } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Footer from "../../Components/Footer/Footer";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedBrand = useLoaderData();

  const { isButtonOn } = useContext(MyContext);

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
          <div>
            <h1
              style={{ color: isButtonOn ? "black" : "white" }}
              className="text-2xl pl-3 text-center pb-5 font-medium"
            >
              Food Item Tags
            </h1>
            <div className="grid grid-cols-12 grid-rows-3 gap-3">
              <div
                style={{ backgroundColor: isButtonOn ? "#D72323" : "#ff8080" }}
                className="col-span-4 rounded-xl text-center py-2 text-white"
              >
                Burger
              </div>
              <div
                style={{ backgroundColor: isButtonOn ? "#D72323" : "#ff8080" }}
                className="col-span-4 rounded-xl text-center py-2 text-white"
              >
                Pizza
              </div>
              <div
                style={{ backgroundColor: isButtonOn ? "#D72323" : "#ff8080" }}
                className="col-span-4 rounded-xl text-center py-2 text-white"
              >
                Pasta
              </div>
              <div
                style={{ backgroundColor: isButtonOn ? "#D72323" : "#ff8080" }}
                className="col-span-6 rounded-xl text-center py-2 text-white"
              >
                Chicken
              </div>
              <div
                style={{ backgroundColor: isButtonOn ? "#D72323" : "#ff8080" }}
                className="col-span-5 rounded-xl text-center py-2 text-white"
              >
                Sandwich
              </div>
              <div
                style={{ backgroundColor: isButtonOn ? "#D72323" : "#ff8080" }}
                className="col-span-5 rounded-xl text-center py-2 text-white"
              >
                Soft Drinks
              </div>
              <div
                style={{ backgroundColor: isButtonOn ? "#D72323" : "#ff8080" }}
                className="col-span-4 rounded-xl text-center py-2 text-white"
              >
                Coffee
              </div>
            </div>
            <div className="bg-violet-50 mt-7 py-5">
              <h1
                style={{ color: isButtonOn ? "black" : "white" }}
                className="text-2xl text-center pb-5 font-medium"
              >
                Get In Touch
              </h1>
              <div className="flex gap-3 items-center pl-4">
                <div className="text-xl">
                  <FaLocationDot></FaLocationDot>
                </div>
                <p>Honey Business, 24 Fifth street, Los Angeles, USA</p>
              </div>
              <div className="flex gap-3 items-center py-4 pl-4">
                <div className="text-xl">
                  <MdEmail></MdEmail>
                </div>
                <p className="lg:text-sm xl:text-base">
                  tastecraft.hub@gmail.com
                </p>
              </div>
              <div className="flex gap-3 items-center pt-1 pb-4 pl-4">
                <div className="text-xl">
                  <BsTelephoneFill></BsTelephoneFill>
                </div>
                <p>(+01) 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductPage;
