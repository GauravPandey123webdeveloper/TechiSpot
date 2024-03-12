import React from 'react'
import Cssnav from '../navbar/Cssnav'
import NavBar from '../../component/NavBar'
import SideBar from '../../component/SideBar'

import styles from  './CssMargin.module.css'




export default function CssMargin() {
  return (
    <>
    <NavBar/>
    <div className={styles.margin}>
      
     <Cssnav/>
      <SideBar/>
      <div className={styles.m}>
        <h1>CSS Margins</h1>
      </div>
    </div>
    </>
  )
}

