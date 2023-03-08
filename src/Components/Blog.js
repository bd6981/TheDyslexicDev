import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPost from "./BlogPost";
import '../App.css'
import { Container, Row, Col } from "react-bootstrap";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch your blog posts data from your API or data file
    fetch("/api/v1/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Welcome to my Blog</h1>
          <p>
            This is my first post. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed in nisi sit amet sapien ultrices semper. Sed
            viverra tortor ac velit dictum, nec ullamcorper augue tristique.
          </p>
        </Col>
        <Col md={4}>
          <h2>Categories</h2>
          <ul>
            <li>Technology</li>
            <li>Food</li>
            <li>Travel</li>
          </ul>
        </Col>
        <div>
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </Row>
      <Link to="/NewPost">Create New Post</Link>
    </Container>
  );
}

export default Blog;
