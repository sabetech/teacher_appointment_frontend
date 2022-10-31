import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Teachers.css";

const Teacher = ({name, title, photo}) => 
<div>
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
</div>

export default Teacher;