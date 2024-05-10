// group names in left side
import React from "react";
import styles from "./GroupIcon.module.css";

export default function GroupIcon({
  groupName,
  bgColour,
  fontColor = "#000000",
}) {
  // to get letters to show as group icon
  const groupNameSplit = groupName.split(" ");
  const GroupNameTrim =
    groupNameSplit[0].charAt(0).toUpperCase() +
    (groupNameSplit[1] ? groupNameSplit[1].charAt(0).toUpperCase() : "");

  return (
    <div className={styles.groupName}>
      <div
        className={styles.groupNameTrim}
        style={{ backgroundColor: bgColour }}
      >
        {GroupNameTrim}
      </div>
      <h3 style={{ color: fontColor }}>{groupName}</h3>
    </div>
  );
}
