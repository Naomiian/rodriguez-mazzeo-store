import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartComponent = ({ item }) => {
  const { removerCarrito } = useContext(CartContext);
  return (
    <>
      <div className="item">
        <img src={item.selectedItem.thumbnail} alt="not showing"></img>
        <>
          {" "}
          <h3>{item.selectedItem.title}</h3>
          <strong>{`Precio: $ ${item.selectedItem.price}`}</strong>
          <h3>Cantidad: {item.cantidad}</h3>
        </>
        <button onClick={() => removerCarrito(item.idItems)}>
          {" "}
          Remover del Carrito{" "}
        </button>
      </div>
    </>
  );
};
export default CartComponent;
