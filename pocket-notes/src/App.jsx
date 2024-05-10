//root app which passes homepage and notespage from pages
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import { useWidth } from "./context/WidthContext";

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
