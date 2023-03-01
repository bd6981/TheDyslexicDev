import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    // Fetch your individual blog post data from your API or data file
    fetch(`https://my-blog-api.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        By {post.author} on {post.date}
      </p>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
