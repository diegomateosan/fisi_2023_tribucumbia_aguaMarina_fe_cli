import React from "react";

import { NavBarDefault } from "../../components/navBar/navBar";

import { HistoryHeader } from "../../components/header/header";

import { FilaDefault } from "../../components/tabla/tabla";

import { Footer } from "../../components/footer/footer";

import { Searchbox } from "../../components/searchBox/searchBox";

import "./history.css";
export const History: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  return (
    <div className="app-container-history">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin()}
      />

      <HistoryHeader />
      <div className="app-container-history-searchbox">
        <Searchbox
          placeholder="Filtrar por nombre, categoria, fecha, etc."
          handleSearch={() => alert("Buscado")}
        />
      </div>

      <div className="app-container-table">
        <FilaDefault />
      </div>
      <div className="app-container-History-footer">
        <Footer />
      </div>
    </div>
  );
};
