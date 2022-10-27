import React, {useContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getUser, createUser } from "../features/usersSlice";

export default function SignUp(){
    const { user, setUser } = useContext(AuthContext);
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const loggedInUser = useSelector(getUser);

    useEffect(() => {
        console.log("LOGGED IN USER:::", loggedInUser);
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    },[loggedInUser]);

    const signUp = () => {

        dispatch(createUser({name, email, password}));
        
    }

    return (
        <div>
            <h3>Sign up</h3>
            <input type="text" placeholder="name" onChange={ onChangeName } />
            <input type="text" placeholder="email" onChange={ onChangeEmail }/>
            <input type="password" placeholder="password" onChange={ onChangePassword } />
            <button onClick={signUp}>Login</button>
            <Link to="/signup">Sign up</Link>
        </div>
    );

}