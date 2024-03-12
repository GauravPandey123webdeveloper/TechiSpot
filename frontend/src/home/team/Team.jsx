import React from "react";
import styles from "./Team.module.css";
import TeamCard from "./TeamCard";
export default function Team() {
  return (
    <div className={styles.team}>
        <div className={styles.h1}><h1 className={styles.teamhead}>Our Team</h1></div>
        <div className={styles.cards}>
      <TeamCard/>
    </div>
    </div>
  );
}
