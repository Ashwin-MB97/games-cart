import React, { useState } from "react";
import { useSelector } from "react-redux";

const Genre = () => {
  const { games } = useSelector((state) => state.games);
  const genre = [...new Set(games.flatMap((game) => game.genre))].sort();
  const [buttonClickIndex, setButtonClickIndex] = useState(null);
  const { theme } = useSelector((state) => state.theme);

  return (
    <section className="flex items-center justify-center gap-2 md:gap-5 my-5 flex-wrap">
      {genre.map((genre, index) => {
        return (
          <button
            onClick={() => setButtonClickIndex(index)}
            key={index}
            className={`bg-transparent py-1 px-3 md:py-2 md:px-5 border rounded-lg  outline-none ${
              theme === "dark"
                ? "border-[#3C3C3C] hover:bg-emerald-400 focus:bg-emerald-400"
                : "border-[#E0E0E0] hover:bg-black hover:text-white focus:text-white focus:bg-black"
            } ${
              buttonClickIndex === index
                ? `bg-[#9B59B6] text-white border-none`
                : ``
            }`}
          >
            {genre}
          </button>
        );
      })}
    </section>
  );
};

export default Genre;
