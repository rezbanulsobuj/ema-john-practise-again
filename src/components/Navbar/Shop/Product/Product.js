import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    const { addToCart, product } = props

    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <span className='price'>Price : ${price}</span> <br />
                <span>Manufacturing : {seller}</span> <br />
                <span>Ratings : {ratings}</span>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;