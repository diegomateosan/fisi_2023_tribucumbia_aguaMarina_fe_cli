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
import { History } from "./pages/history/history";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userValue, setUserValue] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {!userLoggedIn && (
          <>
            <Route
              path="/"
              element={
                <Home
                  userState={userLoggedIn}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  userValue={userValue}
                />
              }
            />

            <Route
              path="/orderdetails/:id"
              element={
                <OrderDetailsPage
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            />
          </>
        )}

        {userLoggedIn && (
          <>
            <Route
              path="/"
              element={
                <Home
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            />
            <Route path="/history" element={<History />} />

            <Route
              path="/orderdetails/:id"
              element={
                <OrderDetailsPage
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            />
          </>
        )}
        <Route
          path="*"
          element={<Navigate to={userLoggedIn ? "/history" : "/"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
