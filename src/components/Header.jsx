import React from "react";
import { SiGamedeveloper } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import { changeTheme } from "../redux/features/ThemeSlice";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { theme } = useSelector((state) => state.theme);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const showSearchBar = location.pathname === "/";

  const handleToggler = () => {
    let toggler = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(toggler));
  };
  return (
    <header>
      <nav className="flex items-center justify-between p-3 md:p-5 flex-wrap gap-5">
        <div className="flex items-center gap-5 order-1">
          <SiGamedeveloper
            size={25}
            color={theme === "dark" ? "#fff" : "#333"}
          />
          <h1 className="text-2xl font-bold">Game Cart</h1>
        </div>
        {showSearchBar && (
          <form className="order-3 md:order-2 mx-auto">
            <input
              className={`${
                theme === "dark" ? "border-[#3C3C3C]" : "border-[#E0E0E0]"
              } h-10 w-80 rounded-lg p-2 bg-transparent border`}
              name="game"
              type="text"
              placeholder="search games..."
            />
          </form>
        )}
        <div className="flex items-center gap-5 order-2 md:order-3">
          {theme === "dark" ? (
            <BsToggleOn
              onClick={handleToggler}
              size={25}
              color={theme === "dark" ? "#fff" : "#333"}
            />
          ) : (
            <BsToggleOff
              onClick={handleToggler}
              size={25}
              color={theme === "dark" ? "#fff" : "#333"}
            />
          )}
          <div className="flex gap-2">
            <FaCartShopping
              size={25}
              color={theme === "dark" ? "#fff" : "#333"}
            />
            <span>{cart.length}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
