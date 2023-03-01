import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './NewPost.css'
function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Here you could add your logic for submitting the new blog post
    // to your backend or storage service
    history.push("/blog");
  }

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}></textarea>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default NewPost;
