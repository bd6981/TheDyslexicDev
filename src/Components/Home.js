import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import "../App.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch your blog posts data from your API or data file
    fetch("https://my-blog-api.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <div>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
