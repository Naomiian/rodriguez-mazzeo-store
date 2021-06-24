import Item from "../Item";

const ItemList = ({ productos }) => {
  const renderItems = (productos) => {
    return productos.map((producto) => <Item producto={producto}></Item>);
  };
  return <div>{renderItems(productos)}</div>;
};

export default ItemList;
