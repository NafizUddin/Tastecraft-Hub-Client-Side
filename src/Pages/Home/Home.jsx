import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import BrandCard from "../../Components/Brand Card/BrandCard";

const Home = () => {
  const allBrands = useLoaderData();
  console.log(allBrands);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      {/* Brand Card Section*/}
      <div className="my-16">
        <h1 className="text-[#D72323] text-center text-5xl font-bold">
          Our Partnership With
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-12">
          {allBrands?.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
