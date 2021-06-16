const CardComponent = ({ product, title }) => {
  return (
    <button>
      <div>
        <h2>{title}</h2>
        <h1>{product.name}</h1>
        <strong>{product.price}</strong>
      </div>
    </button>
  );
};

export default CardComponent;
