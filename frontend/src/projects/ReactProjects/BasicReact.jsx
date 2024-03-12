import React from 'react'

import styles from "./BasicReact.module.css"
import ProjectNav from '../ProjectsNavBar/ProjectNav'
import NavBar from '../../component/NavBar'
import NoteBar from '../project/NoteBar'
export default function BasicReact() {
  return (
    <>
    <NavBar/>
    <NoteBar/>
      <ProjectNav/>
      <div className={styles.tile}>
    <div className={styles.basicreact}>
     <div className={styles.box2}>
        <h2>-: React Page :-</h2>Create a react app that creates a component Introduction and use it in app.js to print the introduction of 5 students by using props.Introduction can have:<br/>
1.Image<br/>
2.Name<br/>
3.Age<br/>
4.Course<br/></div>
     <div className={styles.box2}>
     <h2>-: Welcome Card :-</h2>Display a welcome card by taking names in props. Use conditional rendering for displaying the user's welcome card.<br/><br/>

For example, we have 4 users, and if someone passes the name of abc (a user) through props, it should display the welcome card of abc and if someone passes any other name, it should display a welcome card with different information. Remember you can only pass one prop.</div>
     <div className={styles.box2}>
     <h2>-: SignUp Form :-</h2>Create a registration form that should take data from the user as an Input .<br/><br/> Display a welcome message in alert and print all the form data in the form of an array in the console.</div>
     <div className={styles.box2}><h2>-: Navigation Bar :-</h2>
     Create a Navigation Bar that supports Routing i.e. Clicking on each button link will take you to a different page having different data and functions .<br/><br/>
     The Navigation Bar should be smooth and efficient with Hover Effects as well.
     </div>
     
    </div>
    </div>
    </>
  )
}
