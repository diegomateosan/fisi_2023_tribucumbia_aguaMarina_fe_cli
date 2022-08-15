import React, { useState, useEffect } from "react";

import "./homeAdmin.css";

import { useNavigate } from "react-router-dom";
import { Book } from "../../listCards/cards";
import books from "../../../models/books.json";
import { User } from "../../../models/interfaces";
import users from "../../../models/user.json";

//icons
import { GiBlackBook } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

//Dialog
import Dialog from "../../dialog/Dialog";
import { useAsyncDebounce } from "react-table";

export const HomeAdmin: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [booksSeller, setBooksSeller] = useState<Array<Book>>([]);
    const [userAdmin, setUserAdmin] = useState<Array<User>>([]);

    useEffect(() => {
        setBooksSeller(books);
        setUserAdmin(users);
    }, []);

    const [showTaskDialog, setShowTaskDialog] = useState(false);

    const confirm = () => {
        console.log("confirm");
        setShowTaskDialog(false);
    };

    const cancel = () => {
        console.log("cancelar");
        setShowTaskDialog(false);
    };

    return (
        <div className="app-container-home-admin">
            <div className="wrapper-home-admin">
                <div className="wrapper-home-admin-header">
                    <h2>Bienvenido, Jordy</h2>
                </div>

                <div className="container-manage-books">
                    <div className="container-manage-books-header">
                        <GiBlackBook />
                        <h3>Gestionar Libros</h3>

                        <button
                            className="btns-manage-add"
                            onClick={() => navigate("/addBook")}
                        >
                            Añadir Libro
                        </button>
                    </div>

                    {/*   <ModalAddBook
                        state={modalStateAddBook}
                        handleChange={setModalStateAddBook}
                    /> */}
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Libro</th>
                                    <th>Título</th>
                                    <th>Precio</th>
                                    <th>Descuento</th>
                                    <th>Stock</th>
                                    <th>Administrar</th>
                                </tr>
                            </thead>

                            <tbody>
                                {booksSeller.map((book) => {
                                    return (
                                        <tr key={book.id}>
                                            <td>{book.id}</td>
                                            <td>{book.title}</td>
                                            <td>S/ {book.price}</td>
                                            <td>
                                                {book.percentDiscount
                                                    ? `${book.percentDiscount}%`
                                                    : "Sin descuento"}
                                            </td>

                                            <td>50</td>
                                            <td className="wrapper-btns-manage">
                                                <ul className="btns-manage">
                                                    <li
                                                        className="btns-manage-edit"
                                                        onClick={() =>
                                                            navigate(
                                                                `/editBook/${book.id}`
                                                            )
                                                        }
                                                    >
                                                        Editar
                                                    </li>

                                                    <li
                                                        className="btns-manage-detail"
                                                        onClick={() =>
                                                            navigate(
                                                                `/detailsBook/${book.id}`
                                                            )
                                                        }
                                                    >
                                                        Detalles
                                                    </li>
                                                    <li
                                                        className="btns-manage-delete"
                                                        onClick={() =>
                                                            setShowTaskDialog(
                                                                true
                                                            )
                                                        }
                                                    >
                                                        Eliminar
                                                    </li>
                                                    <Dialog
                                                        show={showTaskDialog}
                                                        title="Eliminar libro"
                                                        description="¿Estás segurto de eliminar este libro?"
                                                        confirm={confirm}
                                                        cancel={cancel}
                                                    />
                                                </ul>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* TABLA PARA LOS USUARIOS  */}
                <div className="container-manage-users">
                    <div className="container-manage-users-header">
                        <FaUsers />
                        <h3>Gestionar Usuarios Administradores</h3>
                        <button
                            className="btns-manage-add"
                            onClick={() => navigate("/addBook")}
                        >
                            Añadir Usuario Admin
                        </button>
                    </div>

                    {/*   <ModalAddBook
                        state={modalStateAddBook}
                        handleChange={setModalStateAddBook}
                    /> */}
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Admin</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Teléfono</th>
                                    <th>DNI</th>
                                    <th>Correo</th>
                                    <th>Administrar</th>
                                </tr>
                            </thead>

                            <tbody>
                                {userAdmin.map((user) => {
                                    return (
                                        <tr key={user.idcliente}>
                                            <td>{user.idcliente}</td>
                                            <td>{user.nombre}</td>
                                            <td>{user.apellido}</td>
                                            <td>{user.telefono}</td>
                                            <td>{user.dni}</td>

                                            <td>{user.correo}</td>
                                            <td className="wrapper-btns-manage">
                                                <ul className="btns-manage">
                                                    <li className="btns-manage-edit">
                                                        Editar
                                                    </li>

                                                    <li className="btns-manage-detail">
                                                        Detalles
                                                    </li>
                                                    <li className="btns-manage-delete">
                                                        Eliminar
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
