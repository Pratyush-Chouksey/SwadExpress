import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
    const {cartTotal} = useContext(StoreContext);
  return (
    <div className='place-order'>
        <div className="delivery-information">
            <h2>Delivery Information</h2>
            <div className="delivery-information-inputs">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="text" placeholder='Phone Number' />
                <input type="text" placeholder='Address' />
                <input type="text" placeholder='Landmark' />
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
                <input type="text" placeholder='Pincode' />
                <input type="text" placeholder='Email'/>
            </div>
        </div>
        <div className="cart-total">
            <h2>Order Summary</h2>
            <div className="cart-total-row">
                <span>Subtotal</span>
                <span>₹{cartTotal()}</span>
            </div>
            <div className="cart-total-row">
                <span>Delivery Fee</span>
                <span>₹{cartTotal()===0?0:60}</span>
            </div>
            <div className="cart-total-row total">
                <span>Total</span>
                <span>₹{cartTotal() + (cartTotal()===0?0:60)}</span>
            </div>
            <button className='checkout-btn'>PLACE ORDER</button>
        </div>
    </div>
  )
}

export default PlaceOrder