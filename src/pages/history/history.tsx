import React from "react";
import ReactTable from "react-table";

import { HistoryHeader } from "../../components/header/header";

export const History: React.FC<{}> = () => {
  return (
    <div className="app-container-history">
      <HistoryHeader />
    </div>
  );
};
