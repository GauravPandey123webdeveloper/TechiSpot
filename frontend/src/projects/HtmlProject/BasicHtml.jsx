import React from 'react'

import styles from "./BasicHtml.module.css"
import NavBar from '../../component/NavBar'
import NoteBar from '../project/NoteBar'
import HtmlNav from '../ProjectsNavBar/HtmlNav'
export default function BasicHtml() {
    return (
        <>
            <NavBar />
            <NoteBar />
            <HtmlNav />
            <div className={styles.tile}>
                <div className={styles.basichtml}>
                    <div className={styles.box2}>
                        <h2>1. A Tribute page</h2>
                        <p>
                            This is probably one of the easiest HTML practice projects you could do. As you may guess from the name, a tribute webpage honors someone you admire and find inspiring. To make a tribute page, you only need a basic understanding of HTML concepts.
                        </p>
                        <p>
                            .Then you can include the person's biography, accomplishments, and a picture of the honoree. You're more than welcome to add some encouraging remarks to your letter as well. Using CSS for this project will be useful because it will let you incorporate different styles and layouts. Ensure that the website's background has an aesthetically acceptable color.
                        </p>
                       
                        <h4>
                            <a href='https://codepen.io/vinay-khatri/pen/jOzjodR'>Source Code with output</a>
                        </h4>
                        <h4>
                            <a href='https://github.com/SAyu09/HtmlProject1'>GitHub Repo</a>
                        </h4>
                    </div>
                    <div className={styles.box2}>
                        <h2>2. A Survey form</h2>
                        <p>
                            Forms are frequently used in internet user data collection tactics. You can obtain crucial information about your target audiences, such as their age, work status, geographic location, tastes and preferences, and pain issues, with the help of a well-designed survey form. This HTML assignment is a great chance to show off your knowledge of form design and webpage structure.
                        </p>
                        <p>
                            .A survey form is simple to create. To develop forms, you must become familiar with the basic HTML tags and input fields. Then, using the tags, you can create a text field, checkbox, radio button, date, and other essential form elements. CSS can be used once more to improve the look and feel of your form and webpage.
                        </p>
                        
                        <h4>
                            <a href='https://codepen.io/vinay-khatri/pen/vYRmXMx'>Source Code with output</a>
                        </h4>
                        <h4>
                            <a href='https://github.com/SAyu09/HtmlProject2'>GitHub Repo</a>
                        </h4>
                    </div>
                    <div className={styles.box2}>
                        <h2>3. Technical documentation page</h2>
                        <p>
                        A technical documentation page can be made if you are comfortable with the foundations of HTML, CSS, and JavaScript. The primary objective of this project is to create a page of technical documentation where users can click on any topic on the left side of the page and have the appropriate content load on the right. 
                        </p>
                        <p>
                        There is nothing extravagant about the project; it is just a simple, straightforward page of technical documentation. To build this HTML project, you must divide the webpage into two parts. On the right side will be the documentation (description) for each topic, and on the left side will be a menu listing each topic in alphabetical order. The click function can be added using Javascript or CSS bookmarks. 
                        </p>
                        
                        <h4>
                            <a href='https://codepen.io/vinay-khatri/pen/bGKdBXx'>Source Code with output</a>
                        </h4>
                        <h4>
                            <a href='https://github.com/SAyu09/HtmlProject3'>GitHub Repo</a>
                        </h4>
                        </div>

                </div>
            </div>
        </>
    )
}
