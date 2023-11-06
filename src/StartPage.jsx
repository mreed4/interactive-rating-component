import { func } from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function StartPage() {
  const [rating, setRating] = useState(null);
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);
  const [selectedButton, setSelectedButton] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submitting", rating);
    navigate("/thank-you", { state: { rating } });
  }

  async function handleClick(event) {
    const { id } = event.target;
    console.log("Clicked", id);
    setRating(id);
    console.log("Rating", rating);
    setSelectedButton(id);
    console.log("Selected Button", selectedButton);
  }

  return (
    <section className="start-page">
      <div className="star-container">
        <img src="/icon-star.svg" alt="Icon Star" className="icon-star" />
      </div>
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ol>
        {ratings.map((rating, i) => (
          <li key={rating}>
            <button
              onClick={(event) => handleClick(event)}
              className={`rating-button ${selectedButton === String(i + 1) ? "selected" : null}`}
              type="button"
              id={i + 1}>
              {rating}
            </button>
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
