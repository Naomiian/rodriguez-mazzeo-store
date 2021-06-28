import ItemCount from "../../components/ItemCount";
import { useState } from "react";

const ItemCountContainer = () => {
  const stock = 10;
  const [counter, setCounter] = useState(1);
  const onAdd = () => {
    console.log(`Compraste ${counter} productos `);
  };
  return (
    <ItemCount
      stock={stock}
      onAdd={onAdd}
      counter={counter}
      setCounter={setCounter}
    ></ItemCount>
  );
};

export default ItemCountContainer;
