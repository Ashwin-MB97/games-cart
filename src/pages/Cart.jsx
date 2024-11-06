import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Cart = () => {
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
    </main>
  );
};

export default Cart;
