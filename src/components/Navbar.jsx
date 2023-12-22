import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap navbar p-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            ElektroMart
          </span>
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block  flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow navlink">
            <NavLink
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-xl text-white hover:text-white mr-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/newproduct"
              className="block mt-4 lg:inline-block lg:mt-0 text-xl text-white hover:text-white mr-4"
            >
              New Product
            </NavLink>
            <NavLink
              to="/productlist"
              className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-xl text-white hover:text-white"
            >
              Product List
            </NavLink>

            <NavLink
              to="/about"
              className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-xl text-white hover:text-white"
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
