import React, { useState, useRef, useEffect } from "react";
import { FcUndo, FcCompactCamera } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import "./addBookForm.css";

export const FormAddBook: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [discount, setDiscount] = useState(false);
    const [styleImg, setStyleImg] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>();

    function withDiscount(discountBool: string) {
        switch (discountBool) {
            case "DISCOUNTOFF":
                setDiscount(false);
                break;
            case "DISCOUNTON":
                setDiscount(true);
                break;

            default:
                break;
        }
    }

    const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
        setStyleImg(true);
    };

    const removeSelectedImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSelectedImage(null);
        setStyleImg(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alert("Libro Registrado Correctamente");
    };

    return (
        <div className="app-container-addBook">
            <div className="wrapper-addBookForm">
                <div className="header-addBookForm">
                    <FcUndo
                        title="Regresar"
                        onClick={() => navigate(-1)}
                        className="goBackTo"
                    />
                    <h2>Añadir Libros</h2>
                </div>
                <p className="header-addBookForm-desc">
                    Rellene el formulario con los datos del libro que desea
                    agregar
                </p>

                <form className="form-addBook">
                    <div className="body-addBookForm-form">
                        <div className="wrapper-details-general">
                            <h3>Detalles del libro general</h3>
                            <div className="body-addBook-details-book-general">
                                <div className="body-addBook-details-book-img">
                                    <div className="form__group--file field">
                                        <label
                                            htmlFor="imgBook"
                                            className={
                                                styleImg
                                                    ? "form__label--file-selected"
                                                    : "form__label--file"
                                            }
                                        >
                                            <input
                                                type="file"
                                                id="imgBook"
                                                className="form__field--file"
                                                placeholder="Insertar Imagen"
                                                required
                                                onChange={(e) => imageChange(e)}
                                            />
                                            Insertar Imagen
                                            <FcCompactCamera />
                                        </label>
                                        {selectedImage && (
                                            <div className="cointainer-preview-img">
                                                <img
                                                    src={URL.createObjectURL(
                                                        selectedImage
                                                    )}
                                                    alt="Thumb"
                                                    className="img-addBook"
                                                />
                                                <button
                                                    onClick={
                                                        removeSelectedImage
                                                    }
                                                >
                                                    Eliminar imagen
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="body-addBook-details-book-about">
                                    <div className="form__group field">
                                        <input
                                            type="text"
                                            id="nameBook"
                                            className="form__field"
                                            placeholder="Título"
                                            required
                                        />
                                        <label
                                            htmlFor="nameBook"
                                            className="form__label"
                                        >
                                            Título
                                        </label>
                                    </div>

                                    <div className="form__group field">
                                        <textarea
                                            id="desc"
                                            placeholder="Descripción"
                                            className="form__field"
                                            required
                                        ></textarea>
                                        <label
                                            htmlFor="desc"
                                            className="form__label"
                                        >
                                            Descripción
                                        </label>
                                    </div>

                                    <div className="body-addBook-details-book-grid">
                                        <div className="form__group field">
                                            <input
                                                type="text"
                                                id="author"
                                                placeholder="Autor"
                                                className="form__field"
                                                required
                                            />
                                            <label
                                                htmlFor="author"
                                                className="form__label"
                                            >
                                                Autor
                                            </label>
                                        </div>
                                        <div className="form__group field">
                                            <input
                                                type="text"
                                                id="editorial"
                                                placeholder="Editorial"
                                                className="form__field"
                                                required
                                            />
                                            <label
                                                htmlFor="editorial"
                                                className="form__label"
                                            >
                                                Editorial
                                            </label>
                                        </div>
                                        <div className="form__group field">
                                            <input
                                                type="number"
                                                id="anyo"
                                                placeholder="Año"
                                                className="form__field"
                                                required
                                            ></input>
                                            <label
                                                htmlFor="anyo"
                                                className="form__label"
                                            >
                                                Año
                                            </label>
                                        </div>
                                        <div className="form__group field">
                                            <input
                                                type="text"
                                                id="language"
                                                placeholder="Idioma"
                                                className="form__field"
                                                required
                                            ></input>
                                            <label
                                                htmlFor="language"
                                                className="form__label"
                                            >
                                                Idioma
                                            </label>
                                        </div>
                                        <div className="form__group field">
                                            <input
                                                type="number"
                                                id="pages"
                                                placeholder="Páginas"
                                                className="form__field"
                                                required
                                            ></input>
                                            <label
                                                htmlFor="pages"
                                                className="form__label"
                                            >
                                                Páginas
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-details-pyshical">
                            <h3>Detalles físicos del libro</h3>
                            <div className="body-addBook-details-book-physical">
                                <div className="form__group field">
                                    <input
                                        type="number"
                                        id="weight"
                                        placeholder="Peso"
                                        className="form__field"
                                        required
                                    ></input>
                                    <label
                                        htmlFor="weight"
                                        className="form__label"
                                    >
                                        Peso
                                    </label>
                                </div>
                                <div className="form__group field">
                                    <input
                                        type="number"
                                        id="width"
                                        placeholder="Ancho"
                                        className="form__field"
                                        required
                                    ></input>
                                    <label
                                        htmlFor="width"
                                        className="form__label"
                                    >
                                        Ancho
                                    </label>
                                </div>
                                <div className="form__group field">
                                    <input
                                        type="number"
                                        id="height"
                                        placeholder="Altura"
                                        className="form__field"
                                        required
                                    ></input>
                                    <label
                                        htmlFor="height"
                                        className="form__label"
                                    >
                                        Altura
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-details-selling">
                            <h3>Detalles de venta</h3>
                            <div className="body-addBook-details-book-selling">
                                <div className="form__group field">
                                    <input
                                        type="number"
                                        id="price"
                                        placeholder="Precio"
                                        className="form__field"
                                        required
                                    />
                                    <label
                                        htmlFor="price"
                                        className="form__label"
                                    >
                                        Precio
                                    </label>
                                </div>
                                <div className="form__group field">
                                    <input
                                        type="number"
                                        id="discountpercent"
                                        placeholder="Porcentaje de descuento"
                                        className="form__field"
                                    />

                                    <label
                                        htmlFor="discountpercent"
                                        className="form__label"
                                    >
                                        Porcentaje de descuento
                                    </label>
                                </div>

                                <div className="form__group field">
                                    <input
                                        type="number"
                                        id="stock"
                                        placeholder="Stock"
                                        className="form__field"
                                        required
                                    />
                                    <label
                                        htmlFor="stock"
                                        className="form__label"
                                    >
                                        Stock
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn-add-book"
                            onClick={(e) => {
                                handleClick(e);
                            }}
                        >
                            <span>Añadir libro</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
