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

import { ToastContainer, toast } from 'react-toastify';


export const NavBarDefault: React.FC<{
    userState: boolean;
    setUserState: (txt: boolean) => void;
    setUserValue: (txt: string) => void;
    userValue: string;
}> = ({ userState, setUserState, setUserValue, userValue }) => {
<<<<<<< HEAD
    const [modalStateLogin, SetModalStateLogin] = useState(false);
    const navigate = useNavigate();
    const [modalStateRegister, SetModalStateRegister] = useState(false);
    const [emailValue, setEmailValue] = useState("");

    const { openCart, cartQuantity } = useShoppingCart();
=======
  const [modalStateLogin, SetModalStateLogin] = useState(false);
  const navigate = useNavigate();
  const [modalStateRegister, SetModalStateRegister] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const { openCart, cartQuantity } = useShoppingCart();
>>>>>>> origin

    const toHistory = () => {
        navigate("/history");
    };

<<<<<<< HEAD
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
=======
  const toComprar = () => {
    navigate("/finalizarCompra");
  };


  const MostrarState = () => {
    alert(userState);
  };

  const MostrarMensaje =() =>{
  }

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
>>>>>>> origin

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

                    <div
                        className="app-container-navBar-history"
                        onClick={toHistory}
                    >
                        <BiCalendar className="icon icon-history" />
                        <p>Historial de Préstamos</p>
                    </div>

                    <div
                        className="app-container-navBar-cart"
                        onClick={openCart}
                    >
                        <div className="counter-orders">
                            <BsCart className="icon icon-cart" />
                            {cartQuantity > 0 && (
                                <span className="cart-badge">
                                    {cartQuantity}
                                </span>
                            )}
                        </div>
                        <p>Carrito de Compras</p>
                    </div>

                    {userState && (
                        <p onClick={() => navigate("/admin")}>
                            Opciones de administración
                        </p>
                    )}
                </div>
            </div>
<<<<<<< HEAD
=======

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
            {userState ? (
              <p onClick={toComprar}>Historial de Préstamos</p>
            ) : (
              <p onClick={()=>alert("No se encuentra registrado")}>
                Historial de Préstamos
              </p>
            )}
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
>>>>>>> origin
        </div>
    );
};
