import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <div className="item">
        <img src={producto.thumbnail} alt="not showing"></img>
        <h1>{producto.title}</h1>
        <strong>{`$ ${producto.price}`}</strong>
        <h3>{producto.id}</h3>
        <button>
          <Link to={`/items/${producto.id}`}> Mostrar Detalles</Link>
        </button>
      </div>
      <div className="item-separator" />
    </>
  );
};

export default Item;
