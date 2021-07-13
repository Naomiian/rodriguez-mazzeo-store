import { useContext } from "react";
import CartComponent from "../../components/CartComponent";
import { CartContext } from "../../contexts/CartContext";
const CartContainer = () => {
  const { w, x } = useContext(CartContext);
  console.log("cartContainer", x);
  const renderCart = (carrito) => {
    return carrito.map((item) => (
      <CartComponent key={item.idItems} item={item}></CartComponent>
    ));
  };
  return x.length > 0 ? (
    <>
      <button onClick={w}>Limpiar Carrito</button>
      <div>{renderCart(x)}</div>
    </>
  ) : (
    <h1>Carro Vacio</h1>
  );
};

export default CartContainer;
