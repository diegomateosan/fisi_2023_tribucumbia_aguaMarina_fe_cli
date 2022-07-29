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
import { useShoppingCart } from "../context/ShoppingCartContext";

export const NavBarDefault: React.FC<{
  userState: boolean;
  setUserState: (txt: boolean) => void;
  setUserValue: (txt: string) => void;
  userValue: string;
}> = ({ userState, setUserState, setUserValue, userValue }) => {
  const [modalStateLogin, SetModalStateLogin] = useState(false);
  const navigate = useNavigate();
  const [modalStateRegister, SetModalStateRegister] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const { openCart, cartQuantity } = useShoppingCart();

  const toHistory = () => {
    navigate("/history");
  };

  const MostrarState = () => {
    alert(userState);
  };

  return (
    <div className="app-container-navBar-header">
      <div className="app-container-navBar">
        <div className="app-container-navBar-Logo">
          <img
            src="https://drive.google.com/uc?export=view&id=1dk1XPtnOFFozdM5gVrO5Jl7poi6hrZLi"
            alt="Villalibros Logo"
            title="Logo Villalibros"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="app-container-navBar-searchbox">
          <Searchbox
            placeholder="Buscar por líbro, autor o categoría"
            handleSearch={() => alert("Buscado")}
          />
        </div>

        <div className="app-container-navBar-links">
          <div className="app-container-navBar-login-register">
            <div className="app-container-navBar-user">
              <BsPersonCircle
                className="icon icon-user"
                onClick={() => SetModalStateLogin(true)}
              />
              {userState ? (
                <p onClick={MostrarState}>{userValue}</p>
              ) : (
                <p onClick={() => SetModalStateLogin(true)}>
                  Iniciar Sesión / Registrarse
                </p>
              )}
            </div>

            <ModalLogin
              state={modalStateLogin}
              handleChange={SetModalStateLogin}
              registerState={modalStateRegister}
              handleRegister={SetModalStateRegister}
              userState={userState}
              setUserState={(txt: boolean) => setUserState(txt)}
              emailValue={emailValue}
              setEmail={(txt: string) => setEmailValue(txt)}
              setUserValue={(txt: string) => setUserValue(txt)}
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
            <p onClick={toHistory}>Historial de Préstamos</p>
          </div>

          <div className="app-container-navBar-cart" onClick={openCart}>
            <BsCart className="icon icon-cart" />
            {/* <div className="counter-orders">

            </div> */}
            <p>Carrito de Compras</p>
          </div>
        </div>
      </div>
    </div>
  );
};
