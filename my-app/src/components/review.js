import React from "react";

const mockReviews = [
  {
    name: "Daniel Morris",
    rating: 5,
    text: "I recently hired Daniel to install a new light fixture and several outlets in my home, and I couldn't be happier with the service provided. From start to finish, Daniel was professional, punctual, and highly skilled. The installation process was smooth and efficient. Daniel took the time to explain the steps involved and ensured that everything was done to code. The new light fixture looks fantastic and has greatly improved the ambiance of the room. The outlets were installed perfectly, providing much-needed access to power in convenient locations. What impressed me the most was Daniel's attention to detail and commitment to quality. He made sure to clean up after the job was done, leaving no mess behind. Additionally, Daniel was friendly and approachable, making the entire experience pleasant. I highly recommend Daniel for any electrical work. His expertise and dedication to customer satisfaction are truly commendable. I will definitely be calling him for any future electrical needs.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg", // white male
  },
  {
    name: "Jamal W.",
    rating: 5,
    text: "Daniel was incredibly helpful in fixing my power connector. He was honest, respectful, and very diligent. He arrived at my house the same day and completed the task efficiently. Great job, Daniel! Thank you very much.",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg", // Black male
  },
  {
    name: "Dede Kazmi",
    rating: 5,
    text: "Daniel is an outstanding incredibly smart electrical professional. He is punctual , extremely knowledgeable efficient & reasonably priced. Daniel initially came out to do the electrical diagnostics for me but at my request he agreed to replace & install new ceiling fans for me. It took me more than hour and a half to come back from the stores with new ceiling fans, while Daniel waiting patiently for my return. I praise Daniel for showing so much compassion & dedication towards his customers & work. I highly & truly recommend Daniel for all kind of electrical work. He deserves a five star review. I appreciate you very much Daniel. Thank You.",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg", // South Asian or Middle Eastern woman look
  },
  {
    name: "Geneva Peterson",
    rating: 5,
    text: "This company was definitely a God-send! Daniel responded to my need immediately and was very candid about everything. His quote was very reasonable and he guarantees his work! I’m so grateful to God for sending someone who doesn’t take advantage of the elderly. Thank you Daniel for your integrity and service. May God bless you even the more!! Geneva Peterson",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg", // Black older woman
  },
  {
    name: "Gabston Nip",
    rating: 5,
    text: "Daniel is a knowledgeable expert and a dedicated professional in his field. On two occasions, he proactively ensured that I had the appropriate parts needed for my project. He identified issues that were not his responsibility and took the initiative to resolve them without being prompted. His exemplary attention to detail and commitment to customer satisfaction are commendable, and I believe we could benefit from more individuals like him in the industry. I highly recommend his services.",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg", // East Asian male
  },
  {
    name: "Taylor Heard",
    rating: 5,
    text: "Daniel came out to troubleshoot and fix some electrical issues in my new house and he installed an entirely new outlet in my garage. He was awesome and did great work. He was extremely helpful and thorough. I can’t recommend him enough. I will absolutely be a repeat customer and will refer all of my friends and family.",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg", // Black male
  },

];

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          What Our Customers Are Saying
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Real feedback from real customers across Metro Atlanta.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {mockReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={`Avatar of ${review.name}`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>

              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.371-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.956z" />
                  </svg>
                ))}
              </div>

              <p className="italic text-gray-700">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center bg-gray-100 p-6 rounded-xl shadow-inner">
  <p className="text-lg font-medium text-gray-800">
    Have we worked with you recently?
  </p>
  <p className="text-gray-600 mt-1">
    We’d love to hear your feedback! Please leave us a review on Google.
  </p>
  <a
    href="https://www.google.com/search?q=lumina+electric&oq=lumina+el&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyBwgCEAAYgAQyCggDEC4YgAQY5QQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDI0MThqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition"
  >
    Leave a Google Review
  </a>
</div>

    </section>
  );
}

