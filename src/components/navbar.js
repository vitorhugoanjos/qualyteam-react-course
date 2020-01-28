import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { AddButton } from "./add-button";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar--logo-container">
      <figure className="">
        <img src={logo} alt="Uma imagem impressionante" />
      </figure>
    </Link>
    <div className="navbar--center-container">
      <input
        role="search"
        placeholder="Procure uma receita"
        aria-labelledby="search"
      />
    </div>
    <div className="navbar--right-container">
      <AddButton />
    </div>
  </nav>
);

export { Navbar };
