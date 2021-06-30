import "./itemDetail.css";
const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail-container">
      <img src={producto.thumbnail} alt="not showing"></img>
      <h1>{producto.title}</h1>
      <strong>{`$ ${producto.price}`}</strong>
    </div>
  );
};

export default ItemDetail;
