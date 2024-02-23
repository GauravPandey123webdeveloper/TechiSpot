import meme from "./icons/meme.png";
import news from "./icons/news.png";
import note from "./icons/notes.png";
import tech from "./icons/tech.png";
import home from "./icons/home.png";

export default function NavBar() {
  return (
    <>
      <nav className="navigation">
        <img src={tech} alt="tech" className="icn"></img>
        <div className="logo-name">TechiSpot</div>
        <ul class="ul1">
          <li class="lia">
            <a href="/">
              {" "}
              <img src={home} alt="home" className="icon"></img>
              Home
            </a>
          </li>
          <li class="lib">
            <a href="/">
              <img src={news} alt="news" className="icon"></img>
              Tech News
            </a>
          </li>
          <li class="lic">
            <img src={meme} alt="Meme" className="icon"></img>
            <a href="/">
              <meme></meme> Tech Memes
            </a>
          </li>
          <li class="lid">
            <img src={note} alt="notes" className="icon"></img>
            <a href="/">Tech Notes</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
