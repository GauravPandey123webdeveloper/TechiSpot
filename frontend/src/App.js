import NavBar from "./component/NavBar";
import Post from "./component/Post";
import styles from './App.module.css';
function App() {
  return (
    <>
      <NavBar />
      <div className={styles.homepage}>
        <div className={styles.sidenav}>course menu</div>
        <div className={styles.post}>Post</div>
        <div className={styles.team}>Team</div>
      </div>
    </>
  );
}

export default App;
