import React from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, cartTotal } =
    useContext(StoreContext);

    const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-description">
        <div className="cart-description-header">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="cart-description-list">
          {food_list.map((e) =>
            cartItems[e._id] ? (
              <div className="cart-description-item" key={e._id}>
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p >₹{e.price * 10}</p>
                <p >{cartItems[e._id]}</p>
                <p>₹{e.price * cartItems[e._id] * 10}</p>
                <p onClick={() => removeFromCart(e._id)}>x</p>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="cart-totals-container">
        <div className="cart-totals-left">
          <h2>Cart Totals</h2>
          <div className="cart-totals-row">
            <span>Subtotal</span>
            <span>₹{cartTotal()}</span>
          </div>
          <div className="cart-totals-row">
            <span>Delivery Fee</span>
            <span>{cartTotal()===0?0:60}</span>
          </div>
          <div className="cart-totals-row total">
            <span>Total</span>
            <span>₹{cartTotal() + (cartTotal()===0?0:60)}</span>
          </div>
          <button onClick={()=>navigate('/order')} className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-totals-right">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-code-box">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
