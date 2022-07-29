import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

import { NavBarDefault } from "./components/navBar/navBar";
import { Home } from "./pages/home/home";
import { ModalLogin } from "./components/modals/modals";
import { Footer } from "./components/footer/footer";
import { Categories } from "./components/categories/category";
import { OrderDetailsPage } from "./pages/orderDetails/orderDetail";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";
import ShoppingCart from "./components/shoppingCart/shoppingCart";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          {!userLoggedIn && <Route path="/" element={<Home />} />}

          {!userLoggedIn && (
            <Route path="/orderdetails/:id" element={<OrderDetailsPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
