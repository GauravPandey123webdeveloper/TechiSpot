import meme from "../assets/images/meme.png";
import news from "../assets/images/news.png";
import note from "../assets/images/notes.png";
import tech from "../assets/images/tech.png";
import home from "../assets/images/home.png";
import styles from "./NavBar.module.css";
import sign from "../assets/images/sign.png";
import {NavLink} from "react-router-dom";
export default function NavBar() {
  const activeLinkStyle = {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#1a73e8",
    padding: "10px",
    borderRadius: "15px",
  };
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img src={tech} alt="tech" className={styles.icn} />
          <div className={styles.logoName}>TechiSpot</div>
        </div>
        <div className={styles.menu}>
          <ul className={styles.ul1}>
            <li className={styles.lia}>
              <NavLink exact to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
                <img src={home} alt="home" className={styles.icon}></img>
                <span className={styles.menuText}> Home</span>
              </NavLink>
            </li>
            <li className={styles.lib}>
              <NavLink exact to="/news" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
                <img src={news} alt="news" className={styles.icon}></img>
                <span className={styles.menuText}>Tech news</span>
              </NavLink>
            </li>
            <li className={styles.lic}>
              <NavLink exact to="/meme" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
                <img src={meme} alt="Meme" className={styles.icon}></img>
                <span className={styles.menuText}>Tech memes</span>
              </NavLink>
            </li>
            <li className="lid">
              <NavLink exact to="/notes" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
                <img src={note} alt="notes" className={styles.icon}></img>
                <span className={styles.menuText}> Tech Projects</span>
              </NavLink>
            </li>
            <li className="lid">
              <NavLink exact to="/sign" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
                <img src={sign} alt="signin" className={styles.icon}></img>
                <span className={styles.menuText}>Sign in</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

