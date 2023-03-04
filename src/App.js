import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import BlogPost from "./Components/BlogPost";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewPost from "./Components/NewPost";
import "./App.css";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/newpost"
            element={<NewPost />}
          />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
