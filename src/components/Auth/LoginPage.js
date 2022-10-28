import React from "react";
import TextField from '@mui/material/TextField';
import "./LoginStyles.css";
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const LoginPage = ({username, password, submit}) => {
  return (
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
          paddingBottom: 5
        }}>
          <h2>Login</h2>
        <form className="form">
          <TextField id="email" label="email" variant="outlined" sx={{marginBottom: 2}} onChange={ (e) => username(e.target.value)} />
          <TextField id="password" label="password" variant="outlined" sx={{marginBottom: 2}} onChange={ (e)=> password(e.target.value)} />
          <Button variant="contained" onClick={()=>submit()}>Login</Button>
        </form>
        Don't Have an Account?<Link to="/signup"> Click to Sign up!</Link>
      </Paper>
    </div>
  );
};

export default LoginPage;
