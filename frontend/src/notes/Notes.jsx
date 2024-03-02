import React from 'react'
import NavBar from '../component/NavBar'
import SideBar from '../component/SideBar'
import styles from './Notes.module.css'
import Notespace from './Notespace'
export default function Notes() {
  return (
    <>
    <NavBar/>
    <div className={styles.notes}>
    
      <SideBar/>
      <Notespace/>
    </div>
    </>
  )
}
