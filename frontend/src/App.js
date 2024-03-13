import { Routes ,Route } from "react-router-dom";
import Home from "./home/Home";
import News from "./news/News";
import Meme from "./memes/Meme";
import Notes from "./projects/project/Notes";
import Sign from './authentication/sign/Sign'
import Signup from "./authentication/signup/Signup";

import Error from "./error/Error";
import BasicReact from "./projects/ReactProjects/BasicReact";
import IntermediateReact from "./projects/ReactProjects/IntermediateReact";
import AdvancedReact from "./projects/ReactProjects/AdvancedReact";

import MyProfile from "./users/MyProfile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/meme" element={<Meme/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="*" element={<Error/>}/>
      
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/projects/react/basic" element={<BasicReact/>}/>
        <Route path="/projects/react/intermediate" element={<IntermediateReact/>}/>
        <Route path="/projects/react/advanced" element={<AdvancedReact/>}/>
        <Route path="/profile/:username" element = {<MyProfile/>} />
      </Routes>
    </>
  );
}

export default App;
