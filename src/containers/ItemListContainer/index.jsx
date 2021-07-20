import ItemList from "../../components/ItemList";
import { useEffect, useState, React } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/client";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    async function getData() {
      const DB = getFirestore();
      const COLLECTION = DB.collection(idCategoria);
      const RESPONSE = await COLLECTION.get();
      setProductos(
        RESPONSE.docs.map((element) => {
          const { id } = element;
          return { ...element.data(), id };
        })
      );
    }
    getData();
  }, [idCategoria, setProductos]);

  return productos.length !== 0 ? (
    <ItemList productos={productos} />
  ) : (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ItemListContainer;
