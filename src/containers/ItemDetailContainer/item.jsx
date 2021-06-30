import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { getItem } from "../../utils/const";

const ItemDetailContainer = ({ selectedId }) => {
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    getItem(selectedId)
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
  }, [selectedId]);
  return <ItemDetail producto={selectedItem} />;
};

export default ItemDetailContainer;
