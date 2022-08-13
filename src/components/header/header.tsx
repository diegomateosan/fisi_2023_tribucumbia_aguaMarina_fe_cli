import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";

import "./header.css";
export const HistoryHeader: React.FC<{}> = () => {
  return (
    <div className="app-container-history-header">
      <BiCalendar size={30} />
      <label>Historial de préstamos</label>
    </div>
  );
};


export const ComprarHeader: React.FC<{}> = () => {
  return (
    <div className="app-container-history-header">
      <BsCartCheckFill size={30} />
      <label>Finalizar Compra</label>
    </div>
  
  
  );
};
