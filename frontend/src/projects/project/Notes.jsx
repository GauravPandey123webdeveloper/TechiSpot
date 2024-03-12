import React from "react";
import NavBar from "../../component/NavBar";
import NoteBar from "./NoteBar";
import styles from "./Notes.module.css";
import Notespace from "./Notespace";
import Mentor from "../Mentors/Mentor"
export default function Notes() {
  return (
    <>
      <NavBar />
      <div className={styles.notes}>
        <NoteBar />
        <Notespace />
        <Mentor/>
      </div>
    </>
  );
}
