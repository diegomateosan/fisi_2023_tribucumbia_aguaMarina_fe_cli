import React from "react";
import { BiCalendar } from "react-icons/bi";

import "./header.css";
export const HistoryHeader: React.FC<{}> = () => {
  return (
    <div className="app-container-history-header">
      <BiCalendar size={30} />
      <label>Historial de préstamos</label>
    </div>
  );
};
