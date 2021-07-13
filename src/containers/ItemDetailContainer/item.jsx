import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { CartContext } from "../../contexts/CartContext";
import { getItem } from "../../utils/const";

const ItemDetailContainer = () => {
  const { y } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState({});
  const { idItems } = useParams();
  const [stock, setStock] = useState(20);
  const [ocultar, setOcultar] = useState(0);
  useEffect(() => {
    getItem(idItems)
      .then((response) => {
        const { title, price, thumbnail } = response;
        const aux = {
          title,
          price,
          thumbnail,
        };
        setSelectedItem(aux);
      })
      .catch((error) => console.log(error));
  }, [idItems]);

  function onAdd(cantidad) {
    setStock((prevStock) => prevStock - cantidad);
    y((prevItems) => [...prevItems, { idItems, selectedItem, cantidad }]);

    setOcultar(1);
  }
  return (
    <ItemDetail
      producto={selectedItem}
      stock={stock}
      onAdd={onAdd}
      ocultar={ocultar}
    />
  );
};

export default ItemDetailContainer;
