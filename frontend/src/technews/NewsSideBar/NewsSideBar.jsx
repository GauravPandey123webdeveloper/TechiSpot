import React from 'react';
import styles from './NewsSideBar.module.css';

export default function NewsSideBar() {
  return (
    <div className={styles.sideNav}>
        <h1 className={styles.navHeading}><i class="fa-solid fa-fire-flame-curved"></i>Breaking News</h1><hr/>
       <ul className={styles.sideMenu}>
          <li className={styles.techItems}><i class="fa-solid fa-robot"></i> Artificial Intelligence(AI)</li>
          <li className={styles.techItems}><i class="fa-solid fa-shield-halved"></i> Cybersecurity</li>
          <li className={styles.techItems}><i class="fa-brands fa-hive"></i> Blockchain</li>
          <li className={styles.techItems}><i class="fa-brands fa-bitcoin"></i> Cryptocurrency</li>
          <li className={styles.techItems}><i class="fa-solid fa-network-wired"></i>5G Networks</li>
          <li className={styles.techItems}><i class="fa-brands fa-space-awesome"></i> Space Exploration</li>
          {/*  */}
          <li className={styles.techItems}><i class="fa-solid fa-wifi"></i> Internet of Things (IoT)</li>
          <li className={styles.techItems}><i class="fa-solid fa-cloud-bolt"></i> Cloud Computing</li>
          <li className={styles.techItems}><i class="fa-solid fa-vr-cardboard"></i> Augmented Reality (AR)</li>
          <li className={styles.techItems}> <i class="fa-solid fa-vr-cardboard"></i> Virtual Reality (VR)</li>
          <li className={styles.techItems}><i class="fa-solid fa-dna"></i> Biotechnology</li>
          <li className={styles.techItems}><i class="fa-solid fa-user-doctor"></i> Health Tech</li>
          <li className={styles.techItems}><i class="fa-solid fa-car"></i>Autonomous Vehicles</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Digital Transformation</li>
          <li className={styles.techItems}><i class="fa-solid fa-database"></i> Big Data and Analytics</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Quantum Computing</li>
          <li className={styles.techItems}><i class="fa-solid fa-globe"></i> Edge Computing</li>
       </ul>
    </div>
  )
}

