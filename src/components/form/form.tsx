import React, { useState } from "react";

import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import {InputDefault} from "../input/input"; 
import "./form.css";

export const FormLogin: React.FC<{}> = ({}) => {
  const [clickedIn, setClickedIn] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [InputState, setInputState] = useState(false);
  
  const tooglePasswordVisibility = () => {
    if (clickedIn === false) {
      setClickedIn(true);
    } else {
      setClickedIn(false);
    }
  };

  return (
    <div className="app-container-login">
      <div className="app-container-title">
      <h1>INICIAR SESIÓN</h1>
      </div>
      
      <div className="app-container-logo">
        <img
          src="https://drive.google.com/uc?export=view&id=1dk1XPtnOFFozdM5gVrO5Jl7poi6hrZLi"
          alt="Villalibros logo"
          title="Logo Villalibros"
        />
      </div>

      <div className="app-container-form">

        <InputDefault
          estado={InputState}
          campo= {InputValue}

          cambiarEstado = {(txt: boolean)=>setInputState(txt)}
          cambiarCampo = {(txt: string)=>setInputValue(txt)}
          tipo="text"
          label ="Correo Electronico"
          placeholder ="Ejemplo : alguien@gmail.com"
          leyendaError="Email no valido "
          expresionRegular = {/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />
        
        
       
      </div>
    </div>
  );
};

 /*
        

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
        </div>*/