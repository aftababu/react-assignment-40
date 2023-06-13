import { useContext, useEffect } from 'react';
import { postContext } from '../../App';
import Post from '../Post/Post';
import Grid from '@mui/material/Grid';

// import { useParams } from 'react-router-dom';

const Home = () => {
  // const { postId } = useParams()
  const [post, setPost] = useContext(postContext);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPost(data.slice(0, 50)));
  }, []);
  // if (post == false) return;
  // console.log(post);

  // if (photo == false) return;

  return (
    <div>
      <h1>home</h1>
      <Grid
        className='grid'
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {post.map((pt, key) => (
          <Grid item xs={2} sm={4} md={4} key={key}>
            <Post post={pt} detail={false}></Post>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
