import React from "react";
import Link from "gatsby-link";
import avatar from "../images/avatar.svg";

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <div className="border-b">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-8">
        <Link to="/" className="flex items-center no-underline text-black font-mono"> 

          <span className="font-bold text-xl">
            tb
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-sm">
            <Link
              to="/"
              className="bg-teal block font-bold mt-4 md:inline-block md:mt-0 mr-6 px-4 py-2 no-underline text-white uppercase"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="bg-blue block font-bold md:inline-block mt-4 md:mt-0 mr-6 px-4 py-2 no-underline text-white uppercase"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="bg-orange block font-bold md:inline-block mt-4 md:mt-0 px-4 py-2 no-underline text-white uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
