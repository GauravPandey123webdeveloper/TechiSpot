import React from "react";
import styles from "./MentorCard.module.css";
import data from "./Mentor_Data";
import linkedIn from "../../assets/linkedin.png";
import gitHub from "../../assets/github.png";

export default function MentorCard() {
  let infoCard = data.map((member, index) => (
    <div className={styles.info} key={index}>
      <img src={member.pro} className={styles.img} alt="Profile_Pic" />
      <div className={styles.data}>
        <h4>{member.name}</h4>
        <p>About: {member.about}</p>
        <div className={styles.socialLinks}>
        <button type="button" class="btn btn-danger">Book Now</button>
        </div>
      </div>
    </div>
  ));

  return <div className={styles.card}>{infoCard}</div>;
}
