import ItemCount from "../../components/ItemCount";
import { useState } from "react";

const ItemCountContainer = ({ producto, buttonText, cantidad }) => {
  const [counter, setCounter] = useState(cantidad);

  return (
    <ItemCount
      counter={counter}
      setCounter={setCounter}
      producto={producto}
      buttonText={buttonText}
    ></ItemCount>
  );
};

export default ItemCountContainer;
