import { Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/postDtail";


export default function App() {
   
  return (
     <div className='container'>
     <header>
      <Link to="/">
      <h1>MY BLOG</h1>
      </Link>
     </header>

     <main>
      <Routes>
        <Route path="/" element={<PostList/>}/>
            <Route path="/posts/:id" element={<PostDetail/>}/>

      </Routes>
     </main>
     </div>
  );
}


