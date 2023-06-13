import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { commentContext } from '../../App';

const Post = (props) => {
  const { id, title, body } = props.post;
  const [photo, setPhoto] = useState([]);
  const [comment, setComment] = useContext(commentContext);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPhoto(data.url));
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={photo} title='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          {props.detail && (
            <Button size='small' onClick={() => setComment(!comment)}>
              show Comment
            </Button>
          )}

          <Button size='small' onClick={() => handleNavigate(id)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
