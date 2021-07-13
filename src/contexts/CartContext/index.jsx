import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  function removerCarrito(id) {
    const nuevoArray = cartItems.filter((item) => item.idItems !== id);
    setCartItems(nuevoArray);
  }
  function clearCarrito() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        v: removerCarrito,
        w: clearCarrito,
        x: cartItems,
        y: setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
