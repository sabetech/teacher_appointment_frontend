import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login(){
    const { user, setUser } = useContext(AuthContext);
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = () => {
        //authenticate, get a token from server side
        
    }



    return (
        <div>
            <h3>Login</h3>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="password"/>
            <button onClick={signIn}>Login</button>
            <Link to="/signup">Sign up</Link>
        </div>
    );

}