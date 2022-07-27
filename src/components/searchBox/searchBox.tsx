import React from "react";

import { BiSearchAlt } from "react-icons/bi";

import "./searchBox.css";

export const Searchbox: React.FC<{
  placeholder: string;
  handleSearch: () => void;
}> = ({ placeholder, handleSearch }) => {
  return (
    <div className="app-container-searchbox">
      <input
        type={"text"}
        placeholder={placeholder}
        onKeyPress={(event) => {
          if (event.code === "Enter") {
            handleSearch();
          }
        }}
      />

      <BiSearchAlt className="icon-search" size={20} />
    </div>
  );
};
