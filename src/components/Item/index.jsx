import "./item.css";

const Item = ({ setSelectedId, producto }) => {
  return (
    <>
      <div className="item">
        <img src={producto.thumbnail} alt="not showing"></img>
        <h1>{producto.title}</h1>
        <strong>{`$ ${producto.price}`}</strong>
        <h3>{producto.id}</h3>
        <button onClick={() => setSelectedId(producto.id)}>
          Mostrar Detalles
        </button>
      </div>
      <div className="item-separator" />
    </>
  );
};

export default Item;
