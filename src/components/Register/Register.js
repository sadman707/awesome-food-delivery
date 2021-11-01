import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {


    // const [user, setUser] = useState({});


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);

    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }

    const handleRegistration = e => {
        console.log('handle registration', email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }



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
        <div className="Register-form">
            <div>
                <h2>Register your Account</h2>



                <form onSubmit={handleRegistration}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Example checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>


                <p>Already have an account? <Link to="/login">Log In</Link> </p>

                <div>You can also do this sign in</div>
                <button className="btn btn-outline-success" onClick={handleGoogleLogIn}>Google Sign In</button>

            </div>

        </div>
    );
};

export default Register;