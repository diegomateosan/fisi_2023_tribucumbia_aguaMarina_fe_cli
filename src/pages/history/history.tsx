import React from "react";

import { NavBarDefault } from "../../components/navBar/navBar";

import { HistoryHeader } from "../../components/header/header";


import "./history.css";
export const History: React.FC<{

  userState: boolean;
  setUserState: (txt: boolean) => void;
  setUserValue: (txt: string) => void; // corro
  userValue: string; // correo
 

}> = ({ userState, setUserState, setUserValue, userValue}) => {
  return (
    

    <div className="app-container-history">
      <NavBarDefault
        userState={userState}
        setUserState={(txt: boolean) => setUserState(txt)}
        setUserValue={(txt: string) => setUserValue(txt)}
        userValue={userValue}
      />
      <HistoryHeader />
     
    </div>
  );
};
