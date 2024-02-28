import React from 'react'
import NavBar from '../component/NavBar';
import styles from './Home.module.css';
export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.homepage}>
        <div className={styles.sidenav}>course menu</div>
        <div className={styles.post}>Post</div>
        <div className={styles.team}>Team</div>
      </div>
    </>
  )
}
