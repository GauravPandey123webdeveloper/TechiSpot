import React from "react";
import styles from "./Community.module.css";
import dataCommunity from "./Community_Data"; 


export default function Communities() {
    let infoCommunity = dataCommunity.map((group, index) => (
        <div className={styles.info} key={index}>
          <img src={group.pro} className={styles.img} alt="Community_Pic" />
          <div className={styles.data}>
            <h4>{group.name}</h4>
            <p>{group.members}</p>
          </div>
        </div>
      ));
    
      return <div className={styles.card}>{infoCommunity}</div>;
  
}
