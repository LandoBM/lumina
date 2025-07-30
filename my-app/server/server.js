// server.js or /api/reviews.js if using Next.js API Routes
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3001;

app.get("/api/reviews", async (req, res) => {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    const fiveStarReviews = data.result.reviews.filter(
      (review) => review.rating === 5
    );

    res.json(fiveStarReviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
