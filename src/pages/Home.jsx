import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <main
      className={`${
        theme === "dark" ? "bg-[#1E1E1E]" : "bg-[#F4F4F9]"
      } min-h-screen w-full`}
    ></main>
  );
};

export default Home;
