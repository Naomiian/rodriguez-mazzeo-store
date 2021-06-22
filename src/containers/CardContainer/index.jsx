import CardComponent from "../../components/CardComponent";

const CardContainer = () => {
  const product = {
    name: "Nombre Producto",
    price: 999,
    description: "Descripcion Producto",
    counter: 0,
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src="..." class="card-img-top" alt="..."></img> */}
      <div className="card-body">
        <CardComponent product={product}></CardComponent>
      </div>
    </div>
  );
};

export default CardContainer;
