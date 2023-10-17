import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MyContext = createContext();

const MainLayout = () => {
  const [isButtonOn, setIsButtonOn] = useState(true);

  const contextValue = {
    isButtonOn,
    setIsButtonOn,
  };
  return (
    <div className="md:container md:mx-auto">
      <MyContext.Provider value={contextValue}>
        <Outlet></Outlet>
      </MyContext.Provider>
    </div>
  );
};

export default MainLayout;
