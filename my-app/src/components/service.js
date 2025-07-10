import React from 'react';
import ZipCodeChecker from './zipcodeChecker'; // Adjust the import path as needed
import {
  Zap,
  ShieldCheck,
  Wrench,
  Plug,
  Home,
  Building2,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Electrical Repairs',
    description: 'From outlets to full system failures, we troubleshoot and repair with speed and safety.',
    icon: <Wrench size={32} className="text-orange-600" />,
  },
  {
    title: 'Panel Upgrades',
    description: 'Modernize your breaker box and protect your home with efficient energy flow.',
    icon: <ShieldCheck size={32} className="text-orange-600" />,
  },
  {
    title: 'Emergency Services',
    description: 'Day or night, we’re ready to fix outages and dangerous faults 24/7.',
    icon: <Zap size={32} className="text-orange-600" />,
  },
  {
    title: 'Lighting Installation',
    description: 'Interior and exterior lighting solutions designed for safety, mood, and efficiency.',
    icon: <Plug size={32} className="text-orange-600" />,
  },
  {
    title: 'Residential Services',
    description: 'Wiring, inspections, remodeling support, and energy efficiency for your home.',
    icon: <Home size={32} className="text-orange-600" />,
  },
  {
    title: 'Commercial Projects',
    description: 'From offices to warehouses, we handle installations and compliance with code.',
    icon: <Building2 size={32} className="text-orange-600" />,
  },
];

const serviceAreas = [
  'Atlanta',
  'Decatur',
  'Marietta',
  'Sandy Springs',
  'Brookhaven',
  'Stone Mountain',
  'Lithonia',
  'Duluth',
  'Norcross',
];

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gray-100 text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Electrical Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you need a quick repair, a full system upgrade, or new installation — Lumina Electric has you covered.
        </p>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <MapPin size={36} className="text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Proudly Serving Metro Atlanta</h2>
          <p className="text-lg text-gray-600 mb-6">Lumina Electric operates across the greater Atlanta area, including:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium">
            {serviceAreas.map((area, index) => (
              <li key={index} className="bg-white p-3 rounded shadow-sm">{area}</li>
            ))}
          </ul>
        </div>
      </section>
      {/* Zip Code Checker */}
      <ZipCodeChecker />

      {/* Call to Action */}
      <section className="bg-orange-500 text-white text-center py-14 px-4">
        <h2 className="text-3xl font-bold mb-4">Need a Licensed Electrician?</h2>
        <p className="text-lg mb-6">Our experienced team is ready to get to work — no job too big or small.</p>
        <Link to="/contact">
          <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 shadow">
            Contact Us Today
          </button>
        </Link>
      </section>
    </div>
  );
};





export default Services;



