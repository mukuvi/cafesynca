import "./App.css";
import { Club } from "./Pages/Club";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-[#f9f6f0]">
        <Routes>
          <Route path="/club" element={<Club />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
