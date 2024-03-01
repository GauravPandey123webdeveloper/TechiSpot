import React from 'react'
import Cssnav from '../cssnavbar/Cssnav'
import NavBar from '../component/NavBar'
import NoteBar from '../notes/NoteBar'
import styles from './CssNote.module.css'
import Csshome from './Csshome'
export default function CssNote() {
  return (
    <>
    <NavBar/>
    <div className={styles.cssnote}>
    <NoteBar/>
      <Cssnav/>
      
      <Csshome/>
    </div>
    </>
  )
}
