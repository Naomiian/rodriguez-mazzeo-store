import "./itemDetail.css";
import ItemCountContainer from "../../containers/ItemCountContainer";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto, stock, onAdd, ocultar }) => {
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
        {ocultar ? (
          <Link to={"/cart"}>
            <button type="button" className="btn btn-secondary">
              {" "}
              Compra finalizada
            </button>
          </Link>
        ) : (
          <ItemCountContainer stock={stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
