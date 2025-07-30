import React, { useEffect, useState } from "react";

const GOOGLE_PLACE_ID = "YOUR_PLACE_ID_HERE";  // replace with your Google Place ID
const API_KEY = "";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.result && data.result.reviews) {
        const fiveStarReviews = data.result.reviews.filter(
          (review) => review.rating === 5
        );
        setReviews(fiveStarReviews);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Real reviews from homeowners and businesses across Metro Atlanta.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {reviews.map(({ author_name, text, rating }, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.371-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.956z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">"{text}"</p>
            <p className="font-semibold">— {author_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

