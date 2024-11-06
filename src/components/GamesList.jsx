import React from "react";
import { useSelector } from "react-redux";

const GamesList = () => {
  const { games } = useSelector((state) => state.games);
  const { theme } = useSelector((state) => state.theme);
  return (
    <section className="flex flex-wrap items-center justify-center gap-5 mt-10">
      {games.map((game, index) => {
        return (
          <article
            key={index}
            className={`bg-transparent border w-80 h-80 rounded-lg p-5 ${
              theme === "dark" ? "border-[#3C3C3C]" : "border-[#E0E0E0]"
            }`}
          >
            <img
              className="h-3/5 w-full object-contain rounded-lg"
              src={game.image}
              alt=""
            />
            <h2 className="text-xl font-semibold">{game.title}</h2>
            <h2 className="text-xl font-semibold">&#8377; {game.price}</h2>
            <button
              className={` mt-5 bg-transparent border py-1 px-3 md:py-2 md:px-5 rounded-lg ${
                theme === "dark"
                  ? "border-[#3C3C3C] hover:bg-teal-600 focus:bg-teal-600"
                  : "border-[#E0E0E0] hover:bg-black hover:text-white focus:text-white focus:bg-black"
              }`}
            >
              Add to Cart
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default GamesList;
