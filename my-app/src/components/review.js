import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jasmine T.',
    rating: 5,
    text: 'Lumina Electric saved the day! We had a full outage and they were at our house in under an hour. Super professional.',
  },
  {
    name: 'Carlos M.',
    rating: 4,
    text: 'The team was polite, efficient, and answered all my questions. The panel upgrade was fast and clean.',
  },
  {
    name: 'Devon S.',
    rating: 5,
    text: 'From scheduling to the final install, everything was smooth. Definitely my go-to electricians in Atlanta.',
  },
  {
    name: 'Nina R.',
    rating: 5,
    text: 'They installed all our kitchen lighting and it looks amazing. Honest pricing, no hidden fees.',
  },
  {
    name: 'Liam K.',
    rating: 4,
    text: 'I appreciate their communication and fast service. Would recommend to anyone needing electric work.',
  },
];

const ReviewCard = ({ name, rating, text }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={i} size={16} className="text-gray-300" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-3">"{text}"</p>
      <p className="text-sm font-medium text-gray-900">— {name}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gray-100 text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real reviews from homeowners and businesses across Metro Atlanta.
        </p>
      </section>

      {/* Review Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
