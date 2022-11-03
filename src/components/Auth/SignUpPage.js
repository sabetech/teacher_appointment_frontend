import React from 'react';
import TextField from '@mui/material/TextField';
import './LoginStyles.css';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const SignUpPage = ({
  name, email, password, submit,
}) => (
  <div className="App">
    <Paper sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      minWidth: 300,
      minHeight: 300,
      marginLeft: 3,
      marginRight: 3,
      marginTop: '20%',
      paddingTop: 5,
      paddingBottom: 5,
    }}
    >

      <h3>Sign Up</h3>
      <form className="form">
        <TextField id="name" label="name" variant="outlined" sx={{ marginBottom: 2 }} onChange={(e) => name(e.target.value)} />
        <TextField id="email" label="email" variant="outlined" sx={{ marginBottom: 2 }} onChange={(e) => email(e.target.value)} />
        <TextField id="password" type="password" label="password" variant="outlined" sx={{ marginBottom: 2 }} onChange={(e) => password(e.target.value)} />
        <Button variant="contained" onClick={() => submit()}>Sign Up</Button>
      </form>
      Got an Account?
      {' '}
      <Link to="/">Click here to Sign in</Link>
    </Paper>
  </div>
);

export default SignUpPage;
