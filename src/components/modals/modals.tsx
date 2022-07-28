import React from "react";
import { FormLogin, FormRegister } from "../form/form";

import { FcUndo } from "react-icons/fc";

import "./modals.css";

export const ModalLogin: React.FC<{
  state: boolean;
  handleChange: (text: boolean) => void;
  registerState: boolean;
  handleRegister: (text: boolean) => void;
}> = ({ state, handleChange, registerState, handleRegister }) => {
  return (
    <>
      {state && (
        <div className="app-container-overlay">
          <FormLogin
            state={state}
            handleChange={(txt: boolean) => handleChange(txt)}
            registerState={registerState}
            handleRegister={(txt: boolean) => handleRegister(txt)}
          />
        </div>
      )}
    </>
  );
};

export const ModalRegister: React.FC<{
  state: boolean;
  handleChange: (text: boolean) => void;
  registerState: boolean;
  handleRegister: (text: boolean) => void;
}> = ({ state, handleChange, registerState, handleRegister }) => {
  return (
    <>
      {registerState && (
        <div className="app-container-overlay">
          <FormRegister
            state={state}
            handleChange={(txt: boolean) => handleChange(txt)}
            registerState={registerState}
            handleRegister={(txt: boolean) => handleRegister(txt)}
          />
        </div>
      )}
    </>
  );
};
