import meme from "../assets/meme.png";
import news from "../assets/news.png";
import note from "../assets/notes.png";
import tech from "../assets/tech.png";
import home from "../assets/home.png";
import styles from "./NavBar.module.css";
import sign from "../assets/sign.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img src={tech} alt="tech" className={styles.icn} />
          <div className={styles.logoName}>TechieSpot</div>
        </div>
        <div className={styles.menu}>
          <ul className={styles.ul1}>
            <li className={styles.lia}>
              <Link to="/">
                <img src={home} alt="home" className={styles.icon}></img>
                <span className={styles.menuText}> Home</span>
              </Link>
            </li>
            <li className={styles.lib}>
              <Link to="/news">
                <img src={news} alt="news" className={styles.icon}></img>
                <span className={styles.menuText}>Tech news</span>
              </Link>
            </li>
            <li className={styles.lic}>
              <Link to="/meme">
                <img src={meme} alt="Meme" className={styles.icon}></img>
                <span className={styles.menuText}>Tech memes</span>
              </Link>
            </li>
            <li class="lid">
              <Link to="/notes">
                <img src={note} alt="notes" className={styles.icon}></img>
                <span className={styles.menuText}> Tech Notes</span>
              </Link>
            </li>
            <li class="lid">
              <Link to="/sign">
                <img src={sign} alt="signin" className={styles.icon}></img>
                <span className={styles.menuText}>Sign in</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
