import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Props } from "../../../models/interfaces";
import { useNavigate } from "react-router-dom";
import { FcUndo } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import "../../form/addBook/addBookForm.css";
import "./detailsBook.css";

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
                    <FaRegEye className="icon-see-details" />
                    <h2>
                        DETALLES DEL LIBRO {book!.id}: {book!.title}
                    </h2>
                </div>
                <p className="header-addBookForm-desc">
                    Detalle completo del libro
                </p>

                <div className="body-addBookForm-form">
                    <div className="wrapper-details-general wrapper-details-general--bkcolor">
                        <h3 className="subtitle-details">
                            {" "}
                            Detalles del libro general
                        </h3>
                        <div className="body-addBook-details-book-general">
                            <div className="body-addBook-details-book-img">
                                <h3>Imagen</h3>
                                <img
                                    src={book!.image}
                                    alt="imagen"
                                    className="form__label--file-selected form__label--file-withoutHover"
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

                    <div className="wrapper-details-pyshical wrapper-details-pyshical--bkcolor">
                        <h3 className="subtitle-details">
                            Detalles físicos del libro
                        </h3>
                        <div className="body-addBook-details-book-physical">
                            <div className="form__group field form__group--center">
                                <h3>Ancho </h3>
                                <p>{book!.width} cm</p>
                            </div>

                            <div className="form__group field form__group--center">
                                <h3>Peso </h3>
                                <p>{book!.weight} kg</p>
                            </div>
                            <div className="form__group field form__group--center">
                                <h3>Altura </h3>
                                <p>{book!.height} cm</p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper-details-selling wrapper-details-selling--bkcolor">
                        <h3 className="subtitle-details">Detalles de venta</h3>
                        <div className="body-addBook-details-book-selling">
                            <div className="form__group field form__group--center">
                                <h3>Precio </h3>
                                <p>S/ {book!.price}</p>
                            </div>

                            {book!.percentDiscount && (
                                <div className="form__group field form__group--center">
                                    <h3>Porcentaje de Descuento </h3>
                                    <p>{book!.percentDiscount} %</p>
                                </div>
                            )}

                            <div className="form__group field form__group--center">
                                <h3>Stock </h3>
                                <p>50 unidades</p>
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
