import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
// import { photoContext } from '../Home/Home';

const CommentDetail = ({ comment }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <img
        src={comment.photo}
        alt='photo'
        style={{ minWidth: '80px', borderRadius: '50%', height: '80px' }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {comment.email}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CommentDetail;
