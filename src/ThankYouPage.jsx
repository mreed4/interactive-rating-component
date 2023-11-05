import { useLocation } from "react-router";

export default function ThankYouPage() {
  const { state } = useLocation();
  const { rating } = state;

  return (
    <section className="start-page">
      <img src="/illustration-thank-you.svg" alt="Illustration Thank You" />
      <p>You selected {rating} out of 5</p>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </section>
  );
}
