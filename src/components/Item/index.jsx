import "./item.css";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Item = ({ producto }) => {
  const { setSelectedCat } = useContext(CartContext);
  const categoria = useParams();
  console.log(categoria);
  return (
    <>
      <div className="item">
        <img src={producto.thumbnail} alt="not showing"></img>
        <h1>{producto.title}</h1>
        <strong>{`$ ${producto.price}`}</strong>
        <h3>{producto.id}</h3>
        <Link to={`/items/${producto.id}`}>
          <button
            onClick={() => setSelectedCat(categoria.idCategoria)}
            type="button"
            className="btn btn-secondary"
          >
            Mostrar Detalles
          </button>
        </Link>
      </div>
      <div className="item-separator" />
    </>
  );
};

export default Item;
