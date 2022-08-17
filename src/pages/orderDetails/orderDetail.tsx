import React, { useState, useEffect } from "react";
import { Footer } from "../../components/footer/footer";
import { NavBarDefault } from "../../components/navBar/navBar";
import Order from "../../components/order/order";
import books from "../../models/books.json";

export const OrderDetailsPage: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  return (
    <div className="app-container-detail">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin}
      />
      <Order booksSeller={books}></Order>
      <Footer></Footer>
    </div>
  );
};
