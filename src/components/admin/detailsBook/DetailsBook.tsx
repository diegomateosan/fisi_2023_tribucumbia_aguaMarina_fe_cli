import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Props } from "../../../models/interfaces";
import { useNavigate } from "react-router-dom";
import { FcUndo } from "react-icons/fc";
import "../../form/addBook/addBookForm.css";

const DetailsBook: React.FC<Props> = ({ booksSeller }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const idNumber = Number(id);

    let book = booksSeller.find((book) => book.id === idNumber);

    return (
        <div className="app-container-addBook">
            <div className="wrapper-addBookForm">
                <div className="header-addBookForm">
                    <FcUndo
                        title="Regresar"
                        onClick={() => navigate(-1)}
                        className="goBackTo"
                    />
                    <h2>
                        DETALLES DEL LIBRO {book!.id}: {book!.title}
                    </h2>
                </div>
                <p className="header-addBookForm-desc">
                    Detalle completo del libro
                </p>

                <div className="body-addBookForm-form">
                    <div className="wrapper-details-general">
                        <h3>Detalles del libro general</h3>
                        <div className="body-addBook-details-book-general">
                            <div className="body-addBook-details-book-img">
                                <h3>Imagen</h3>
                                <img
                                    src={book!.image}
                                    alt="imagen"
                                    className="form__label--file-selected"
                                />
                            </div>
                            <div className="body-addBook-details-book-about">
                                <div className="form__group">
                                    <h3>Título </h3>
                                    <p>{book!.title}</p>
                                </div>

                                <div className="form__group">
                                    <h3>Descripción </h3>
                                    <p>{book!.description}</p>
                                </div>

                                <div className="body-addBook-details-book-grid">
                                    <div className="form__group field">
                                        <h3>Autor </h3>
                                        <p>{book!.author}</p>
                                    </div>
                                    <div className="form__group field">
                                        <h3>Editorial </h3>
                                        <p>{book!.editorial}</p>
                                    </div>
                                    <div className="form__group field">
                                        <h3>Año </h3>
                                        <p>{book!.anyo}</p>
                                    </div>

                                    <div className="form__group field">
                                        <h3>Idioma</h3>
                                        <p>{book!.language}</p>
                                    </div>

                                    <div className="form__group field">
                                        <h3>Páginas </h3>
                                        <p>{book!.pages}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper-details-pyshical">
                        <h3>Detalles físicos del libro</h3>
                        <div className="body-addBook-details-book-physical">
                            <div className="form__group field">
                                <h3>Ancho </h3>
                                <p>{book!.width}</p>
                            </div>

                            <div className="form__group field">
                                <h3>Peso </h3>
                                <p>{book!.weight}</p>
                            </div>
                            <div className="form__group field">
                                <h3>Altura </h3>
                                <p>{book!.height}</p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper-details-selling">
                        <h3>Detalles de venta</h3>
                        <div className="body-addBook-details-book-selling">
                            <div className="form__group field">
                                <h3>Precio </h3>
                                <p>{book!.price}</p>
                            </div>

                            {book!.percentDiscount && (
                                <div className="form__group field">
                                    <h3>Porcentaje de Descuento </h3>
                                    <p>{book!.percentDiscount}</p>
                                </div>
                            )}

                            <div className="form__group field">
                                <h3>Stock </h3>
                                <p>50</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  <div className="field-edit editBook-age">
                    <h3>Público </h3>
                    <p>{book!.age}</p>
                </div>

                <div className="field-edit editBook-sku">
                    <h3>SKU </h3>
                    <p>{book!.sku}</p>
                </div>

                <div className="field-edit editBook-isbn">
                    <h3>ISBN </h3>
                    <p>{book!.isbn}</p>
                </div> */}
            </div>
        </div>
    );
};

export default DetailsBook;
