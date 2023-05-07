import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  Carousel,
  Card,
  ListGroup,
} from "react-bootstrap";
import BlogPost from "./BlogPost";
import "./Home.css";

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
      <Accordion>
        <h1>Welcome to My Blog</h1>
        <p>
          This is a place where you can read about all sorts of interesting
          things. From technology to travel, food to fashion, we've got it all
          covered.
        </p>
        <Button variant="primary">Learn More</Button>
      </Accordion>

      <Container>
        <h2>Featured Post</h2>
        <Carousel>
          {posts.slice(0, 3).map((post) => (
            <Carousel.Item key={post.id}>
              <img
                className="d-block w-100"
                src={post.image}
                alt={post.title}
              />
              <Carousel.Caption>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container>
        <h2>Categories</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Header>Technology</Card.Header>
              <ListGroup variant="flush">
                {posts
                  .filter((post) => post.category === "technology")
                  .slice(0, 3)
                  .map((post) => (
                    <ListGroup.Item key={post.id}>
                      <BlogPost post={post} />
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>Food</Card.Header>
              <ListGroup variant="flush">
                {posts
                  .filter((post) => post.category === "food")
                  .slice(0, 3)
                  .map((post) => (
                    <ListGroup.Item key={post.id}>
                      <BlogPost post={post} />
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>Travel</Card.Header>
              <ListGroup variant="flush">
                {posts
                  .filter((post) => post.category === "travel")
                  .slice(0, 3)
                  .map((post) => (
                    <ListGroup.Item key={post.id}>
                      <BlogPost post={post} />
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-light text-center py-3">
        <p>Follow us on social media:</p>
        <a href="#" className="mx-3">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#" className="mx-3">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#" className="mx-3">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;