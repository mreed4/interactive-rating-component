import { useState } from "react";

export default function StartPage() {
  const [rating, setRating] = useState(null);
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);

  return (
    <section className="thank-you-page">
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ol>
        {ratings.map((rating) => (
          <li key={rating}>
            <button onClick={() => setRating(rating)}>{rating}</button>
          </li>
        ))}
      </ol>
      <button disabled={!rating}>Submit</button>
    </section>
  );
}
