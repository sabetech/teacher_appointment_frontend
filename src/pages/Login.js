import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthContext';
import LoginPage from '../components/Auth/LoginPage';
import { signInUser, getUser } from '../features/usersSlice';

export default function Login() {
  const { user, setUser } = useContext(AuthContext);
  const [email, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const loggedInUser = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    }
  }, [loggedInUser]);

  const signIn = () => {
    // authenticate, get a token from server side
    dispatch(signInUser({ email, password }));
  };

  return (
    <>
      <LoginPage username={onChangeUsername} password={onChangePassword} submit={signIn} />
    </>
  );
}
