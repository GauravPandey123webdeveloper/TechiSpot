import React from 'react';

import styles from "./BasicHtml.module.css"
import ProjectNav from '../ProjectsNavBar/ProjectNav'
import NavBar from '../../component/NavBar'
import NoteBar from '../project/NoteBar'
import HtmlNav from '../ProjectsNavBar/HtmlNav';
export default function IntermediateHtml() {
    return (
        <>
            <NavBar />
            <NoteBar />
            <HtmlNav />

            <div className={styles.tile}>
                <div className={styles.basichtml}>
                    <div className={styles.box2}>
                        <h2>1. Landing page</h2>
                        <p>Another excellent HTML project example for beginners is this one, which you can create and include in your portfolio. A landing page is a single web page that promotes one or more goods and services while directing site visitors to carry out various actions, such as making a purchase, signing up for a newsletter, etc. You need to combine CSS with HTML to develop even the most basic landing page. 
                        </p>
                        <p>
                        A landing page must be appealing and purposeful if it hopes to persuade visitors to take some sort of action. Your styling of the landing page should center on selecting the right color schemes, page layout, etc. Additionally, you must ensure that the page's elements do not overlap or be put incorrectly. 
                        </p>
                        <h4>
                            <a href='https://codepen.io/vinay-khatri/pen/LYdyoNZ'>Source Code With Output</a>
                        </h4>
                    </div>

                </div>
            </div>
        </>
    )
}
