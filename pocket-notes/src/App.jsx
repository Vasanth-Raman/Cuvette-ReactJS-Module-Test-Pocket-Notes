import React from "react"; // importing react
import "./App.css"; //importing styles
import { Routes, Route } from "react-router-dom"; // importing routes
import HomePage from "./pages/HomePage"; // importing homepage
import NotesPage from "./pages/NotesPage"; // importing notes page
import { useWidth } from "./context/widthContext"; // for width and responsiveness

function App() {
  const screenWidth = useWidth();
  if (screenWidth >= 767 && screenWidth < 1400) {
    return <div></div>;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes/:groupId" element={<NotesPage />} />
    </Routes>
  );
}

export default App;
