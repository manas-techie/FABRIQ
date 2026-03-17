import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiDivide } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrival() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const newArriival = [
    {
      _id: "1",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=2",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=3",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=4",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=5",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=6",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=7",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=8",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=9",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=10",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=11",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=12",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=13",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=14",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=15",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=16",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=17",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=18",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=19",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=20",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=21",
          altText: "Stylish jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish jacket",
      price: "100",
      images: [
        {
          url: "https://picsum.photos/200?random=22",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=23",
          altText: "Stylish jacket",
        },
        {
          url: "https://picsum.photos/200?random=24",
          altText: "Stylish jacket",
        },
      ],
    },
  ];

  const updateScrollButton = () => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const leftScroll = scrollContainer.scrollLeft;
      const rightScrollAble =
        scrollContainer.scrollWidth > leftScroll + scrollContainer.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollAble);
    }
  };

  const handleMouseDown = () => {
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = e.movementX;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseLeave = () => {
    scrollRef.current.style.cursor = "grab";
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollButton);
    }
  }, []);
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore new arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest trends and styles in our new arrivals collection.
        </p>

        {/* scrollable content with overlay buttons */}
        <div className="relative">
          {/* left scroll button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white text-black shadow-md transition ${!canScrollLeft ? "bg-gray-400 cursor-not-allowed" : ""}`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* right scroll button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white text-black shadow-md transition ${!canScrollRight ? "bg-gray-400 cursor-not-allowed" : ""}`}
          >
            <FiChevronRight className="text-2xl" />
          </button>

          <div
            ref={scrollRef}
            className="container mx-auto overflow-x-scroll flex space-x-6 relative snap-x snap-mandatory pb-4"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {newArriival.map((product) => (
              <div
                key={product._id}
                className="w-full sm:w-[50%] md:w-[33.333%] lg:w-[25%] xl:w-[20%] shrink-0 relative snap-start rounded-lg overflow-hidden aspect-3/4"
              >
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute bottom-0 right-0 left-0 bg-black/50 backdrop-blur-md text-white p-4 rounded-b-lg">
                  <Link to={`/product/${product._id}`} className="block">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-300">₹{product.price}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
