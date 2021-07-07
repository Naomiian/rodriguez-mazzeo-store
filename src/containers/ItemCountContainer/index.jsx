import ItemCount from "../../components/ItemCount";
import { useState } from "react";

const ItemCountContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  return (
    <ItemCount
      stock={stock}
      counter={counter}
      setCounter={setCounter}
      onAdd={onAdd}
    ></ItemCount>
  );
};

export default ItemCountContainer;
