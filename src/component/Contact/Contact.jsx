import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-center mb-6">Contact Us</h2>
    <form id="contactForm" class="space-y-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          class="input input-bordered w-full"
          required
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          class="input input-bordered w-full"
          required
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Subject</span>
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          class="input input-bordered w-full"
          required
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Message</span>
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          class="textarea textarea-bordered w-full"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="btn btn-primary w-full"
      >
        Contact Now
      </button>
    </form>
  </div>
</div>

        </div>
    );
};

export default Contact;