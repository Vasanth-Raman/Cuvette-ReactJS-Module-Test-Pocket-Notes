// new group creation and to show all the group in left area of the application
import React, { useEffect, useState } from "react";
import styles from "./AllGroup.module.css";
import GroupArea from "../GroupArea/GroupArea";
import GroupCreate from "../GroupCreate/GroupCreate";

export default function AllGroup({ children }) {
  const [groups, setGroups] = useState([]);
  const [viewCreateGroup, setViewCreateGroup] = useState(false);

  // retrieve the data from localStorage
  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem("groups"));
    if (savedGroups && savedGroups.length > 0) setGroups(savedGroups);
  }, []);
  // set data to localStorage
  const insertGroup = (newGroup) => {
    setGroups((prev) => [...prev, newGroup]);
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
    setViewCreateGroup(false);
  };
  return (
    <div className={styles.pageContainer}>
      <GroupArea
        groups={groups}
        TriggerCreateGroup={() => setViewCreateGroup(true)}
      />
      {children}
      {viewCreateGroup && (
        <div
          className={styles.createGroupModal}
          onClick={() => setViewCreateGroup(false)}
        >
          <GroupCreate groups={groups} insertGroup={insertGroup} />
        </div>
      )}
    </div>
  );
}
