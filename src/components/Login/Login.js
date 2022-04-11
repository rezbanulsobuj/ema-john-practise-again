import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword, error, user, loading] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const haldleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const haldlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate('/home')
    }
    const haldleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <form onSubmit={haldleUserSignIn}>
                    <h3 className='form-title'>Login</h3>
                    <div className='input-group'>
                        <label htmlFor='email' name='email'>Email</label>
                        <input onBlur={haldleEmailBlur} type="email" name="email" id="" required />

                    </div >
                    <div className='input-group'>

                        <label htmlFor='password' name='password'>Password</label>
                        <input onBlur={haldlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}> {error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <div >
                        <input className='input-submit' type="submit" value="LogIn" />
                    </div>
                </form>
                <p>
                    New to Ema-john? <Link className='link' to="/setUp">Create An Account?</Link>
                </p>
                <hr />

                <div className='google'>

                    <p>Continue With Google</p>
                </div>
            </div>
        </div >
    );
};

export default Login;