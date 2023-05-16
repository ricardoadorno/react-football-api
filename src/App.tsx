import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:id" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}
