import React from "react";
import "./button.css";
export const Button: React.FC<{
  handleClick: () => void;
  placeholder: string;
}> = ({ handleClick, placeholder }) => {
  return (
    <div className="app-container-button">
      <button onClick={handleClick}>{placeholder}</button>
    </div>
  );
};

export const ButtonLogin: React.FC<{
  handleClick: (password: boolean, email: boolean) => void;
  password: boolean;
  email: boolean;
  placeholder: string;
}> = ({ handleClick, placeholder, email, password }) => {
  return (
    <div className="app-container-buttonLogin">
      <button onClick={() => handleClick(password, email)}>
        {placeholder}
      </button>
    </div>
  );
};


export const ButtonRegister: React.FC<{
  handleClick: (name: boolean ,lastname : boolean , dni : boolean, phone: boolean, password: boolean, email: boolean,terminos : boolean) => void;
  name: boolean ;
  lastname : boolean ;
  dni : boolean;
  phone: boolean;
  password: boolean;
  email: boolean;
  placeholder: string;
  terminos : boolean;
}> = ({ handleClick, placeholder, email, password, name,lastname,dni,phone,terminos }) => {
  return (
    <div className="app-container-buttonLogin">
      <button onClick={() => handleClick(name,lastname,dni,phone,password,email,terminos)}>
        {placeholder}
      </button>
    </div>
  );
};





