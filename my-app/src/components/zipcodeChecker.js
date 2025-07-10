import React, { useState } from "react";

const supportedZips = [
  "30301",
  "30303",
  "30305",
  "30306",
  "30030",
  "30032",
  "30033",
  "30060",
  "30062",
  "30328",
  "30338",
  "30083",
  "30058",
  "30096",
  "30093",
];

const ZipCodeChecker = () => {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (zip.length === 5 && /^\d+$/.test(zip)) {
      const isSupported = supportedZips.includes(zip);
      setResult(isSupported ? "supported" : "unsupported");
    } else {
      setResult("invalid");
    }
  };

  return (
    <div className="mt-16 max-w-md mx-auto bg-white p-6 rounded-xl shadow text-center">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        Check Your ZIP Code
      </h3>
      <p className="text-gray-600 mb-4">
        Enter your ZIP to see if we service your area.
      </p>
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter ZIP code"
          className="border rounded-lg px-4 py-2 w-40 text-center focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={handleCheck}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          Check
        </button>
      </div>

      {result === "supported" && (
        <p className="text-green-600 font-semibold mt-4">
          ✅ Yes! We serve your area.
        </p>
      )}
      {result === "unsupported" && (
        <div className="mt-4 text-red-600 font-semibold">
          <p>❌ Sorry, we don't currently service this ZIP.</p>
          <p className="text-sm mt-2 font-normal text-gray-700">
            Still not sure?{" "}
            <a
              href="/contact"
              className="text-orange-600 underline hover:text-orange-700"
            >
              Contact us
            </a>{" "}
            — we may be able to help!
          </p>
        </div>
      )}

      {result === "invalid" && (
        <p className="text-yellow-600 font-semibold mt-4">
          ⚠️ Please enter a valid 5-digit ZIP code.
        </p>
      )}
    </div>
  );
};

export default ZipCodeChecker;
