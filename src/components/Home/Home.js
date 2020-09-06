import React, { useState, useEffect } from "react";
import Posts from "./HomeDetails/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Posts post={post}></Posts>
      ))}
    </>
  );
};

export default Home;
