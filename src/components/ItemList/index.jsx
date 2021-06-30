import Item from "../Item";
import "./itemList.css";

const ItemList = ({ setSelectedId, productos }) => {
  const renderItems = (productos) => {
    return productos.map((producto) => (
      <Item
        key={producto.id}
        setSelectedId={setSelectedId}
        producto={producto}
      ></Item>
    ));
  };
  return <div className="item-list-container">{renderItems(productos)}</div>;
};

export default ItemList;
