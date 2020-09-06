import React, { useState, useEffect } from "react";
import Post from "./Post&Comments/Post";
import Comments from "./Post&Comments/Comments";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <Post />

      {comments.map((comment) => (
        <Comments comment={comment}></Comments>
      ))}
    </div>
  );
};

export default PostDetails;
