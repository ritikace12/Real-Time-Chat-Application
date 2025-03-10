import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage"; // Make sure you create this file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
};

export default App;



