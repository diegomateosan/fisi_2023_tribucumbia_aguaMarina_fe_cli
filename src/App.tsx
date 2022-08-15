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
// <<<<<<< HEAD
import { AdminPage } from "./pages/adminPage/AdminPage";
import { AddBookPage } from "./pages/addBookPage/AddBookPage";
import { EditBookPage } from "./pages/editBookPage/EditBookPage";
import { DetailsBookPage } from "./pages/detailsBookPage/DetailsBookPage";

// =======

// >>>>>>> origin
function App() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userValue, setUserValue] = useState("");

    return (
        <ShoppingCartProvider>
            <Routes>
                {!userLoggedIn && (
                    <>
                        <Route
                            path="/"
                            element={
                                <Home
                                    userState={userLoggedIn}
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />

                        <Route
                            path="/orderdetails/:id"
                            element={
                                <OrderDetailsPage
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />
                    </>
                )}

                {/* <<<<<<< HEAD */}

                {/* ======= */}
                {userLoggedIn && (
                    <>
                        <Route
                            path="/"
                            element={
                                <Home
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />
                        <Route
                            path="/history"
                            element={
                                <History
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />
                        <Route
                            path="/finalizarCompra"
                            element={
                                <FinalizarCompra
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />
                        {/* >>>>>>> origin */}

                        <Route
                            path="/orderdetails/:id"
                            element={
                                <OrderDetailsPage
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />

                        <Route
                            path="/admin"
                            element={
                                <AdminPage
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />

                        <Route
                            path="/addBook"
                            element={
                                <AddBookPage
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />

                        <Route
                            path="/editBook/:id"
                            element={
                                <EditBookPage
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                    userValue={userValue}
                                />
                            }
                        />

                        <Route
                            path="/detailsBook/:id"
                            element={
                                <DetailsBookPage
                                    userState={userLoggedIn}
                                    setUserState={(txt: boolean) =>
                                        setUserLoggedIn(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
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
        </ShoppingCartProvider>
    );
}

export default App;
