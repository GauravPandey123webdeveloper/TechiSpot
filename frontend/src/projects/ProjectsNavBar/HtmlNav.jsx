import React from 'react'
import styles from './HtmlNav.module.css'
import { Link } from 'react-router-dom'
export default function HtmlNav() {
  return (
    <div>
      <ul className={styles.list}>
       <li className={styles.listitems}><Link to='/projects/Html/basic'>Begginer Level</Link></li>
       <li className={styles.listitems}><Link to='/projects/Html/intermediate'>Intermediate Level</Link></li>
       <li className={styles.listitems}><Link to='/projects/Html/advanced'>Advanced Level</Link></li>
    
      </ul>
    </div>
  )
}
