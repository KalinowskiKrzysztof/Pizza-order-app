import React from "react";


// Set cart context to defalut values
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
  });
  
  export default CartContext;