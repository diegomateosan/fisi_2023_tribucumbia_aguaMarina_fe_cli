import React, { useState } from "react";

import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";

import "./form.css";

export const FormLogin: React.FC<{}> = ({}) => {
  const [clickedIn, setClickedIn] = useState(false);

  const tooglePasswordVisibility = () => {
    if (clickedIn === false) {
      setClickedIn(true);
    } else {
      setClickedIn(false);
    }
  };

  return (
    <div className="app-container-login">
      <h1>Iniciar sesión</h1>

      <div className="app-container-logo">
        <img
          src="https://drive.google.com/uc?export=view&id=1dk1XPtnOFFozdM5gVrO5Jl7poi6hrZLi"
          alt="Villalibros logo"
          title="Logo Villalibros"
        />
      </div>

      <div className="app-container-form">
        <div className="app-container-email">
          <div className="app-container-email-label">
            <AiOutlineMail size={25} />
            <label>Correo electrónico</label>
          </div>
          <input type="text" placeholder="Ejemplo: alguien@example.com" />
        </div>

        <div className="app-container-password">
          <div className="app-container-password-label">
            <BsFillShieldLockFill size={25} />
            <label>Contraseña</label>
          </div>
          <div className="app-container-password-input">
            <input
              type={clickedIn ? "text" : "password"}
              placeholder="*******"
            />
            {clickedIn ? (
              <AiFillEye size={22} onClick={tooglePasswordVisibility} />
            ) : (
              <AiFillEyeInvisible
                size={22}
                onClick={tooglePasswordVisibility}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
