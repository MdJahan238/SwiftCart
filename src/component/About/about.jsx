import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-primary">About Us</h1>
        <p className="py-6 text-lg text-neutral">
          Welcome to our ecommerce platform! We are passionate about bringing you high-quality
          products and an exceptional online shopping experience.
        </p>
      </div>

      <div className="my-12">
        <div className="card bg-base-100 shadow-xl mx-auto max-w-4xl">
          <div className="card-body">
            <h2 className="card-title text-secondary">Our Purpose</h2>
            <p>
              Our mission is to make online shopping seamless, enjoyable, and accessible to everyone.
              We believe in providing exceptional value and unparalleled service.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="card bg-base-100 shadow-xl mx-auto max-w-4xl">
          <div className="card-body">
            <h2 className="card-title text-secondary">Our Story</h2>
            <p>
              Founded in 2020, we started as a small team with big dreams. Over the years, we've grown into a
              trusted brand known for quality products and excellent customer service.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">John Doe</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Jane Smith</h3>
              <p>Chief Marketing Officer</p>
            </div>
          </div>
          <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Alex Johnson</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;