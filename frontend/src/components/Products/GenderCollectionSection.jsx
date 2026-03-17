import React from "react";
import menscollection from "../../assets/mens-collection.webp";
import womencollection from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

function GenderCollectionSection() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center relative">
            <img
              src={menscollection}
              alt="Men's Collection"
              className="w-full h-[700px] rounded-lg shadow-lg"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Men's Collection</h3>
              <p className="text-gray-600 mb-4">
                Discover our latest men's fashion collection.
              </p>
              <Link
                to="/collection/all?gender=men"
                className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-fabriq-red transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src={womencollection}
              alt="Women's Collection"
              className="w-full h-[700px] rounded-lg shadow-lg"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Women's Collection</h3>
              <p className="text-gray-600 mb-4">
                Discover our latest women's fashion collection.
              </p>
              <Link
                to="/collection/all?gender=women"
                className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-fabriq-red transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenderCollectionSection;
