import React, { useState } from 'react';


const Shipment = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')




    const haldleNameBlur = event => {
        setName(event.target.value)
    }
    const haldleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const haldlePhoneNumber = event => {
        setPhone(event.target.value)
    }

    return (
        <div className='form-container'>
            <div>
                <form>
                    <h3 className='form-title'>Shiping Information</h3>
                    <div className='input-group'>
                        <label htmlFor='text' name='name'>Name</label>
                        <input onBlur={haldleNameBlur} type="text" name="name" id="" required />

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

export default Shipment;