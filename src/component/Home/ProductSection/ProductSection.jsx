import React, { useState } from "react";

const ProductSection = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/300",
      rating: 4.5,
      price: "$49.99",
      description: "High-quality product with excellent features.",
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/300",
      rating: 3,
      price: "$29.99",
      description: "Affordable and reliable product.",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/300",
      rating: 5,
      price: "$69.99",
      description: "Premium product for discerning customers.",
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://via.placeholder.com/300",
      rating: 2.5,
      price: "$19.99",
      description: "Budget-friendly with essential features.",
    },
    {
      id: 5,
      name: "Product 5",
      image: "https://via.placeholder.com/300",
      rating: 4,
      price: "$39.99",
      description: "Great value for money with excellent quality.",
    },
    {
      id: 6,
      name: "Product 6",
      image: "https://via.placeholder.com/300",
      rating: 3.5,
      price: "$59.99",
      description: "A well-rounded product for everyday use.",
    },
  ];

  const handleBuyNow = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="card bg-white shadow-md rounded-lg">
            <img src={product.image} alt={product.name} className="rounded-t-lg" />
            <div className="card-body p-6">
              <h3 className="card-title text-xl font-semibold">{product.name}</h3>
              <p className="text-yellow-500 mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i + 0.5 < product.rating
                      ? "★"
                      : i < product.rating
                      ? "★"
                      : "☆"}
                  </span>
                ))}
              </p>
              <p className="text-lg font-bold text-gray-800">{product.price}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button
                className="btn btn-primary"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Count Display */}
      <div className="fixed top-4 right-4">
        <div className="bg-red-500 text-white p-2 rounded-full flex items-center space-x-2">
          <span className="text-lg font-bold">{cartCount}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5 21h14l-2-8H7z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
