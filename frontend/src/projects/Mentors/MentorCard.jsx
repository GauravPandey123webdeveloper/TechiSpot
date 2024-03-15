import React from "react";
import styles from "./MentorCard.module.css";
import data from "./Mentor_Data";
export default function MentorCard() {
  let infoCard = data.map((member, index) => (
    <div className={styles.info} key={index}>
      <img src={member.pro} className={styles.img} alt="Profile_Pic" />
      <div className={styles.data}>
        <h4>{member.name}</h4>
        <p>{member.about}</p>
        <div className={styles.socialLinks}>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
        <button className={styles.btn}>Connect</button>
          </a>
        
        </div>
      </div>
    </div>
  ));

  return <div className={styles.card}>{infoCard}</div>;
}
