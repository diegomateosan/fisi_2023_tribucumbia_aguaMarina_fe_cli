import React, { useState, useEffect } from "react";
import { Footer } from "../../components/footer/footer";
import { NavBarDefault } from "../../components/navBar/navBar";
import Order from "../../components/order/order";
import { Book, books } from "../../components/listCards/cards";

export const OrderDetailsPage: React.FC<{
  userState: boolean;
  setUserState: (txt: boolean) => void;
  setUserValue: (txt: string) => void;
  userValue: string;
}> = ({ userState, setUserState, setUserValue, userValue }) => {
  const [booksSeller, setBooksSeller] = useState<Array<Book>>([]);

  useEffect(() => {
    setBooksSeller(books);
  }, []);
  return (
    <div className="app-container-detail">
      <NavBarDefault
        userState={userState}
        setUserState={(txt: boolean) => setUserState(txt)}
        setUserValue={(txt: string) => setUserValue(txt)}
        userValue={userValue}
      />
      <Order booksSeller={books}></Order>
      <Footer></Footer>
    </div>
  );
};
