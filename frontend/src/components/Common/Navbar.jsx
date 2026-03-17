import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUserCircle,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";

import { CardDrawer, SearchBar } from "../index";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium text-gray-800">
            Fabriq
          </Link>
        </div>
        {/* center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        {/* right - Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUserCircle className="h-7 w-7 text-gray-700" />
          </Link>
          <button onClick={toggleDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-fabriq-red text-white text-xs rounded-full px-2 py-0.5 ">
              4
            </span>
          </button>
          {/* search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          {/* navbutton for small screens */}
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      {/* card drawer */}
      <CardDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Navbar;
