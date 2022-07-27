import React from "react";
import "./button.css";
export const Button: React.FC<{
  handleClick: () => void;
  placeholder: string;
}> = ({ handleClick, placeholder }) => {
  return (
    <div app-container-button>
      <button>{placeholder}</button>
    </div>
  );
};
