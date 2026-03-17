import React from "react";
import heroImg from "../../assets/hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="fabriq-hero-image"
        className="w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover"
      />
      <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-9xl lg:text-9xl font-bold tracking-tighter uppercase mb-4">
            Fabriq
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore the world of fashion with Fabriq - your ultimate destination
            for trendy and stylish clothing. Discover the latest fashion trends,
            shop for your favorite brands, and express your unique style with
            Fabriq.
          </p>
          <Link to="#" className="bg-white text-gray-800 hover:bg-gray-200 font-bold py-2 px-4 rounded">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
