import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { getItem } from "../../utils/const";

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const { idItems } = useParams();

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
  return <ItemDetail producto={selectedItem} />;
};

export default ItemDetailContainer;
