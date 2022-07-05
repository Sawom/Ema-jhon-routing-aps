import React from 'react';
import { useHistory } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart/UseCart';
import UseProduct from '../../Hooks/UseProduct/UseProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart' 
import ReviewItem from '../ReviewItem/ReviewItem';
const OrderReview = () => {
    const[products,setProducts] = UseProduct([]);
    const[cart,setCart] =  UseCart(products);
    const history = useHistory();
    // remove item
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key );
        setCart(newCart);
        removeFromDb(key); //remove from local storage
    }
    //  place order
    const handlePlaceOrder = ()=>{
        history.push('/placeorder');
        setCart([]);
        clearTheCart(); // clear local storage
    }
    return (
        <div className='shop-container' >
            <div className='product-container'>
                {/* show cart item */}
                {
                    cart.map(product => <ReviewItem
                        product={product} 
                        key={product.key}
                        handleRemove={handleRemove}
                    ></ReviewItem> )
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className='btn-regular' >place order</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;