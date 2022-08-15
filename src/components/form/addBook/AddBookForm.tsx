import React, { useState, useRef, useEffect } from "react";
import "./addBookForm.css";

export const FormAddBook: React.FC<{}> = () => {
    const [discount, setDiscount] = useState(false);
    const refDiscount = useRef<HTMLSelectElement>(null);

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

    return (
        <div className="app-container-addBook">
            <div className="header-addBookForm">
                <h2>Añadir Libros</h2>
            </div>

            <form className="body-addBookForm-form">
                <div className="form__group field">
                    <input
                        type="text"
                        id="nameBook"
                        className="form__field"
                        placeholder="Título"
                        required
                    />
                    <label htmlFor="nameBook" className="form__label">
                        Título
                    </label>
                </div>

                <div className="form__group field">
                    <input
                        type="text"
                        id="author"
                        placeholder="Autor"
                        className="form__field"
                        required
                    />
                    <label htmlFor="author" className="form__label">
                        Autor
                    </label>
                </div>

                <div className="form__group field">
                    <textarea
                        id="desc"
                        placeholder="Descripción"
                        className="form__field"
                        required
                    ></textarea>
                    <label htmlFor="desc" className="form__label">
                        Descripción
                    </label>
                </div>

                {/* TODO: CATEGORIAS */}
                {/* <div className="category-book-field">
                        <select
                            ref={refDiscount}
                            onClick={() =>
                                withDiscount(refDiscount.current!.value)
                            }
                        >
                            <option selected value="DISCOUNTOFF">
                                Sin Descuento
                            </option>
                            <option value="DISCOUNTON">Con Descuento</option>
                        </select>
                    </div> */}

                <div className="form__group field">
                    <input
                        type="text"
                        id="editorial"
                        placeholder="Editorial"
                        className="form__field"
                        required
                    />
                    <label htmlFor="editorial" className="form__label">
                        Editorial
                    </label>
                </div>

                {/* TOOD: IMAGEN */}

                <div className="form__group field">
                    <input
                        type="number"
                        id="desc"
                        placeholder="Año"
                        className="form__field"
                        required
                    ></input>
                    <label htmlFor="desc" className="form__label">
                        Año
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
                    <label htmlFor="pages" className="form__label">
                        Páginas
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
                    <label htmlFor="language" className="form__label">
                        Idioma
                    </label>
                </div>

                <div className="form__group field">
                    <input
                        type="number"
                        id="weight"
                        placeholder="Peso"
                        className="form__field"
                        required
                    ></input>
                    <label htmlFor="weight" className="form__label">
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
                    <label htmlFor="width" className="form__label">
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
                    <label htmlFor="height" className="form__label">
                        Altura
                    </label>
                </div>

                <div className="form__group field">
                    <input
                        type="number"
                        id="price"
                        placeholder="Precio"
                        className="form__field"
                        required
                    />
                    <label htmlFor="price" className="form__label">
                        Precio
                    </label>
                </div>
                <div className="form__group field">
                    <select
                        ref={refDiscount}
                        onClick={() => withDiscount(refDiscount.current!.value)}
                    >
                        <option value="DISCOUNTOFF">Sin Descuento</option>
                        <option value="DISCOUNTON">Con Descuento</option>
                    </select>
                    {discount && (
                        <div className="form__group field field-discount">
                            <input
                                type="number"
                                id="discountpercent"
                                placeholder="Porcentaje de descuento"
                                className="form__field"
                                required
                            />

                            <label
                                htmlFor="discountpercent"
                                className="form__label"
                            >
                                Porcentaje de descuento
                            </label>
                        </div>
                    )}
                </div>

                <div className="form__group field">
                    <input
                        type="number"
                        id="stock"
                        placeholder="Stock"
                        className="form__field"
                        required
                    />
                    <label htmlFor="stock" className="form__label">
                        Stock
                    </label>
                </div>

                <button className="btn-add-book">
                    <span>Añadir libro</span>
                </button>

                {/* <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
            </form>
        </div>
    );
};
