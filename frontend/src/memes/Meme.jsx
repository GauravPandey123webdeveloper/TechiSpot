import React from 'react'
import NavBar from '../component/NavBar'
import styles from './Meme.module.css'

export default function Meme() {
  return (
    <>
      <NavBar />
      <div className={styles.sidenavmemes}>

        <ul className={styles.sidememe}>
          <li className={styles.memeItem}><i className="fa-solid fa-list"></i>Categories</li>
          <li className={styles.memeItem}><i className="fa-solid fa-chart-simple"></i> Trending</li>
          <li className={styles.memeItem}><i className="fa-solid fa-spray-can-sparkles"></i>Fresh</li>
          <li className={styles.memeItem}><i className="fa-solid fa-business-time"></i>Business</li>
          <li className={styles.memeItem}><i className="fa-solid fa-dice"></i>Gaming</li>
          <li className={styles.memeItem}><i className="fa-solid fa-snowflake"></i>LifeStyle</li>
          <li className={styles.memeItem}><i class="fa-solid fa-bomb"></i> Comic</li>
          <li className={styles.memeItem}><i className="fa-solid fa-upload"></i>Upload</li>
          <li className={styles.memeItem}> <i className="fa-solid fa-bell"></i>Recent</li>
          <li className={styles.memeItem}><i className="fa-solid fa-heart-circle-plus"></i>Favourites</li>
        </ul>
      </div>
      <button class="addButton">Add</button>
    </>
  )
}
