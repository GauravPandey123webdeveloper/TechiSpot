import styles from "./BasicReact.module.css"
import ProjectNav from '../ProjectsNavBar/ProjectNav'
import NoteBar from '../project/NoteBar'
import NavBar from "../../component/NavBar"
export default function IntermediateReact() {
  return (
    <>
    <NavBar/>
    <NoteBar/>
      <ProjectNav/>
    <div className={styles.basicreact}>
      eevev
    </div>
    </>
  )
}
