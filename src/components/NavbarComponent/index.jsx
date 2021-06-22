import {
  NAME_CAT_1,
  NAME_CAT_2,
  NAME_CAT_3,
  NAME_CAT_4,
} from "../../utils/const";
import CatComponent from "../CatComponent";
import CartWidget from "../CartWidget";

export const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          HOME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <CatComponent />
            <CatComponent />
            <CatComponent />
            <CatComponent />
            <CartWidget></CartWidget>
          </div>
        </div>
      </div>
    </nav>
  );
};
