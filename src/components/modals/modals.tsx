import React from "react";
import { FormAddBook } from "../form/addBook/AddBookForm";
import { FormLogin, FormRegister } from "../form/form";

import "./modals.css";

export const ModalLogin: React.FC<{
  state: boolean;
  handleChange: (text: boolean) => void;
  handleRegister: (text: boolean) => void;
  handleAuth: () => void;
}> = ({ state, handleAuth, handleChange, handleRegister }) => {
  return (
    <>
      {state && (
        <div className="app-container-overlay">
          <FormLogin
            handleChange={(txt: boolean) => handleChange(txt)}
            handleRegister={(txt: boolean) => handleRegister(txt)}
            handleauth={() => handleAuth()}
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

/* export const ModalAddBook: React.FC<{
    state: boolean;
    handleChange: (text: boolean) => void;
}> = ({ state, handleChange }) => {
    return (
        <>
            {state && (
                <div className="app-container-overlay">
                    <FormAddBook
                        state={state}
                        handleChange={(txt: boolean) => handleChange(txt)}
                    />
                </div>
            )}
        </>
    );
}; */
