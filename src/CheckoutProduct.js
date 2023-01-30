import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ src, trip, rating, subtrip, type, price, location, pax,hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={src} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{trip}</p>
                <p className="checkoutProduct__price">
                    <small>SGD</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><i className='fa-solid fa-star'></i></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                <hr></hr>
            </div>
        </div>
    )
}

export default CheckoutProduct