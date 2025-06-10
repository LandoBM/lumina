const Review = ({ review }) => {
  return (
    <div className="review">
      <h3>{review.title}</h3>
      <p>{review.content}</p>
      <p><strong>Rating:</strong> {review.rating} stars</p>
      <p><em>By: {review.author}</em></p>
    </div>
  );
}
const Reviews = () => {
  const reviews = [
    {
      title: "Excellent Service",
      content: "Lumina Electric provided outstanding service for our home renovation. Highly recommend!",
      rating: 5,
    }
    ,
    {
      title: "Professional and Reliable",
      content: "The team was professional, punctual, and did a great job. Will use them again for future projects.",
      rating: 4,
    }
    ,
    {
      title: "Great Experience",
      content: "Had a great experience with Lumina Electric. They were knowledgeable and fixed our electrical issues quickly.",
      rating: 5,
    }
    ,
    {
      title: "Satisfactory Work",
      content: "The work was satisfactory, but there were some delays in the project timeline.",
      rating: 3,
    }
    ,
    {
      title: "Good Value",
      content: "Good value for the price. The team was friendly and did a decent job.",
      rating: 4,
    }
  ];
  return (
    <div className="reviews">
      <h1>Customer Reviews</h1>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
}
export default Reviews;