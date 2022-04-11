import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Navbar/Shop/Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const navigate = useNavigate(auth)
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const haldleDeleteCart = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem key={product.id}
                        product={product}
                        haldleDeleteCart={haldleDeleteCart}
                    ></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button onClick={() => navigate('/shipment')}>proceured</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;