import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookCircleLine, RiTwitterXLine } from "react-icons/ri";
import { TbFilePhone } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* newsletter */}
        <div>
          <h3 className="text-lg text-fabriq-red mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Get the latest updates on new arrivals and exclusive offers.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fabriq-red"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 mt-2 text-white bg-fabriq-red rounded-md hover:bg-fabriq-red focus:outline-none focus:ring-2 focus:ring-fabriq-red"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* categories links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Bottom wear
              </Link>
            </li>
          </ul>
        </div>

        {/* support links */}
        <div>
          <h3 className="text-lg text-grey-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Returns
              </Link>
            </li>
          </ul>
        </div>
        {/* follow us */}
        <div>
          <h3 className="text-lg text-grey-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="#"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <RiFacebookCircleLine className="h-5 w-5 text-gray-800" />
            </a>
            <a
              href="#"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <IoLogoInstagram className="h-5 w-5 text-gray-800" />
            </a>
            <a
              href="#"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <RiTwitterXLine className="h-5 w-5 text-gray-800" />
            </a>
          </div>
          <p className="text-gray-500 ">call us</p>
          <div className="flex items-center space-x-2">
            <TbFilePhone className="h-5 w-5 text-gray-800" />
            <p className="text-gray-500">+91 1234567890</p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 ">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          © 2024 Fabriq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
