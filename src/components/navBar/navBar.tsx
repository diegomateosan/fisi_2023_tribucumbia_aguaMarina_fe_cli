//Librerias
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Componentes
import { Searchbox } from "../searchBox/searchBox";
import { ModalLogin, ModalRegister } from "../modals/modals";

//Icons
import { BsPersonCircle, BsCart } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

//CSS
import "./navBar.css";

export const NavBarDefault: React.FC<{}> = () => {
  const [modalStateLogin, SetModalStateLogin] = useState(false);
  const navigate = useNavigate();

  const [modalStateRegister, SetModalStateRegister] = useState(false);


  return (
    <div className="app-container-navBar-header">
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

        <div className="app-container-navBar-links">
          <div className="app-container-navBar-user">
            <BsPersonCircle className="icon icon-user" />
            <p onClick={() => SetModalStateLogin(true)}>
              {" "}
              Iniciar Sesión / Registrarse
            </p>
            <ModalLogin
              state={modalStateLogin}
              handleChange={SetModalStateLogin}
              registerState={modalStateRegister}
              handleRegister={SetModalStateRegister}
            />

            <ModalRegister
              state={modalStateLogin}
              handleChange={SetModalStateLogin}
              registerState={modalStateRegister}
              handleRegister={SetModalStateRegister}
            />
          </div>

          <div className="app-container-navBar-history">
            <BiCalendar className="icon icon-history" />
            <p>Historial de Préstamos</p>
          </div>

          <div className="app-container-navBar-cart">
            <BsCart className="icon icon-cart" />
            <p>Carrito de Compras</p>
          </div>
        </div>
      </div>
    </div>
  );
};
