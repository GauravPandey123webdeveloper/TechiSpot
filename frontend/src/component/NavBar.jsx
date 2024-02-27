import meme from "../assets/meme.png";
import news from "../assets/news.png";
import note from "../assets/notes.png";
import tech from "../assets/tech.png";
import home from "../assets/home.png";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img src={tech} alt="tech" className={styles.icn}/>
          <div className={styles.logoName}>TechiSpot</div>
        </div>
        <div className={styles.menu}>
          <ul className={styles.ul1}>
            <li className={styles.lia}>
              <a href="/">
                {" "}
                <img src={home} alt="home" className={styles.icon}></img>
               <span className={styles.menuText}> Home</span>
              </a>
            </li>
            <li className={styles.lib}>
              <a href="/">
                <img src={news} alt="news" className={styles.icon}></img>
               <span className={styles.menuText}>Tech news</span>
              </a>
            </li>
            <li className={styles.lic}>
              <img src={meme} alt="Meme" className={styles.icon}></img>
              <a href="/">
                  <span className={styles.menuText}>Tech memes</span>
              </a>
            </li>
            <li class="lid">
              <img src={note} alt="notes" className={styles.icon}></img>
              <a href="/">
                <span className={styles.menuText}> Tech Notes</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
