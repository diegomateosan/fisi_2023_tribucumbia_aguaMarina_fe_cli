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
import { History } from "./pages/history/history";
import { FinalizarCompra } from "./pages/FinalizarCompra/finalizarCompra";
import { AdminPage } from "./pages/adminPage/AdminPage";
import { AddBookPage } from "./pages/addBookPage/AddBookPage";
import { EditBookPage } from "./pages/editBookPage/EditBookPage";
import { DetailsBookPage } from "./pages/detailsBookPage/DetailsBookPage";
import userService from "./services/user";
import { UserDetails } from "./components/User/User";
import { User, UserEdit } from "./pages/user/user";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const VerifyLoggedIn = async () => {
    const resultVerify = await userService.verify();

    console.log("Login state:" + resultVerify);

    resultVerify === true ? setUserLoggedIn(true) : setUserLoggedIn(false);
  };

  useEffect(() => {
    VerifyLoggedIn();
    console.log("estado:", userLoggedIn);
  }, [userLoggedIn]);

  return (
    <ShoppingCartProvider>
      <Routes>
        {!userLoggedIn && (
          <>
            <Route
              path="/brisasMarinas"
              element={
                <Home
                  userState={userLoggedIn}
                  handleauth={() => setUserLoggedIn(false)}
                  handleLogin={() => setUserLoggedIn(true)}
                />
              }
            />

            {/* <Route
              path="/orderdetails/:id"
              element={
                <OrderDetailsPage
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            /> */}
          </>
        )}

        {userLoggedIn && (
          <>
            <Route
              path="/brisasMarinas/usuario"
              element={
                <Home
                  userState={userLoggedIn}
                  handleauth={() => setUserLoggedIn(false)}
                  handleLogin={() => setUserLoggedIn(true)}
                />
              }
            />
            <Route
              path="/brisasMarinas/usuario/details"
              element={
                <User
                  userState={userLoggedIn}
                  handleauth={() => setUserLoggedIn(false)}
                  handleLogin={() => setUserLoggedIn(true)}
                />
              }
            />

            <Route
              path="/brisasMarinas/usuario/edit"
              element={
                <UserEdit
                  userState={userLoggedIn}
                  handleauth={() => setUserLoggedIn(false)}
                  handleLogin={() => setUserLoggedIn(true)}
                />
              }
            />

            {/* <Route
              path="/history"
              element={
                <History
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            />
            <Route
              path="/finalizarCompra"
              element={
                <FinalizarCompra
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            /> */}
            {/* >>>>>>> origin */}

            {/* <Route
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

            <Route
              path="/admin"
              element={
                <AdminPage
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            />

            <Route
              path="/addBook"
              element={
                <AddBookPage
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            />

            <Route
              path="/editBook/:id"
              element={
                <EditBookPage
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            />

            <Route
              path="/detailsBook/:id"
              element={
                <DetailsBookPage
                  userState={userLoggedIn}
                  setUserState={(txt: boolean) => setUserLoggedIn(txt)}
                  setUserValue={(txt: string) => setUserValue(txt)}
                  userValue={userValue}
                />
              }
            /> */}
          </>
        )}
        <Route
          path="*"
          element={
            <Navigate
              to={userLoggedIn ? "/brisasMarinas/Usuario" : "/brisasMarinas"}
            />
          }
        />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
