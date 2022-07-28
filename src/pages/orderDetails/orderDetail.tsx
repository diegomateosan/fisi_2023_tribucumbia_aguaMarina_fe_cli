import React, { useState, useEffect } from "react";
import { Footer } from "../../components/footer/footer";
import { NavBarDefault } from "../../components/navBar/navBar";
import Order from "../../components/order/order";
import { Book, books } from "../../components/listCards/cards";

export const OrderDetailsPage = () => {
  const [booksSeller, setBooksSeller] = useState<Array<Book>>([]);

  useEffect(() => {
    setBooksSeller(books);
  }, []);
  return (
    <div className="app-container-detail">
      <NavBarDefault></NavBarDefault>
      <Order booksSeller={books}></Order>
      <Footer></Footer>
    </div>
  );
};
