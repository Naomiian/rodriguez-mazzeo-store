import { useContext, useEffect } from "react";
import CartComponent from "../../components/CartComponent";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
const CartContainer = () => {
  const { desgloce, setDesgloce, clearCarrito, cartItems } =
    useContext(CartContext);

  const renderCart = (carrito) => {
    return carrito.map((item) => {
      return <CartComponent key={item.idItems} item={item}></CartComponent>;
    });
  };

  useEffect(() => {
    const aux = cartItems.reduce(
      (acumulator, current) => {
        return {
          cantidad: acumulator.cantidad + current.cantidad,
          precio:
            acumulator.precio + current.selectedItem.price * current.cantidad,
        };
      },
      { cantidad: 0, precio: 0 }
    );
    setDesgloce(aux);
  }, [setDesgloce, cartItems]);

  return cartItems.length > 0 ? (
    <>
      <nav className="nav nav-pills nav-fill">
        <button className="nav-item nav-link active" onClick={clearCarrito}>
          Limpiar Carrito
        </button>
        <strong className="nav-item nav-link disabled">
          Total de items: {desgloce.cantidad}
        </strong>
        <strong className="nav-item nav-link disabled">
          Precio total: ${desgloce.precio}
        </strong>
      </nav>
      <div>{renderCart(cartItems)}</div>
    </>
  ) : (
    <>
      <h1>Carro Vacio</h1>
      <div>
        Podes pasar y comprar
        <Link to={"/categoria/algo"}>
          <button> ALGO </button>
        </Link>
      </div>
    </>
  );
};

export default CartContainer;
