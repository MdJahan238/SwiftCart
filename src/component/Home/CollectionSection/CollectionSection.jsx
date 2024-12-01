import React from "react";

const CollectionSection = () => {
  const collections = [
    {
      id: 1,
      name: "Electronics",
      image: "https://via.placeholder.com/300?text=Electronics",
      description: "Latest gadgets and devices.",
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://via.placeholder.com/300?text=Fashion",
      description: "Trendy apparel and accessories.",
    },
    {
      id: 3,
      name: "Home Decor",
      image: "https://via.placeholder.com/300?text=Home+Decor",
      description: "Beautiful decor for every room.",
    },
    {
      id: 4,
      name: "Sports & Fitness",
      image: "https://via.placeholder.com/300?text=Sports+%26+Fitness",
      description: "Gear and equipment for an active lifestyle.",
    },
    {
      id: 5,
      name: "Beauty & Health",
      image: "https://via.placeholder.com/300?text=Beauty+%26+Health",
      description: "Skincare, cosmetics, and wellness products.",
    },
    {
      id: 6,
      name: "Toys & Games",
      image: "https://via.placeholder.com/300?text=Toys+%26+Games",
      description: "Fun for kids and adults alike.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Collections</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
              <p className="text-gray-600 mb-4">{collection.description}</p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
