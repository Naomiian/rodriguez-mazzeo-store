import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [desgloce, setDesgloce] = useState({ cantidad: 0, precio: 0 });

  function removerCarrito(id) {
    // desgloceSus(cartItems.filter((item) => item.idItems === id));
    const nuevoArray = cartItems.filter((item) => item.idItems !== id);
    setCartItems(nuevoArray);
  }

  function clearCarrito() {
    setCartItems([]);
    setDesgloce({ cantidad: 0, precio: 0 });
  }

  return (
    <CartContext.Provider
      value={{
        desgloce,
        setDesgloce,
        removerCarrito,
        clearCarrito,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
