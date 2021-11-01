import React, { createContext, useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log('came from', location.state?.from);

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h3 className="text-primary">Please Log in to proceed</h3>
                <button
                    className="btn btn-outline-primary"

                    onClick={handleGoogleLogIn}
                >Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;