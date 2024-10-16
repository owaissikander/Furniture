

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {

    const [cartItems, setCartItems] = React.useState([]);
    console.log("cartItems--con", cartItems);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;