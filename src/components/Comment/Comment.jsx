import React, { useContext, useEffect, useState } from 'react';
import { commentContext, postContext } from '../../App';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comment = (props) => {
  const [comment] = useContext(commentContext);
  // const [post, setPost] = useContext(postContext);
  const { postId } = useParams();
  const [userComment, setUserComment] = useState([]);
  const [commentPhotoUrl, setCommentPhotoUrl] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => setUserComment(data));
    fetch(
      `https://api.unsplash.com/search/photos?page=${postId}&query=user&client_id=ENGPiAlbCv3gux5Yk5jov1TAhASH5BGNxhn_P-lkE0w`
    )
      .then((res) => res.json())
      .then((data) => {
        const newdata = data.results.slice(0, 5).map((pt) => pt.urls.small_s3);
        if (newdata == false) return;
        setCommentPhotoUrl(newdata);
      });
  }, []);
  for (const keys in userComment) {
    userComment[keys].photo = commentPhotoUrl[keys];
  }
  console.log(userComment);
  return (
    <div>
      {
        <div>
          {comment &&
            userComment.map((com, key) => (
              <CommentDetail comment={com} key={key}></CommentDetail>
            ))}
        </div>
      }
    </div>
  );
};

export default Comment;
