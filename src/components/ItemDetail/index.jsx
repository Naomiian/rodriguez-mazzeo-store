import "./itemDetail.css";
import ItemCountContainer from "../../containers/ItemCountContainer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ItemDetail = ({ producto, stock, onAdd }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="item-detail-container">
      <div>
        <img src={producto.thumbnail} alt="not showing"></img>
        <h1>{producto.title}</h1>
        <strong>{`$ ${producto.price}`}</strong>
      </div>
      <br />
      <div>
        <button type="button" className="btn btn-secondary">
          Stock: {stock}
        </button>
      </div>
      <br />
      <div>
        {!cartItems.some((item) => item.idItems === producto.id) ? (
          <ItemCountContainer stock={stock} onAdd={onAdd} />
        ) : (
          <Link to={"/cart"}>
            <button type="button" className="btn btn-secondary">
              {" "}
              Compra finalizada
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
