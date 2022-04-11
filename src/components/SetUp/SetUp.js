import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SetUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SetUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const navigate = useNavigate();
    const haldleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const haldlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const haldleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/login')
    }
    const haldleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('two password did not match')
            return;
        }
        if (password.length < 6) {
            setError('please 6 character password minimum')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={haldleCreateUser}>
                    <h3 className='form-title'>Sign Up</h3>
                    <div className='input-group'>
                        <label htmlFor='email' name='email'>Email</label>
                        <input onBlur={haldleEmailBlur} type="email" name="email" id="" required />

                    </div >
                    <div className='input-group'>

                        <label htmlFor='password' name='password'>Password</label>
                        <input onBlur={haldlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>

                        <label htmlFor='password' name='password'>Confirm Password</label>
                        <input onBlur={haldleConfirmPassword} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <div >
                        <input className='input-submit' type="submit" value="LogIn" />
                    </div>

                </form>
                <p>
                    New to Ema-john? <Link className='link' to="/login">Login?</Link>
                </p>
                <hr />

                <div className='google'>

                    <p>Continue With Google</p>
                </div>
            </div>
        </div >
    );
};

export default SetUp;