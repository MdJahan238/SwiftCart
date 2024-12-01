import React from "react";

const BannerSlider = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://via.placeholder.com/1920x600?text=Slide+1"
          alt="Slide 1"
          className="w-full"
        />
        <div className="absolute flex justify-center items-center h-full w-full bg-opacity-50 bg-black">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
            <p className="mt-4 text-lg">
              Discover the best products at unbeatable prices.
            </p>
            <button className="btn btn-primary mt-6">Shop Now</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://via.placeholder.com/1920x600?text=Slide+2"
          alt="Slide 2"
          className="w-full"
        />
        <div className="absolute flex justify-center items-center h-full w-full bg-opacity-50 bg-black">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Exclusive Offers</h1>
            <p className="mt-4 text-lg">
              Enjoy great discounts on your favorite products.
            </p>
            <button className="btn btn-secondary mt-6">Explore Deals</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://via.placeholder.com/1920x600?text=Slide+3"
          alt="Slide 3"
          className="w-full"
        />
        <div className="absolute flex justify-center items-center h-full w-full bg-opacity-50 bg-black">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Join Our Community</h1>
            <p className="mt-4 text-lg">
              Sign up for the latest updates and exclusive content.
            </p>
            <button className="btn btn-accent mt-6">Sign Up</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
