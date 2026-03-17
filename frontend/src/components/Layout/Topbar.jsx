import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";

function Topbar() {
  return (
    <div className="bg-fabriq-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-3">
        <div className="flex items-center space-x-4 hidden md:flex">
          <a href="#" className="hover: text-gray-300"></a>
          <TbBrandMeta className=" h-5 w-5 text-2xl" />

          <a href="#" className="hover: text-gray-300"></a>
          <IoLogoInstagram className=" h-5 w-5 text-2xl" />

          <a href="#" className="hover: text-gray-300"></a>
          <RiTwitterLine className=" h-5 w-5 text-2xl" />
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Free shipping on orders over $50</span>
        </div>
        <div className="text-sm hover:text-gray-300 hidden md:block">
          <a href="tel:+1234567890">Call us: +1 (234) 567-890</a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
