import React from 'react'
import ProjectNav from '../ProjectsNavBar/ProjectNav'
import NavBar from '../component/NavBar'
import NoteBar from '../notes/NoteBar'
import styles from './ReactNote.module.css'
import Csshome from './Reacthome'
export default function CssNote() {
  return (
    <>
    <NavBar/>
    <div className={styles.cssnote}>
    <NoteBar/>
      <ProjectNav/>
      
    </div>
    </>
  )
}
