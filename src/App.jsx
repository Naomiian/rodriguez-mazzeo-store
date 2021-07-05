import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/item";
import "./App.css";
import { NAME_APP } from "./utils/const";
import { NavbarComponent } from "./components/NavbarComponent";
import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CartContainer from "./containers/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <h1>{NAME_APP}</h1>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/categoria/:idCategoria" component={ItemListContainer} />
        <Route path="/items/:idItems" component={ItemDetailContainer} />
        <Route path="/cart" component={CartContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
