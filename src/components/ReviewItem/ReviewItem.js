import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = (props) => {
    const { product, haldleDeleteCart } = props
    const { name, price, shipping, img } = product
    return (
        <div className='review'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='reviewitem-container'>
                <div className='reviewitem-details' title={name}>
                    <p>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>price ${price}</p>
                    <p> shipping charge ${shipping}</p>
                </div>
                <button className='review-delete' onClick={() => haldleDeleteCart(product)}>
                    <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;