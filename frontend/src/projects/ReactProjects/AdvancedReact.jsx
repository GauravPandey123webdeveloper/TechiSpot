import React from 'react';

import styles from "./BasicReact.module.css"
import ProjectNav from '../ProjectsNavBar/ProjectNav'
import NavBar from '../../component/NavBar'
import NoteBar from '../project/NoteBar'
export default function AdvancedReact() {
  return (
    <>
    <NavBar/>
    <NoteBar/>
      <ProjectNav/>

      <div className={styles.tile}>
    <div className={styles.basicreact}>
     <div className={styles.box2}>
        <h2>-: Personal Blogging Platform :-</h2>Create a personal blogging platform where users can sign up, create blog posts, categorize them, and publish for public viewing. <br /> Features::<br/>
1.User authentication and account management.<br/>
2.Blog post creation with rich text editor for formatting.<br/>
3.Categorization and tagging of blog posts..<br/>
4. Public profile pages for users with their published posts.<br />
5.Commenting system for readers to engage with posts. <br />
</div>
     <div className={styles.box2}>
     <h2>-: Portfolio Website :-</h2>Build a personal portfolio website to showcase your projects, skills, and experience.<br/>Features<br/>
     1.Responsive design for mobile and desktop devices. <br />
     2.Sections for about me, projects, skills, and contact information. <br />
     3.Integration with social media profiles and GitHub repositories. <br />
     4.Option to customize colors, fonts, and layout.<br />
     5.Contact form for potential employers or clients to reach out <br />
</div>
     <div className={styles.box2}>
     <h2>-: Quiz Application :-</h2>Build a quiz application where users can take quizzes on various topics and receive instant feedback on their performance. <br />
     Features : <br />
     1.User authentication for tracking quiz scores. <br />
     2.Quiz creation interface for admins. <br />
     3.Different question types (multiple choice, true/false, etc.). <br />
     4.Randomized question order and answer choices. <br />
     5. Score calculation and result display at the end of the quiz.<br />

     </div>
     <div className={styles.box2}><h2>-:Weather Forecast App :-</h2>
     Create a weather forecast application that displays current weather conditions and forecasts for a given location.<br/>Features:<br/>
     1.User interface to enter location and view weather information. <br />
     2.Integration with a weather API (e.g., OpenWeatherMap) to fetch data. <br />
     3.Display of current weather conditions (temperature, humidity, wind speed, etc.).
     4.Forecast for the next few days with graphical representation. <br />
     5.Option to switch between Celsius and Fahrenheit.
     </div>

    </div>
    </div>
    </>
  )
}
