import React from "react";

import "./home.css";

import { NavBarDefault } from "../../components/navBar/navBar";
import { Slide } from "../../components/slides/slide";
import Cards from "../../components/cards/cards";
import { Footer } from "../../components/footer/footer";
import { Categories } from "../../components/categories/category";

export const Home = () => {
  return (
    <div className="app-container-home">
      <NavBarDefault />
      <Slide></Slide>
      <Categories></Categories>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};
