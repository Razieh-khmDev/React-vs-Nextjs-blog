import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Post } from "../types";

export default function postDtail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data: Post) => setPost(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <article>
      <Link to="/">Back</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}

