import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Checkout.css'
import { getBasketTotal } from "./reducer";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";

function Checkout () {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='upcheckout'>

                <div className='shopping__cart'>
                    <div className='cartTitle'>
                        <h1>Shopping Cart</h1>
                        <p>Price</p>
                        
                    </div>
                    <div className='items'>
                    {basket.map(item => (
            <CheckoutProduct
              trip={item.trip}
              src={item.src}
              price={item.price}
              rating={item.rating}
            />
          ))}
                    </div>
                    <CurrencyFormat
                            renderText={(value)=> (
                                <>
                                    <p className='totalleft'>
                                        Subtotal ({basket?.length} items):<b>{value}</b>
                                    
                                    </p>

                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} // Part of the homework
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                    
                </div>

                <div className='subtotal'>
                    <div className='ptc'>
                        <CurrencyFormat
                            renderText={(value)=> (
                                <>
                                    <p>
                                        Subtotal ({basket.length} items) : <b>{value}</b>
                                    </p>

                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} // Part of the homework
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp"}
                        />
                        <button>Process to Checkout</button>
                    </div>
                    <div className='item__sugestion'>
                    </div>
                </div> 

            </div>

        </div>
    )
}

export default Checkout