import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import './inventory.css'


const Inventory = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')





    const haldleNameBlur = event => {
        setName(event.target.value)
    }
    const haldleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const haldleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const haldlePhoneNumber = event => {
        setPhone(event.target.value)
        const shiping = { name, email, phone, address }
        console.log(shiping)
    }
    return (
        <div className='form-container'>
            <div>
                <form>
                    <h3 className='form-title'>Shiping Information</h3>
                    <div className='input-group'>
                        <label htmlFor='text' name='name'>Your Name</label>
                        <input onBlur={haldleNameBlur} type="text" name="name" id="" required />

                    </div >
                    <div className='input-group'>
                        <label htmlFor='email' name='email'>Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />

                    </div >
                    <div className='input-group'>

                        <label htmlFor='password' name='address'>Address</label>
                        <input onBlur={haldleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>

                        <label htmlFor='password' name='phone'>Phone Number</label>
                        <input onBlur={haldlePhoneNumber} type="text" name="phone" id="" required />
                    </div>

                    <div >
                        <input className='input-submit' type="submit" value="Add Shipping" required />
                    </div>

                </form>

            </div>
        </div >
    );
};

export default Inventory;