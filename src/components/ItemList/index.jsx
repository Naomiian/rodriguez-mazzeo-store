import Item from "../Item";
import "./itemList.css";

const ItemList = ({ productos }) => {
  const renderItems = (productos) => {
    return productos.map((producto) => (
      <Item key={producto.id} producto={producto}></Item>
    ));
  };
  return <div className="item-list-container">{renderItems(productos)}</div>;
};

export default ItemList;
