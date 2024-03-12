import React from 'react'
import styles from './ProjectNav.module.css'
import { Link } from 'react-router-dom'
export default function cssnav() {
  return (
    <div>
      <ul className={styles.list}>
       <li className={styles.listitems}><Link to='/projects/react/basic'>Begginer Level</Link></li>
       <li className={styles.listitems}><Link to='/projects/react/intermediate'>Intermediate Level</Link></li>
       <li className={styles.listitems}><Link to='/projects/react/advanced'>Advanced Level</Link></li>
    
      </ul>
    </div>
  )
}
