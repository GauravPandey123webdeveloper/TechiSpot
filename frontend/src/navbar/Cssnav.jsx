import React from 'react'
import styles from './Cssnav.module.css'
export default function cssnav() {
  return (
    <div>
      <ul className={styles.list}>
       <li className={styles.listitems}>CSS Home</li>
       <li className={styles.listitems}>CSS Introduction</li>
       <li className={styles.listitems}>CSS Syntax</li>
       <li className={styles.listitems}>CSS Selectors</li>
       <li className={styles.listitems}>CSS How-To</li>
       <li className={styles.listitems}>CSS Colors</li>
       <li className={styles.listitems}>CSS Borders</li>
       <li className={styles.listitems}>CSS Margins</li>
       <li className={styles.listitems}>CSS Padding</li>
       <li className={styles.listitems}>CSS Height-Width</li>
       <li className={styles.listitems}>CSS Box-Model</li>
       <li className={styles.listitems}>CSS Fonts</li>
       <li className={styles.listitems}>CSS Icons</li>
       <li className={styles.listitems}>CSS Links</li>
       <li className={styles.listitems}>CSS Lists</li>
       <li className={styles.listitems}>CSS Tables</li>
       <li className={styles.listitems}>CSS OverFlow</li>
       <li className={styles.listitems}>CSS Alignment</li>
       <li className={styles.listitems}>CSS Forms</li>
       <li className={styles.listitems}>CSS FlexBox</li>
      </ul>
    </div>
  )
}
