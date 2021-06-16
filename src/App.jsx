import logo from "./logo.svg";
import ItemList from "./containers/ItemList";
import "./App.css";
import { NAME_APP } from "./utils/const";
import { NavbarComponent } from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <h1>{NAME_APP}</h1>
      <NavbarComponent />
      <ItemList />
    </div>
  );
}

export default App;
