import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [state, handleSubmit] = useForm("mdkddear");

  if (state.succeeded) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-semibold text-green-600">Message Sent!</h2>
        <p className="mt-2 text-gray-700">Thanks for reaching out. We’ll respond shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24 pt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Let’s Connect</h2>
          <p className="mt-2 text-gray-600">
            Have a question, need a quote, or facing an urgent electrical issue?<br />
            Lumina Electric is here to help.
          </p>
        </div>

        {/* Contact Details + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
          {/* Left Side: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">We usually respond within 1 business day.</p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-600" />
              <span className="text-gray-700">Phone: <a href="tel:7705602596" className="text-orange-600 font-medium">(770) 560-2596</a></span>
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-gray-600" />
              <span className="text-gray-700">Email: <a href="mailto:info@luminaelectric.com" className="text-orange-600 font-medium">info@luminaelectric.com</a></span>
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <span className="text-gray-700">Address: Stonecrest, GA</span>
            </p>

            <p className="flex items-center gap-2">
              <FaClock className="text-gray-600" />
              <span className="text-gray-700">Hours: Mon–Fri: 8am–6pm | Emergencies: 24/7</span>
            </p>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-orange-600 text-white font-medium py-3 px-6 rounded-md hover:bg-orange-700 transition"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

