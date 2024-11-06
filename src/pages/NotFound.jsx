import React from "react";
import errorImage from "../assets/page_not_found.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen w-full flex flex-col gap-5 items-center justify-center bg-slate-950">
      <img
        src={errorImage}
        alt="page not found error image"
        className="h-80 w-80 md:h-[500px] md:w-[500px]"
      />
      <button
        onClick={() => navigate("/")}
        className="py-2 px-5 bg-green-400 text-white focus:bg-green-500 hover:bg-green-500 cursor-pointer rounded-lg"
      >
        Go Back
      </button>
    </main>
  );
};

export default NotFound;
