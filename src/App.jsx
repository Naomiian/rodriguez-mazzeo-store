import logo from "./logo.svg";
import ItemListContainer from "./containers/ItemListContainer";
import "./App.css";
import { NAME_APP, getData } from "./utils/const";
import { NavbarComponent } from "./components/NavbarComponent";
import { useEffect, useState } from "react";

const waitForData = async () => {
  try {
    const data = await getData("zapatillas");
    const aux = data.results.map((element) => {
      return {
        title: element.title,
        id: element.id,
        img: element.thumbnail,
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
      <ItemListContainer productos={productos} />
    </div>
  );
}

export default App;
