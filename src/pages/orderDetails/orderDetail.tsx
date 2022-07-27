import React from "react";
import { Footer } from "../../components/footer/footer";
import { NavBarDefault } from "../../components/navBar/navBar";
import Order from "../../components/order/order";

export const OrderDetailsPage = () => {
  return (
    <div className="app-container-home">
      <NavBarDefault></NavBarDefault>
      <Order></Order>
      <Footer></Footer>
    </div>
  );
};
