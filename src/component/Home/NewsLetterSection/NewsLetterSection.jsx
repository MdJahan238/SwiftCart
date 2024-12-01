import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear the input field
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">
          Get the latest updates on new products, sales, and more!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-1/3 px-4 py-3 text-gray-700"
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>

        {message && (
          <p className="mt-4 text-lg font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSection;
