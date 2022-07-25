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

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>{!userLoggedIn && <Route path="/" element={<Home />} />}</Routes>
    </BrowserRouter>
  );
}

export default App;
