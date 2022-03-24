import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'

const Cart = (props) => {

    const { cart } = props
    console.log(cart)
    let total = 0;
    let shiping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shiping = shiping + product.shipping
    }
    let tax = total * .1;
    let grandTotal = total + shiping + tax;
    return (
        <div className='cart'>

            <h3>Selected  item : {quantity}</h3>
            <h3>Total Price : ${total}</h3>
            <h3>Total Shopping Charge ${shiping}</h3>
            <h3>Tax : ${tax.toFixed(2)}</h3>
            <h3>Grand Total ${grandTotal}</h3>
            <div className='clear-cart'>

                <h3 id='clear'>Clear Cart</h3>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>

            </div>
            <div className='review-cart'>

                <h3 id='review'>Review Cart</h3>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>

            </div>
        </div>
    );
};

export default Cart;