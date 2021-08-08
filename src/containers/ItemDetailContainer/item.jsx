import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { CartContext } from "../../contexts/CartContext";
import { getFirestore } from "../../firebase/client";

const ItemDetailContainer = () => {
  const { selectedCat, selectedItem, setSelectedItem } =
    useContext(CartContext);
  const { idItems } = useParams();

  useEffect(() => {
    async function getItem() {
      const DB = getFirestore();
      const COLLECCION = DB.collection(selectedCat);
      const ITEM = COLLECCION.doc(idItems);
      ITEM.get().then((data) =>
        setSelectedItem({ id: data.id, cat: selectedCat, ...data.data() })
      );
    }
    getItem();
  }, [idItems, setSelectedItem, selectedCat]);

  return <ItemDetail producto={selectedItem} />;
};

export default ItemDetailContainer;
