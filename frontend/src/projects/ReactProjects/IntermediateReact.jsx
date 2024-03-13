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
        <h2>-: Todo List :-</h2>Create a simple todo list application where users can add, delete, and mark tasks as completed. <br /> Features :<br/>
1.Input field to add new tasks.<br/>
2.List display of tasks with options to mark them as completed or delete them.<br/>
3.Basic styling for visual appeal.<br/>

</div>
     <div className={styles.box2}>
     <h2>-: Counter App :-</h2>Build a basic counter application that allows users to increment, decrement, and reset a counter.<br/>Features :<br/>
     1.Counter display with buttons to increment, decrement, and reset the counter value. <br />
     2.Simple styling for the counter display. <br />

</div>
     <div className={styles.box2}>
     <h2>-: Random Quote Generator :-</h2>Develop an application that displays random quotes each time the user clicks a button. <br />
     Features : <br />
     1.Fetch quotes from an API (e.g., Quote Garden API). <br />
     2.Display a new random quote each time the button is clicked. <br />
     3.Option to share the quote on social media. <br />


     </div>
     <div className={styles.box2}><h2>-: Calculator :-</h2>
     Build a simple calculator application with basic arithmetic operations.<br/>Features :<br/>
     1.Display screen to show input and output. <br />
     2.Buttons for numbers (0-9), decimal point, and arithmetic operations (+, -, *, /). <br />
     3.Calculate and display the result when the user presses the equals (=) button. <br />
     
     </div>

    </div>
    </div>
    </>
  )
}
