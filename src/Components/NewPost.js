import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NewPost.css'

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

 // Define handleSubmit function to handle form submission
  const handleSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
     
    // Send a POST request to the backend API endpoint using fetch
    const response = await fetch("/api/v1/posts", {
      method: "POST", // Use POST method
      headers: {
        "Content-Type": "application/json", // Set request header to JSON format
      },
      body: JSON.stringify({
        title, // Include title data in request body
        content, // Include content data in request body
      }),
    });
    
    // Parse response data as JSON and log to console
    const data = await response.json();
    console.log(data);
      navigate("/blog");
  };

  
  

  return (
    <div className="container">
      <h2>New Post</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          className="form-input"
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          className="form-textarea "
          onChange={handleContentChange}></textarea>
        <br />
        <button className="form-submit" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default NewPost;




    
  


 
