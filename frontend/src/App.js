import { Routes,Route } from "react-router-dom";
import Home from "./home/Home";
import News from "./news/News";
import Meme from "./memes/Meme";
import Notes from "./notes/Notes";
import Sign from "./sign/Sign";
import Signup from "./signup/Signup";
import CssNote from "./CssNotes/CssNote";
import Error from "./error/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/meme" element={<Meme/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/notes/css" element={<CssNote/>}/>
      </Routes>
      
    </>
  );
}

export default App;
