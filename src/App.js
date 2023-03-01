import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Post from "./Components/Post";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
