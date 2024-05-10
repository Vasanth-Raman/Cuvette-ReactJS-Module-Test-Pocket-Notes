// single pieces of notes in notes area with date n time :)
import React from "react";
import styles from "./SingleNote.module.css";

export default function SingleNote({ content, date, time }) {
  return (
    <div className={styles.noteSlip}>
      <p>{content}</p>
      <div className={styles.dateTime}>
        <p>
          {date}&nbsp; <span>&#8226;</span> &nbsp;{time}
        </p>
      </div>
    </div>
  );
}
