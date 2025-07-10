import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would typically send data to a backend here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Let’s Connect</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Have a question, need a quote, or facing an urgent electrical issue? Lumina Electric is here to help.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-6 bg-white max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">We usually respond within 1 business day.</p>
          <div className="space-y-2 text-gray-700">
            <p><strong>📞 Phone:</strong> <a href="tel:1234567890" className="text-orange-600 hover:underline">(770) 560-2596</a></p>
            <p><strong>✉️ Email:</strong> <a href="mailto:info@luminaelectric.com" className="text-orange-600 hover:underline">info@luminaelectric.com</a></p>
            <p><strong>📍 Address:</strong> Stonecrest, GA</p>
            <p><strong>🕒 Hours:</strong> Mon–Fri: 8am–6pm | Emergencies: 24/7</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow"
          >
            Send Message
          </button>
          {submitted && <p className="text-green-600 font-medium mt-2">✅ Thank you! We’ll be in touch soon.</p>}
        </form>
      </section>
    </div>
  );
};

export default Contact;
