import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/item";
import "./App.css";
import { NAME_APP, getData } from "./utils/const";
import { NavbarComponent } from "./components/NavbarComponent";
import { useEffect, useState } from "react";

const waitForData = async () => {
  try {
    const data = await getData("televisores");
    const aux = data.results.map((element) => {
      return {
        title: element.title,
        id: element.id,
        thumbnail: element.thumbnail,
        price: element.price,
      };
    });
    return aux;
  } catch (error) {
    throw error;
  }
};

function App() {
  const [productos, setProductos] = useState([]);
  const [selectedId, setSelectedId] = useState("-1");

  useEffect(() => {
    waitForData()
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{NAME_APP}</h1>

      <NavbarComponent />
      {selectedId !== "-1" ? (
        <ItemDetailContainer selectedId={selectedId} />
      ) : null}
      {/* OTRO METODO {selectedId !== "-1" && <ItemDetailContainer selectedId={selectedId} />} */}
      <ItemListContainer setSelectedId={setSelectedId} productos={productos} />
    </div>
  );
}

export default App;
