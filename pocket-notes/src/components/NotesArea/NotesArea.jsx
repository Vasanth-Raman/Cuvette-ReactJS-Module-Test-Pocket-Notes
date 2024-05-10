// notes area where all the individual notes will be shown
import React, { useEffect, useState } from "react";
import styles from "./NotesArea.module.css";
import GroupIcon from "../GroupIcon/GroupIcon";
import sendArrow from "../../assets/images/bg-backarrow.svg";
import SingleNote from "../SingleNote/SingleNote";
import TextArea from "../TextArea/TextArea";
import { useWidth } from "../../context/WidthContext";
import { useParams, Link } from "react-router-dom";

export default function NotesArea() {
  const { groupId } = useParams();
  const screenWidth = useWidth();
  const [notes, setNotes] = useState([]);
  const [group, setGroup] = useState(null);
  const [groupError, setGroupError] = useState(false);

  // groupPresent ?
  useEffect(() => {
    setGroupError(false);
    const groupExist = JSON.parse(localStorage.getItem("groups")).find(
      (group) => group.groupId === groupId
    );
    const notes = JSON.parse(localStorage.getItem(groupId));

    if (groupExist) setGroup(groupExist);
    else setGroupError(true);

    if (notes) setNotes(notes);
    else setNotes([]);
  }, [groupId]);

  // set data to localStorage
  const insertNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
    localStorage.setItem(groupId, JSON.stringify([...notes, newNote]));
  };

  return (
    <>
      {!groupError ? (
        group && (
          <div className={styles.notesZone}>
            <div className={styles.groupNameTab}>
              {screenWidth < 767 && (
                <Link to={-1}>
                  <img src={sendArrow} alt="backarrow" />
                </Link>
              )}
              <GroupIcon
                groupName={group.groupName}
                bgColour={group.bgColour}
                fontColor="#FFFFFF"
              />
            </div>
            <div className={styles.notesBox}>
              {notes.map((note, index) => (
                <SingleNote
                  key={index}
                  content={note.content}
                  date={note.date}
                  time={note.time}
                />
              ))}
            </div>
            <TextArea insertNote={insertNote} />
          </div>
        )
      ) : (
        <div className={`${styles.notesZone} ${styles.groupError}`}>
          <h1>Group Isn't Exist!</h1>
        </div>
      )}
    </>
  );
}
