import React from 'react';
import { ShieldCheck, Bolt, Users } from 'lucide-react';
import electricianImage from '../assets/IMG_8879.JPG'; // Adjust the path as necessary

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-10 py-16 pt-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600">About Lumina Electric</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Powering homes, businesses, and communities with precision, pride, and a spark of innovation.
        </p>
      </div>

      {/* Main Content with Image */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Image */}
        <img
          src={electricianImage} // Electrician stock photo
          alt="Electricians at work"
          className="rounded-xl shadow-md w-full h-auto object-cover"
        />

        {/* Text Content */}
        <div>
          <p className="text-lg leading-relaxed">
            At Lumina Electric, we don’t just fix wires we empower lives. Our team of certified
            electricians bring years of experience, cutting-edge tools, and a passion for reliable
            service to every project. From emergency repairs to full electrical builds, we’re known
            for showing up on time, doing the job right, and standing behind our work.
            <br /><br />
            With a commitment to safety and sustainability, we help homes and businesses across
            the region stay lit, connected, and future-ready. Whether you're renovating, building,
            or upgrading. Lumina Electric is your trusted partner for every spark that matters.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <ShieldCheck size={40} className="text-orange-600 mb-2" />
          <h3 className="text-xl font-semibold mb-1">Licensed & Insured</h3>
          <p className="text-sm text-gray-600">Your safety is our priority. We follow all codes and standards.</p>
        </div>
        <div className="flex flex-col items-center">
          <Bolt size={40} className="text-orange-600 mb-2" />
          <h3 className="text-xl font-semibold mb-1">Reliable Service</h3>
          <p className="text-sm text-gray-600">On time. On point. Every time.</p>
        </div>
        <div className="flex flex-col items-center">
          <Users size={40} className="text-orange-600 mb-2" />
          <h3 className="text-xl font-semibold mb-1">Community Driven</h3>
          <p className="text-sm text-gray-600">Locally owned, serving our neighbors with pride.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

