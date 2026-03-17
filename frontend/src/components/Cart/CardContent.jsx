import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function CardContent() {
  const cartItems = [
    {
      ProductId: 1,
      name: "Product 1",
      size: "M",
      color: "Red",
      price: 10,
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      ProductId: 2,
      name: "Product 2",
      size: "L",
      color: "Blue",
      price: 20,
      quantity: 2,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartItems.map((item) => (
        <div
          key={item.ProductId}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                size: {item.size} | color: {item.color}
              </p>
              <div className="flex items-center mt-2  ">
                <button className="border rounded px-2 py-1 text-medium font-medium">
                  +
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button className="border rounded px-2 py-1 text-medium font-medium">
                  -
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">₹{item.price}</p>
            <button>
              <RiDeleteBin6Line className="h-6 w-6 mt-4 sm:w-8 sm:h-8 text-fabriq-red hover:text-red-600 transition-colors" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContent;
