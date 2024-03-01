import React from 'react'
import {Routes,Route} from 'react-router-dom'
import NavBar from '../component/NavBar'
import SideBar from '../component/SideBar'
import Team from '../component/Team'
import styles from './Notes.module.css'
import Post from '../component/Post'
import CssNote from '../CssNotes/CssNote'
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
