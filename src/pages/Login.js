import React, {useContext, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "../components/Auth/LoginPage";

export default function Login(){
    const { user, setUser } = useContext(AuthContext);
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = () => {
        //authenticate, get a token from server side
        
    }



    return (
        <>
            <LoginPage username={onChangeUsername} password={onChangePassword} submit={signIn}/>
        </>
    );

}