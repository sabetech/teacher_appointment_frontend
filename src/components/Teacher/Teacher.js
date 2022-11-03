import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Teachers.css';

const Teacher = ({
  id, name, title, photo,
}) => (
  <div style={{ cursor: 'pointer' }}>
    <Link to={`/teachers/details/${id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{ width: 400, height: 400 }}
        style={{
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={photo}
          alt="profile photo"
          sx={{ width: 250 }}
          style={{ borderRadius: '50%' }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              textUnderline: 'none',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'center' }}
          >
            TITLE:
            {' '}
            {title}
          </Typography>

        </CardContent>
      </Card>
    </Link>
  </div>
);

export default Teacher;
