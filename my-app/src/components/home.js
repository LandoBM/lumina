import React from 'react';
import { Zap, ShieldCheck, Clock, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/2024-07-03.jpg'; // or a hero image of electricians

const Home = () => {
  return (
    <div className="pt-18">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <img src={heroImg} alt="Lumina Electric Logo" className="mx-auto mb-6 w-52 md:w-64" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Powering Your World, One Wire at a Time</h1>
          <p className="text-lg text-gray-300 mb-6">
            Residential, Commercial, and Emergency Electrical Services You Can Trust.
          </p>
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow">
              Request a Quote
            </button>
          </Link>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Zap className="text-orange-600 mx-auto mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">Electrical Repairs</h3>
            <p className="text-gray-600">Fast, safe solutions for outages, wiring issues, and circuit problems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <ShieldCheck className="text-orange-600 mx-auto mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">Panel Upgrades</h3>
            <p className="text-gray-600">Modernize your electrical system for better safety and efficiency.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Clock className="text-orange-600 mx-auto mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
            <p className="text-gray-600">We’re on call when you need us most — day or night.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/services">
            <button className="text-orange-600 hover:underline font-semibold">
              Explore All Services →
            </button>
          </Link>
        </div>
      </section>

      {/* Why Choose Lumina */}
      <section className="bg-white py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Lumina Electric?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <ShieldCheck className="text-orange-500 mx-auto mb-2" size={32} />
            <h4 className="font-semibold text-lg mb-1">Licensed & Insured</h4>
            <p className="text-sm text-gray-600">We meet every safety code and standard to protect your property.</p>
          </div>
          <div>
            <Clock className="text-orange-500 mx-auto mb-2" size={32} />
            <h4 className="font-semibold text-lg mb-1">On-Time Guarantee</h4>
            <p className="text-sm text-gray-600">We show up when we say we will — no excuses, no delays.</p>
          </div>
          <div>
            <PhoneCall className="text-orange-500 mx-auto mb-2" size={32} />
            <h4 className="font-semibold text-lg mb-1">Local & Friendly</h4>
            <p className="text-sm text-gray-600">We treat every home and customer with care and professionalism.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 text-white py-14 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Electrical Help?</h2>
        <p className="text-lg mb-6">Let Lumina Electric light the way. Get started with a free quote today.</p>
        <Link to="/contact">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
