import React from 'react'
import styles from './Error.module.css';
import NavBar from '../component/NavBar';
export default function Error() {
  return (
    <>
    <NavBar/>
    <div className={styles.errorContainer}>
    <div className={styles.errorMessage}>
      <h1>Error 404: Page not found</h1>
      <p>Sorry, the page you are looking for might be under construction or does not exist.</p>
    </div>
  </div>
  </>
  )
}