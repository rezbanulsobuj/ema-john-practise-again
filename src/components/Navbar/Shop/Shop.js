import React, { useEffect, useState } from 'react';
import { addToDb, getStorecart } from '../../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStorecart()
        const savedcart = []
        for (const id in storedCart) {
            const added = products.find(product => product.id === id)
            if (added) {
                const quantity = storedCart[id]
                added.quantity = quantity
                savedcart.push(added)

            }
        }
        setCart(savedcart)
    }, [products])

    const addToCart = (selectProduct) => {

        let newCart = []
        const exist = cart.find(product => product.id === selectProduct.id)
        if (!exist) {
            selectProduct.quantity = 1
            newCart = [...cart, selectProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        addToDb(selectProduct.id)
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}

                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;