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
