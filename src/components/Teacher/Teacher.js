import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Teachers.css";

const Teacher = ({id, name, title, photo }) => 
  <div style={{ cursor: "pointer" }}>
    <Link to={`/teachers/details/${id}`}>
        <Card sx={{ width: 250, height: 340}}>
          <CardMedia
            component="img"
            height="250"
            image={photo}
            alt="profile photo"
            sx={{ width: 250 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              TITLE: {title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
  </div>

export default Teacher;