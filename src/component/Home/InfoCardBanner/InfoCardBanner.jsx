import React from "react";

const InfoCardBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12">
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Platform</h1>
        <p className="text-lg mb-12">
          Discover what makes us unique and why you should choose us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card bg-white text-gray-800 shadow-md p-6 rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                Innovative Solutions
              </h2>
              <p className="mt-4">
                We provide cutting-edge solutions tailored to meet your needs.
              </p>
              <button className="btn btn-primary mt-6">Learn More</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white text-gray-800 shadow-md p-6 rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                Expert Support
              </h2>
              <p className="mt-4">
                Our team of experts is available 24/7 to help you succeed.
              </p>
              <button className="btn btn-secondary mt-6">Contact Us</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white text-gray-800 shadow-md p-6 rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                Trusted by Thousands
              </h2>
              <p className="mt-4">
                Join a growing community of satisfied customers worldwide.
              </p>
              <button className="btn btn-accent mt-6">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardBanner;
