//text area where button gets enabled when text present in text area
import React, { useState } from "react";
import styles from "./TextArea.module.css";
import ArrowBtn from "../ArrowBtn";

export default function TextArea({ insertNote }) {
  //state to manage note entered in textarea
  const [note, setNote] = useState("");

  //when sendbtn is clicked the newnote entered is paased to insert along with date&time
  const handleNoteSubmit = () => {
    const timestamp = new Date();
    const newNote = {
      content: note,
      date:
        timestamp.toLocaleDateString("en-US", { day: "numeric" }) +
        " " +
        timestamp.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    insertNote(newNote);
    setNote("");
  };
  return (
    <div className={styles.textArea}>
      <div className={styles.inputBox}>
        <textarea
          name="note"
          id="note"
          placeholder="Enter your text here........"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
        <div
          className={styles.sendButton}
          style={{ pointerEvents: note.length > 0 ? "auto" : "none" }}
          onClick={handleNoteSubmit}
        >
          <ArrowBtn disabled={!(note.length > 0)} />
        </div>
      </div>
    </div>
  );
}
