import React, { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { Button, ButtonLogin } from "../button/button";
import { InputDefault, InputPassword } from "../input/input";
import { FcUndo } from "react-icons/fc";

import "./form.css";

export const FormLogin: React.FC<{
  state: boolean;
  handleChange: (text: boolean) => void;
}> = ({ state, handleChange }) => {
  const [InputValue, setInputValue] = useState("");
  const [InputState, setInputState] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [PasswordState, setPasswordState] = useState(false);

  const loginLogic = (password: boolean, email: boolean) => {
    if (password === false) {
      alert("Password no válida");
    }
    if (email === false) {
      alert("Correo no válido");
    }
    if (email === true && password === true) {
      alert("Sesión iniciada con éxito");
    }
  };

  return (
    <div className="app-container-login">
      <div className="app-container-tittleReturn">
        <div className="app-container-login-return">
          <FcUndo
            size={40}
            title="Cerrar Login"
            onClick={() => handleChange(false)}
          />
        </div>

        <div className="app-container-title">
          <h1>INICIAR SESIÓN</h1>
        </div>
      </div>

      <div className="app-container-form">
        <InputDefault
          estado={InputState}
          campo={InputValue}
          cambiarEstado={(txt: boolean) => setInputState(txt)}
          cambiarCampo={(txt: string) => setInputValue(txt)}
          tipo="text"
          label="Correo Electronico"
          placeholder="Ejemplo : alguien@gmail.com"
          leyendaError="Email no valido "
          expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />

        <InputPassword
          estado={PasswordState}
          campo={passwordValue}
          cambiarEstado={(txt: boolean) => setPasswordState(txt)}
          cambiarCampo={(txt: string) => setPasswordValue(txt)}
          label="Contraseña"
          placeholder="Debe contener entre 8 a 20 caracteres"
          leyendaError="Contraseña no válida"
          expresionRegular={/^.{8,25}$/}
        />

        <div className="app-container-label-register">
          <label>¿Aún no tienes una cuenta? </label>
          <a href="https://www.facebook.com">Registrate aquí</a>
        </div>
      </div>

      <div className="app-container-button-login">
        <ButtonLogin
          placeholder="INICIAR SESIÓN"
          handleClick={(txt1: boolean, txt2: boolean) => loginLogic(txt1, txt2)}
          password={PasswordState}
          email={InputState}
        />
      </div>
    </div>
  );
};
