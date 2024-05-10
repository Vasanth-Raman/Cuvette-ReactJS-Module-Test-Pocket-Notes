// In this notes page, it shows all the groups in left area and notes in right area
import React from "react";
import NotesArea from "../components/NotesArea/NotesArea";
import AllGroup from "../components/AllGroup/AllGroup";

export default function NotesPage() {
  return (
    <AllGroup>
      <NotesArea />
    </AllGroup>
  );
}
