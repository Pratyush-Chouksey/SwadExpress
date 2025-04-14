import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    function addToCart(itemId) {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}));
        }
        else {
            setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1}));
        }
    }

    function removeFromCart(itemId) {
        if (cartItems[itemId] > 1) {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}));
        }
        else {
            setCartItems((prev) => {
                const newCartItems = {...prev};
                delete newCartItems[itemId];
                return newCartItems;
            });
        }
    }

    function cartTotal() {
        let total = 0;
        for (let itemId in cartItems) {
            const item = food_list.find((item) => item._id === itemId);
            if (item) {
                total += item.price * cartItems[itemId] * 10;
            }
        }
        return total;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        cartTotal,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
