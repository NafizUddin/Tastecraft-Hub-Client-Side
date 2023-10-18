import logo from "../../assets/whitelogo.png";
import bannerTop from "../../assets/bannertop.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.pinimg.com/originals/1a/04/9d/1a049d0db3c8a238ded1b4af745b1c1c.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 h-full">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="500"
          className="flex flex-col justify-center items-center pt-28 pb-16 lg:py-12 md:pt-32 md:pb-0"
        >
          <img src={logo} className="w-[300px] block md:hidden"></img>
          <div className="hero">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
              <img
                src={bannerTop}
                className="max-w-sm md:max-w-md lg:max-w-xl"
              />
              <div className="lg:max-w-2xl">
                <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-white text-center lg:text-left">
                  Serving Flavorful Moments, One Bite at a Time – <br /> Your
                  Culinary Partner for Quality Delights!
                </h1>
                <p className="py-6 text-white text-center lg:text-left">
                  Elevate your dining experience with our premium food and
                  beverage supplies, delivering excellence to your table with
                  every order. We&apos;re committed to enhancing your
                  gastronomic journey with quality ingredients that inspire
                  exceptional flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
