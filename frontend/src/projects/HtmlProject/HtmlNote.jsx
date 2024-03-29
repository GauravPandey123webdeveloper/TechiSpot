import React from 'react'
import HtmltNav from '../ProjectsNavBar/HtmlNav'
import NavBar from '../component/NavBar'
import NoteBar from '../notes/NoteBar'
import styles from './HtmlNote.module.css'
export default function HtmlNote() {
  return (
    <>
    <NavBar/>
    <div className={styles.htmlnote}>
    <NoteBar/>
      <HtmltNav/>
      
    </div>
    </>
  )
}
