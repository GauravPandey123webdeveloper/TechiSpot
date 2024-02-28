import React from 'react';
import styles from './SideBar.module.css';
export default function SideBar() {
  return (
    <div className={styles.sidenav}>
        <ul className={styles.sidemenu}>
            <li className={styles.courseItem}>HTML</li>
            <li className={styles.courseItem}>CSS</li>
            <li className={styles.courseItem}>javaScript</li>
            <li className={styles.courseItem}>react</li>
            <li className={styles.courseItem}>redux</li>
            <li className={styles.courseItem}>Java</li>
            <li className={styles.courseItem}>DSA</li>
            <li className={styles.courseItem}>github</li>
            <li className={styles.courseItem}>version control</li>
        </ul>
    </div>
  )
}
