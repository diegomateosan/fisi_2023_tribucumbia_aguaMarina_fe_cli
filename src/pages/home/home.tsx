import React, { useState } from "react";

import "./home.css";

import { NavBarDefault } from "../../components/navBar/navBar";
import { Slide } from "../../components/slides/slide";
import Cards from "../../components/listCards/cards";
import { Footer } from "../../components/footer/footer";
import { Categories } from "../../components/categories/category";

export const Home: React.FC<{
  userState: boolean;
  handleauth: () => void;
}> = ({ userState, handleauth }) => {
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="app-container-home">
      <NavBarDefault userState={userState} handleauth={() => handleauth()} />
      <Slide></Slide>
      <Categories></Categories>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};
