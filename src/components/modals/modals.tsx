import React from "react";
import { FormLogin } from "../form/form";

import "./modals.css";

export const ModalLogin: React.FC<{
  state: boolean;
  handleChange: (text: boolean) => void;
}> = ({ state, handleChange }) => {
  return (
    <>
      {state && (
        <div className="app-container-overlay">
          <FormLogin />
          <button onClick={() => handleChange(false)}>Cerrar</button>
        </div>
      )}
    </>
  );
};
