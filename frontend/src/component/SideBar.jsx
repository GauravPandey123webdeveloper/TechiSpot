import React from 'react';
import styles from './SideBar.module.css';
import { Link } from 'react-router-dom';
import Meme from '../memes/Meme'
export default function SideBar() {
  return (
    <div className={styles.sidenav}>
        <ul className={styles.sidemenu}>
            <li className={styles.courseItem}> 
            <Link to='/notes'>Html</Link>
            </li>
            <li className={styles.courseItem}> <Link to='/notes'>CSS</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>javascript</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>react</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>redux</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>java</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>DSA</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>Php</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>c</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>c#</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>c++</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>gitlab</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>ruby</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>rust</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>golang</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>go</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'>flutter</Link></li>
            <li className={styles.courseItem}> <Link to='/notes'></Link></li>
            
            
        </ul>
    </div>
  )
}
{/* <li className={styles.lia}>
              <Link to="/">
                <img src={home} alt="home" className={styles.icon}></img>
               <span className={styles.menuText}> Home</span>
              </Link> */}
