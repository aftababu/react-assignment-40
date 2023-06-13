import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  // console.log(post);

  if (post == false) return;
  return (
    <div>
      <h1>post detail : {postId}</h1>
      <div style={{ display: 'flex', gap: '50px', margin: '10px 30px' }}>
        <Post post={post} detail={true}></Post>
        <Comment></Comment>
      </div>
    </div>
  );
};

export default PostDetail;
