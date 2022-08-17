import React, { useState } from "react";

import "./user.css";


import { NavBarDefault } from "../../components/navBar/navBar";
import { Slide } from "../../components/slides/slide";
import { Footer } from "../../components/footer/footer";
import {EditUser, UserDetails} from "../../components/User/User";
import { UserDefault } from "../../entities/User";


export const User: React.FC<{
    userState: boolean;
    handleauth: () => void;
    handleLogin: () => void;
  }> = ({ userState, handleauth,handleLogin }) => {
    const [loginState, setLoginState] = useState(false);
  
    return (
      <div className="app-container-home">
      <NavBarDefault userState={userState} 
      handleauth={() => handleauth()}
       handleLogin={()=>handleLogin()} 
      
       />
        <UserDetails/>


        <Footer></Footer>
      </div>
    );
  };
  
  export const UserEdit: React.FC<{
    userState: boolean;
    handleauth: () => void;
    handleLogin: () => void;
  }> = ({ userState, handleauth,handleLogin }) => {


   
    return (
      <div className="app-container-home">
      <NavBarDefault userState={userState} 
      handleauth={() => handleauth()}
       handleLogin={()=>handleLogin()} 
      
       /> 
        <EditUser />      

        <Footer></Footer>
      </div>
    );
  };
  