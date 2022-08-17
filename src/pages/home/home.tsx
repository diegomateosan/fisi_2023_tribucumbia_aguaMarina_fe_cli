import React, { useState } from "react";

import "./home.css";

import { NavBarDefault } from "../../components/navBar/navBar";
import { Slide } from "../../components/slides/slide";
import Cards from "../../components/listCards/cards";
import { Footer } from "../../components/footer/footer";
import { Categories } from "../../components/categories/category";
import { DishesCard } from "../../components/dataCard/dataCard";

export const Home: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="app-container-home">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin()}
      />
      <Slide></Slide>
      <Categories></Categories>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};
