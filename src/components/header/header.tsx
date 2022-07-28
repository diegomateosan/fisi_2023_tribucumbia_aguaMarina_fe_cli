import React from "react";
import { BiCalendar } from "react-icons/bi";

export const HistoryHeader: React.FC<{}> = () => {
  return (
    <div className="app-container-history-header">
      <BiCalendar size={40} />
      <label>Historial de préstamos</label>
    </div>
  );
};
