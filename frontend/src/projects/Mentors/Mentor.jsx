import React from "react";
import styles from "./Mentor.module.css";
import MentorCard from "./MentorCard";
export default function Team() {
  return (
    <div className={styles.team}>
        <div className={styles.h1}><h1 className={styles.teamhead}>Mentor Support</h1></div>
        <div className={styles.cards}>
      <MentorCard/>
    </div>
    </div>
  );
}