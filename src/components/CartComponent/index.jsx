import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartComponent = ({ item }) => {
  const { v } = useContext(CartContext);
  return (
    <>
      <div className="item">
        <img src={item.selectedItem.thumbnail} alt="not showing"></img>
        <h1>{item.selectedItem.title}</h1>
        <strong>{`$ ${item.selectedItem.price}`}</strong>
        <h3>{item.idItems}</h3>
        <h3>{item.cantidad}</h3>
        <button onClick={() => v(item.idItems)}> Remover del Carrito </button>
      </div>
    </>
  );
};
export default CartComponent;
