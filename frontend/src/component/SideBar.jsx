import React from 'react'
import styles from './SideBar.module.css'
import  Communities from './all_community/Communities'
import MyProfile from './all_community/MyProfile';

export default function SideBar() {
  return (
    <div className={styles.community}>
      <div className={styles.box}><h1 className={styles.commhead}>Community</h1> <button  className={`${styles.iconButton}`}><i className={`fa-regular fa-plus`}></i></button></div>
       <div className={styles.chats}>
        <Communities/>
      </div>
    </div>
  );
}
