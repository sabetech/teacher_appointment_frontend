import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUpPage from '../components/Auth/SignUpPage';
import { AuthContext } from '../context/AuthContext';
import { getUser, createUser } from '../features/usersSlice';

export default function SignUp() {
  const { setUser } = useContext(AuthContext);
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const loggedInUser = useSelector(getUser);

  useEffect(() => {
    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    }
  }, [loggedInUser]);

  const signUp = () => {
    dispatch(createUser({ name, email, password }));
  };

  return (
    <>
      <SignUpPage name={onChangeName} email={onChangeEmail} password={onChangePassword} submit={signUp} />
    </>
  );
}
