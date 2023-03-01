import React from "react";
import { Link } from "react-router-dom";

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>
        By {post.author} on {post.date}
      </p>
      <p>{post.summary}</p>
      <Link to={`/blog/${post.id}`}>Read More</Link>
    </div>
  );
}

export default BlogPost;
