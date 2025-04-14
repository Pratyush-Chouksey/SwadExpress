import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { div, img } from "framer-motion/client";
import { StoreContext} from "../../Context/StoreContext";

const FoodItem = ({ id, name, image, description, price }) => {
    const {cartItems,addToCart,removeFromCart,} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add"
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="minus"
              className="minus-icon"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="plus"
              className="plus-icon"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₹{price * 10}</p>
      </div>
    </div>
  );
};

export default FoodItem;
