import ItemCount from "../../components/ItemCount";

const ItemCountContainer = ({ counter, setCounter }) => {
  return <ItemCount counter={counter} setCounter={setCounter}></ItemCount>;
};

export default ItemCountContainer;
