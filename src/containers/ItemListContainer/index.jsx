import ItemList from "../../components/ItemList";
import { useEffect, useState, React } from "react";
import { waitForData } from "../../utils/const";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    waitForData(idCategoria)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idCategoria]);

  return productos.length !== 0 ? (
    <ItemList productos={productos} />
  ) : (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ItemListContainer;
