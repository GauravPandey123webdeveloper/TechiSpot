import React from "react";
import styles from "./Team.module.css";
import TeamCard from "./our_Team_Data/TeamCard";
export default function Team() {
  return (
    <>
        <div className={styles.team}>
        <div className={styles.h1}><h1 className={styles.teamhead}>Our Team</h1></div>
        <div className={styles.img}>
        <div className={styles.cards}></div>
      <TeamCard/>
    </div>
    </div>
    </>
  );
}
