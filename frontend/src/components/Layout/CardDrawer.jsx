import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CardContent } from "../index";

function CardDrawer({ isOpen, toggleDrawer }) {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Card Drawer Content */}
      <div className="flex-grow p-4 overflow-y-auto ">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {/* Component for card items */}
        <CardContent />
      </div>

      {/* Checkout Button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-fabriq-red text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping,taxes and discount codes will be calculated at checkout.
        </p>
      </div>
    </div>
  );
}

export default CardDrawer;
