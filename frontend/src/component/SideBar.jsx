import React from 'react'
import styles from './SideBar.module.css'
import Communities from './all_community/Communities'

export default function SideBar() {
  return (
    <>
      <div className={styles.community}>
      <div className={styles.box}>
        <div className={styles.h1}><h1 className={styles.teamhead}>Community </h1></div>
        <button className={`${styles.iconButton}`}> <i className={`fa-regular fa-plus`}></i></button>
      </div>
        <div className={styles.chats}>
          <Communities />
        </div>
      </div>
    </>
  );
}
