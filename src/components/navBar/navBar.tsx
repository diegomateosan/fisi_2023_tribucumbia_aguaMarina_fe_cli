//Librerias
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Componentes
import { Searchbox } from "../searchBox/searchBox";
import { ModalLogin, ModalRegister } from "../modals/modals";

//Icons
import { BsPersonCircle, BsCart } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

//CSS
import "./navBar.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
import userService from "../../services/user";

export const NavBarDefault: React.FC<{
  handleauth: () => void;
  userState: boolean;
}> = ({ handleauth, userState }) => {
  const [modalStateLogin, SetModalStateLogin] = useState(false);
  const navigate = useNavigate();
  const [modalStateRegister, SetModalStateRegister] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const { openCart, cartQuantity } = useShoppingCart();

  const getProfile = async () => {
    const user = await userService.showName();
    setEmailValue(user.data.name);
  };

  React.useEffect(() => {
    getProfile();
  }, [emailValue]);

  const toComprar = () => {
    navigate("/finalizarCompra");
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
              <BsPersonCircle className="icon icon-user" />
              {userState ? (
                <p>Bienvenido, {emailValue}</p>
              ) : (
                <p onClick={() => SetModalStateLogin(true)}>
                  Iniciar Sesión / Registrarse
                </p>
              )}
            </div>

            <ModalLogin
              state={modalStateLogin}
              handleChange={SetModalStateLogin}
              handleRegister={SetModalStateRegister}
              handleAuth={() => handleauth()}
            />

            <ModalRegister
              state={modalStateLogin}
              handleChange={SetModalStateLogin}
              registerState={modalStateRegister}
              handleRegister={SetModalStateRegister}
            />
          </div>

          <div className="app-container-navBar-cart" onClick={openCart}>
            <div className="counter-orders">
              <BsCart className="icon icon-cart" />
              {cartQuantity > 0 && (
                <span className="cart-badge">{cartQuantity}</span>
              )}
            </div>
            <p>Carrito de Compras</p>
          </div>
        </div>
      </div>
    </div>
  );
};
