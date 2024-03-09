import React from 'react'
import NavBar from '../component/NavBar'
import styles from './Meme.module.css'
import SideNavMeme from './SideNavMeme'

export default function Meme() {
  return (
    <div className={styles.meme}>
      <NavBar />
      <SideNavMeme/>
    
    </div>
  )
}
