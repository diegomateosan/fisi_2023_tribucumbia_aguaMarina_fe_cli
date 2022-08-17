//Librerias
import React, { useEffect, useState } from "react";
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
import Dropdown from "../dropdown/Dropdown";

export const NavBarDefault: React.FC<{
  handleauth: () => void;
  handleLogin: () => void;
  userState: boolean;
}> = ({ handleauth, userState, handleLogin }) => {
  const [modalStateLogin, SetModalStateLogin] = useState(false);
  const navigate = useNavigate();
  const [modalStateRegister, SetModalStateRegister] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const { openCart, cartQuantity } = useShoppingCart();

  const getProfile = async () => {
    if (userState === true) {
      const user = await userService.showName();
      console.log(user);
      setEmailValue(user.data.email);
    }
  };

  useEffect(() => {
    getProfile();
  }, [userState]);

  const toComprar = () => {
    navigate("/finalizarCompra");
  };

  return (
    <div className="app-container-navBar-header">
      <div className="app-container-navBar">
        <div className="app-container-navBar-Logo">
          <img
            src="https://drive.google.com/uc?export=view&id=1QoVJgFlsNnogzL_iuBPLZB0UA4I0L392"
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
                                <Dropdown
                                    title={`Bienvenido, ${emailValue}`}
                                    items={[
                                        "Mi Historial",
                                        "Mi Usuario",
                                        "Cerrar Sesión",
                                    ]}
                                />
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
              handleLogin={() => handleLogin()}
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
