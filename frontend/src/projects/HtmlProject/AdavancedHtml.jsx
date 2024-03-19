import React from 'react';

import styles from "./BasicHtml.module.css"
import NavBar from '../../component/NavBar'
import NoteBar from '../project/NoteBar'
import HtmlNav from '../ProjectsNavBar/HtmlNav';
export default function AdvancedHtml() {
    return (
        <>
            <NavBar />
            <NoteBar />
            <HtmlNav />

            <div className={styles.tile}>
                <div className={styles.basichtml}>
                    <div className={styles.box2}>
                        <h2>1. Event page</h2>
                        <p>
                        You can try your hand at this simple DIY as well! It will entail building a static page that displays information about an event (conference, webinar, product launch, etc.). For this project, HTML and CSS are both required. It can be considered as one of the best HTML and CSS projects for beginners. 
                        </p>
                        <p>
                        The event page will have a straightforward design. The schedule, the event location, and the speakers' names and photographs with links will all be in the header section. A section describing the event's goal, including who the event is for and whose audience group it is intended to reach, must also be included. To make the page look clean, divide it into smaller sections. Select the appropriate background colour, font style, and color for each component of the page. 
                        </p>
                        <h4>
                            <a href='https://codepen.io/unrestben/pen/vYVyVJ'>Source Code With Output</a>
                        </h4>
                    </div>

                </div>
            </div>
        </>
    )
}
