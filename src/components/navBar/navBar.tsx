//Librerias
import React, { useState } from "react";

//Componentes
import { Searchbox } from "../searchBox/searchBox";
import { ModalLogin } from "../modals/modals";

//Icons
import { BsPersonCircle, BsCart } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

//CSS
import "./navBar.css";
import { render } from "@testing-library/react";

export const NavBarDefault: React.FC<{}> = () => {
  const [modalStateLogin, SetModalStateLogin] = useState(false);

  return (
    <div className="app-container-navBar">
      <div className="app-container-navBar-Logo">
        <img
          src="https://drive.google.com/uc?export=view&id=1dk1XPtnOFFozdM5gVrO5Jl7poi6hrZLi"
          alt="Villalibros Logo"
          title="Logo Villalibros"
        />
      </div>

      <div className="app-container-navBar-searchbox">
        <Searchbox
          placeholder="Buscar por líbro, autor o categoría"
          handleSearch={() => alert("Buscado")}
        />
      </div>

      <div className="app-container-navBar-user">
        <BsPersonCircle size={25} onClick={() => SetModalStateLogin(true)} />
        <label>Iniciar Sesión / Registrarse</label>

        <ModalLogin state={modalStateLogin} handleChange={SetModalStateLogin} />
      </div>

      <div className="app-container-navBar-history">
        <BiCalendar size={25} />
        <label>Historial de préstamos</label>
      </div>

      <div className="app-container-navBar-cart">
        <BsCart size={25} />
        <label>Carrito de compras</label>
      </div>
    </div>
  );
};
