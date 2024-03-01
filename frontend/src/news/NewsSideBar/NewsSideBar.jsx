import React from 'react';
import styles from './NewsSideBar.module.css';

export default function NewsSideBar() {
  return (
    <div className={styles.sideNav}>
        <h1 className={styles.navHeading}><i class="fa-solid fa-fire-flame-curved"></i>Breaking News</h1>
       <ul className={styles.sideMenu}>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Artificial Intelligence(AI)</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Cybersecurity</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Blockchain</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Cryptocurrency</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> 5G Networks</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Space Exploration</li>
          {/*  */}
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Internet of Things (IoT)</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Cloud Computing</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Quantum Computing</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Edge Computing</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Augmented Reality (AR)</li>
          <li className={styles.techItems}> <i class="fa-solid fa-globe"></i> Virtual Reality (VR)</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Biotechnology</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Health Tech</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Autonomous Vehicles</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Digital Transformation</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Big Data and Analytics</li>
       </ul>
    </div>
  )
}

