import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Genre from "../components/Genre";
import GamesList from "../components/GamesList";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <main
      className={`${
        theme === "dark"
          ? "bg-[#1E1E1E] text-white"
          : "bg-[#F4F4F9] text-[#333333]"
      } min-h-screen w-full`}
    >
      <Header />
      <Genre />
      <GamesList />
    </main>
  );
};

export default Home;
