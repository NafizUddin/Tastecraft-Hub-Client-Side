import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import BrandCard from "../../Components/Brand Card/BrandCard";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Main Layout/MainLayout";
import serve from "../../assets/food-serving.png";
import customer from "../../assets/customer-review.png";
import certified from "../../assets/certificate.png";
import online from "../../assets/online-order.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import foodAssurance from "../../assets/recommended-food.png";
import onTime from "../../assets/clock.png";
import freeDelivery from "../../assets/delivery.png";
import support from "../../assets/help-desk.png";

const Home = () => {
  const { isButtonOn } = useContext(MyContext);
  const [counterOn, setCounterOn] = useState(false);
  const allBrands = useLoaderData();
  console.log(allBrands);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      {/* Brand Card Section*/}
      <div className="my-16">
        <h1 className="text-[#D72323] text-center text-5xl font-bold">
          Our Partnership With
        </h1>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-3 xl:gap-7 my-12 mx-6 xl:mx-0"
        >
          {allBrands?.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
      {/* Brand Card Ends */}
      {/* About Us starts */}
      <h1 className="text-[#D72323] text-center text-5xl font-bold">
        About Tastecraft Hub
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 md:mx-8 items-center mt-12 mx-6 xl:mx-0">
        <div className="flex-1">
          <h1
            style={{ color: isButtonOn ? "" : "white" }}
            className=" font-bold text-3xl md:text-4xl pb-5 text-center lg:text-left"
          >
            We have been serving fresh food and beverages since 2012
          </h1>
          <p
            style={{ color: isButtonOn ? "" : "white" }}
            className="text-center md:text-left"
          >
            Welcome to <span className="text-[#D72323]">Tastecraft Hub</span>,
            We&apos;re more than suppliers – we&apos;re culinary architects,
            curating a symphony of flavors for your discerning taste. With a
            passion for quality, we source and deliver premium food and
            beverages, turning every meal into an extraordinary experience.
            Trust us to elevate your gastronomic journey with a commitment to
            excellence and a palate-driven approach.
          </p>

          <div className="flex flex-col space-y-12 lg:space-y-10 mt-7 pl-6 md:pl-32 lg:pl-0 lg:items-start">
            <div className="flex gap-7 items-center lg:items-center">
              <div>
                <img src={serve} className="w-16" />
              </div>
              <p
                style={{ color: isButtonOn ? "black" : "white" }}
                className="flex gap-3 items-center md:text-2xl lg:text-xl xl:text-2xl"
              >
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="flex gap-1">
                    <h1 className="font-bold text-lg md:text-3xl lg:text-2xl xl:text-3xl">
                      {counterOn && (
                        <CountUp start={1} end={532} duration={2} delay={0.3} />
                      )}
                    </h1>
                    <span className="text-xl">+</span>
                  </div>
                </ScrollTrigger>
                <p>Popular Testy Foods Item</p>
              </p>
            </div>
            <div className="flex gap-7 items-center justify-start">
              <div>
                <img src={customer} className="w-16" />
              </div>
              <p
                style={{ color: isButtonOn ? "black" : "white" }}
                className="md:text-2xl flex gap-3 items-center lg:text-xl xl:text-2xl"
              >
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="flex gap-1">
                    <h1 className="font-bold text-lg md:text-3xl lg:text-xl xl:text-3xl">
                      {counterOn && (
                        <CountUp
                          start={1}
                          end={6534}
                          duration={2}
                          delay={0.3}
                        />
                      )}
                    </h1>
                    <span className="text-xl">+</span>
                  </div>
                </ScrollTrigger>
                <p>Satisfied Customers</p>
              </p>
            </div>
            <div className="flex gap-7 items-center lg:items-center">
              <div>
                <img src={certified} className="w-16" />
              </div>
              <p
                style={{ color: isButtonOn ? "black" : "white" }}
                className="md:text-2xl flex gap-3 items-center lg:text-xl xl:text-2xl"
              >
                <span>We’ve</span>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="flex gap-1">
                    <h1 className="font-bold text-lg md:text-3xl lg:text-2xl xl:text-3xl">
                      {counterOn && (
                        <CountUp start={1} end={10} duration={3} delay={0.3} />
                      )}
                    </h1>
                    <span className="text-xl">+</span>
                  </div>
                </ScrollTrigger>
                <p>Years Of Experience</p>
              </p>
            </div>
            <div className="flex gap-7 items-center lg:items-center">
              <div>
                <img src={online} className="w-16" />
              </div>
              <p
                style={{ color: isButtonOn ? "black" : "white" }}
                className="md:text-2xl flex gap-3 items-center lg:text-xl xl:text-2xl"
              >
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="flex gap-1">
                    <h1 className="font-bold text-lg md:text-3xl lg:text-2xl xl:text-3xl">
                      {counterOn && (
                        <CountUp start={1} end={432} duration={2} delay={0.3} />
                      )}
                    </h1>
                    <span className="text-xl">+</span>
                  </div>
                </ScrollTrigger>
                <p>Foods Items Online Orders</p>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-8 lg:mb-0 relative w-full h-[300px] lg:h-full">
            <img
              src="https://image.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative bg-gray-900 bg-opacity-70 h-full">
              <h1
                className="text-white font-bold text-center text-2xl  md:text-4xl lg:text-3xl xl:text-4xl py-28 md:py-28 lg:py-44 xl:py-52 px-2
               md:px-20 lg:px-7"
              >
                Your Taste, Our promise – Supreme Food and Beverage Solutions
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* About Us ends */}
      {/* Why choose Us */}
      <h1 className="text-[#D72323] text-center text-5xl font-bold mt-16">
        Why Choose Us
      </h1>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mx-7 md:mx-8 xl:mx-0 my-8"
      >
        <div style={{ color: isButtonOn ? "black" : "white" }} className="card">
          <figure className="px-10 pt-10">
            <img src={foodAssurance} alt="" className="w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold">Quality Guaranteed</h2>
            <p>
              Committed to top-tier quality, our food and beverage supplier
              ensures rigorous testing and compliance with industry standards
            </p>
          </div>
        </div>
        <div style={{ color: isButtonOn ? "black" : "white" }} className="card">
          <figure className="px-10 pt-10">
            <img src={onTime} alt="" className="w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold">Delivery On-time</h2>
            <p>
              With a punctual and reliable food delivery system, our food and
              beverage supplier company guarantees timely arrivals to meet the
              demands of our clients.
            </p>
          </div>
        </div>
        <div style={{ color: isButtonOn ? "black" : "white" }} className="card">
          <figure className="px-10 pt-10">
            <img src={freeDelivery} alt="" className="w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold">Free Delivery</h2>
            <p>
              Enjoy the added convenience with our food and beverage supplier
              company, offering free delivery to elevate your experience and
              satisfaction.
            </p>
          </div>
        </div>
        <div style={{ color: isButtonOn ? "black" : "white" }} className="card">
          <figure className="px-10 pt-10">
            <img src={support} alt="" className="w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold">Customer Support 24/7</h2>
            <p>
              Our food and beverage supplier company provides round-the-clock
              customer support, ensuring responsive assistance whenever you need
              it, to enhance your experience with us.
            </p>
          </div>
        </div>
      </div>
      {/* why choose us ends */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
