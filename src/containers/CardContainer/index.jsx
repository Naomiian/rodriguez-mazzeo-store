import CardComponent from "../../components/CardComponent";

const CardContainer = () => {
    const product ={ name,price},title;
  return (
    <div class="card" style="width: 18rem;">
      {/* <img src="..." class="card-img-top" alt="..."></img> */}
      <div class="card-body">
        <CardComponent product title></CardComponent>
      </div>
    </div>
  );
};

export default CardContainer
