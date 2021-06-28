import ItemCountContainer from "../../containers/ItemCountContainer";

const CardComponent = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg" class="card-img-top" alt="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"> */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}.</p>
        <strong>{product.price}</strong>
      </div>
      <ItemCountContainer></ItemCountContainer>
    </div>
  );
};

export default CardComponent;
