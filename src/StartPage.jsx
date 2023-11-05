import { func } from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function StartPage() {
  const [rating, setRating] = useState(null);
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submitting", rating);
    navigate("/thank-you", { state: { rating } });
  }

  return (
    <section className="thank-you-page">
      <img src="/icon-star.svg" alt="Icon Star" />
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ol>
        {ratings.map((rating) => (
          <li key={rating}>
            <button onClick={() => setRating(rating)}>{rating}</button>
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <button disabled={!rating} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
