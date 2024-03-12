import { Routes ,Route } from "react-router-dom";
import Home from "./home/Home";
import News from "./news/News";
import Meme from "./memes/Meme";
import Notes from "./projects/project/Notes";
import Sign from './authentication/sign/Sign'
import Signup from "./authentication/signup/Signup";
import CssNote from "./projects/CssNotes/CssNote";
import Error from "./error/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/meme" element={<Meme/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/notes/css" element={<CssNote/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
