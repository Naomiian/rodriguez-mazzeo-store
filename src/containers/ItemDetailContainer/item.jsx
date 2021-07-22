import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { CartContext } from "../../contexts/CartContext";
import { getFirestore } from "../../firebase/client";

const ItemDetailContainer = () => {
  const { selectedCat, setCartItems, selectedItem, setSelectedItem } =
    useContext(CartContext);
  const { idItems } = useParams();
  const [stock, setStock] = useState(20);
  useEffect(() => {
    async function getItem() {
      const DB = getFirestore();
      const COLLECCION = DB.collection(selectedCat);
      const ITEM = COLLECCION.doc(idItems);
      ITEM.get().then((data) =>
        setSelectedItem({ id: data.id, ...data.data() })
      );
    }
    getItem();
  }, [idItems, setSelectedItem, selectedCat]);

  function onAdd(cantidad) {
    setStock((prevStock) => prevStock - cantidad);
    setCartItems((prevItems) => [
      ...prevItems,
      { idItems, selectedItem, cantidad },
    ]);
  }
  return <ItemDetail producto={selectedItem} stock={stock} onAdd={onAdd} />;
};

export default ItemDetailContainer;
