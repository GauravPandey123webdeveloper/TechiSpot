import React from 'react'
import Cssnav from '../navbar/Cssnav'
import NavBar from '../component/NavBar'
import SideBar from '../component/SideBar'
import styles from './CssNote.module.css'
import Csshome from './Csshome'
export default function CssNote() {
  return (
    <>
    <NavBar/>
    <div className={styles.cssnote}>
      <Cssnav/>
      <Csshome/>
    </div>
    </>
  )
}
