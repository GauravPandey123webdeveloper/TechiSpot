import React from 'react';
import styles from './SideBar.module.css';
export default function SideBar() {
  return (
    <div className={styles.sidenav}>
      <h3 className={styles.courseHeader}>Courses <hr /> </h3>
        <ul className={styles.sidemenu}>
            <li className={styles.courseItem}>HTML</li>
            <li className={styles.courseItem}>CSS</li>
            <li className={styles.courseItem}>JavaScript</li>
            <li className={styles.courseItem}>React</li>
            <li className={styles.courseItem}>Redux</li>
            <li className={styles.courseItem}>Java</li>
            <li className={styles.courseItem}>DSA</li>
            <li className={styles.courseItem}>Github</li>
            <li className={styles.courseItem}>Version Control</li>
        </ul>
    </div>
  )
}
