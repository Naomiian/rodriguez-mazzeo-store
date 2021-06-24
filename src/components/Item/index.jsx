const Item = ({ producto }) => {
  return (
    <div>
      <img src={producto.thumbnail}></img>
      <h1>{producto.title}</h1>
      <strong>{`$ ${producto.price}`}</strong>
      <h3>{producto.id}</h3>
    </div>
  );
};

export default Item;
