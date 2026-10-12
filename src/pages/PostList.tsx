
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import type {Post} from "../types";



function PostList() {

 const [posts,setPosts]=useState<Post[]>([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState<string | null>(null);

 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        if(!res.ok) throw new Error("faild");
        return res.json();     
    })
    .then(setPosts)
     .catch((err)=>
        setError(err.message))
     .finally(()=> setLoading(false));
    
 },[]);

 if (loading) return <p>loading...</p>;
 if (error)  return <p>{error}</p>;

  return (
    
      <ul>

        {
            posts.map((post)=>(
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>

                </li>
            ))
        }
      </ul>
    
  )
}

export default PostList;
