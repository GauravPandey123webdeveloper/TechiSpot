import { Routes,Route } from "react-router-dom";
import Home from "./home/Home";
import News from "./news/News";
import Meme from "./memes/Meme";
import Notes from "./notes/Notes";
import Html from "./component/SideBar.jsx"
import css from "./component/SideBar.jsx"
import react from "./component/SideBar.jsx"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/meme" element={<Meme/>}/>
        <Route path="/notes" element={<Notes/>}/>
      </Routes>
    </>
  );
}

export default App;
