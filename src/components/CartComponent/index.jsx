import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ItemCountContainer from "../../containers/ItemCountContainer";

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
          <div>
            <h3>Cantidad: </h3>
            <ItemCountContainer
              producto={item.selectedItem}
              buttonText={"Guardar Cambios"}
              cantidad={item.cantidad}
            />
          </div>
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
