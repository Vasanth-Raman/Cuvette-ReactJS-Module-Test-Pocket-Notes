// open modal when new group it to be created
import React from "react";
import styles from "./GroupArea.module.css";
import GroupIcon from "../GroupIcon/GroupIcon";
import { useParams, Link } from "react-router-dom";
import { useWidth } from "../../context/WidthContext";

const selected = {
  backgroundColor: "#2f2f2f2b",
  borderRadius: "1rem",
};

export default function GroupArea({ groups, TriggerCreateGroup }) {
  const { groupId } = useParams();
  const screenWidth = useWidth();

  return (
    <div
      className={`${styles.groupZone} ${
        groupId && screenWidth < 767 ? "remove" : ""
      }`}
    >
      <div className={styles.title}>
        <span>Pocket Notes</span>
      </div>
      <div className={styles.groupsBox}>
        {groups?.map((group) => (
          <div
            key={group.groupId}
            style={group.groupId === groupId ? selected : {}}
          >
            <Link
              to={`/notes/${group.groupId}`}
              replace={screenWidth < 767 ? false : true}
            >
              <GroupIcon
                groupName={group.groupName}
                bgColour={group.bgColour}
              />
            </Link>
          </div>
        ))}
      </div>
      <button
        className={styles.addButton}
        title=" Click To Add Group"
        onClick={TriggerCreateGroup}
      >
        +
      </button>
    </div>
  );
}
