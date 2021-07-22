import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [desgloce, setDesgloce] = useState({ cantidad: 0, precio: 0 });
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  function removerCarrito(id) {
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
        selectedCat,
        setSelectedCat,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
