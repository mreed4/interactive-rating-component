import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "./StartPage";
import ThankYouPage from "./ThankYouPage";

import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
