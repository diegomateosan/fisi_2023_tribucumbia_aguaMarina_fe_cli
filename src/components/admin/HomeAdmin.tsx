import React, { useState } from "react";

import "./homeAdmin.css";
import { Props } from "../card/card";
import { userInfo } from "os";
import { ModalAddBook } from "../modals/modals";

export const HomeAdmin: React.FC<Props> = ({ booksSeller }) => {
    /* const navigate = useNavigate(); */
    const [modalStateAddBook, setModalStateAddBook] = useState(false);
    return (
        <div className="app-container-home-admin">
            <div className="wrapper-home-admin">
                <h2>Bienvenido, Diego</h2>
                <div className="container-manage-books">
                    <h3>Administrar Libros</h3>
                    <button
                        className="btns-manage-add"
                        onClick={() => setModalStateAddBook(true)}
                    >
                        Añadir Libro
                    </button>
                    <ModalAddBook
                        state={modalStateAddBook}
                        handleChange={setModalStateAddBook}
                    />
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
                                        <td>{book.price}</td>
                                        <td>
                                            {book.percentDiscount
                                                ? `${book.percentDiscount}%`
                                                : "Sin descuento"}
                                        </td>

                                        <td>50</td>
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
                {/* TODO: REALIZAR LA TABLA PARA LOS USUARIOS Y CATEGORIAS */}
                <div className="container-manage-users"></div>
            </div>
        </div>
    );
};
