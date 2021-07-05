import CatComponent from "../CatComponent";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import React from "react";

export const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          HOME
        </Link>
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
            <CatComponent categoria={"zapatos"} />
            <CatComponent categoria={"televisores"} />
            <CatComponent categoria={"libros"} />
            <CartWidget></CartWidget>
          </div>
        </div>
      </div>
    </nav>
  );
};
