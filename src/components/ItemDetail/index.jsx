import "./itemDetail.css";
import ItemCountContainer from "../../containers/ItemCountContainer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ItemDetail = ({ producto }) => {
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
          Stock: {producto.stock}
        </button>
      </div>
      <br />
      <div>
        {!cartItems.some((item) => item.idItems === producto.id) ? (
          <ItemCountContainer
            producto={producto}
            buttonText={"Agregar al Carrito"}
            cantidad={1}
          />
        ) : (
          <Link to={"/cart"}>
            <button type="button" className="btn btn-secondary">
              {" "}
              Objeto en el Carrito
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
