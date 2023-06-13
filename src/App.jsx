import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import { createContext, useState } from "react";
import PostDetail from "./components/PostDetail/PostDetail";
export const postContext = createContext();
export const commentContext = createContext();
function App() {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState(false);

  return (
    <postContext.Provider value={[post, setPost]} className="App">
      <commentContext.Provider value={[comment, setComment]}>
        <h1>hello</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </commentContext.Provider>
    </postContext.Provider>
  );
}

export default App;
