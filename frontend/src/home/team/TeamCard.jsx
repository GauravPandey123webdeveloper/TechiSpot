import React from "react";
import styles from "./TeamCard.module.css";
import data from "./Team_Data";
import linkedIn from "../../assets/images/linkedin.png";
import gitHub from "../../assets/images/github.png";

export default function TeamCard() {
  let infoCard = data.map((member, index) => (
    <div className={styles.info} key={index}>
      <img src={member.pro} className={styles.img} alt="Profile_Pic" />
      <div className={styles.data}>
        <h4>{member.name}</h4>
        <p>{member.about}</p>
        <div className={styles.socialLinks}>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="linkedIn" className={styles.linkedin}/>
          </a>
          <a href={member.git} target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" className={styles.github} />
          </a>
        </div>
      </div>
    </div>
  ));

  return <div className={styles.card}>{infoCard}</div>;
}
