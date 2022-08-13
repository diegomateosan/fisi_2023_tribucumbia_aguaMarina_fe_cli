import React, { useState, useRef, useEffect } from "react";
import { FcUndo } from "react-icons/fc";
import "./addBookForm.css";

export const FormAddBook: React.FC<{
    state: boolean;
    handleChange: (text: boolean) => void;
}> = ({ state, handleChange }) => {
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
                <FcUndo
                    size={50}
                    title="Cerrar ventana"
                    className="volverHomeAdmin"
                    onClick={() => handleChange(false)}
                ></FcUndo>
                <h2>Añadir Libros</h2>
            </div>

            <div className="body-addBookForm">
                <form className="body-addBookForm-form">
                    <div className="name-book-field">
                        <label htmlFor="nameBook">Título del libro:</label>
                        <input type="text" name="nameBook" />
                    </div>
                    {/*  <div className="author-book-field">
                        <label htmlFor="nameAuthor">Nombre del autor:</label>
                        <input type="text" name="nameAuthor" />
                    </div> */}
                    <div className="price-book-field">
                        <label htmlFor="price">Precio</label>
                        <input type="number" name="price" />
                    </div>
                    <div className="discount-book-field">
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
                    </div>

                    {discount && (
                        <div className="discountpercent-book-field">
                            <label htmlFor="discountpercent">
                                Porcentaje de descuento
                            </label>
                            <input type="number" name="discountpercent" />
                            <span>%</span>
                        </div>
                    )}

                    <div className="stock-book-field">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" name="stock" />
                    </div>

                    <button className="btn-add-book">Añadir libro</button>
                </form>
            </div>
        </div>
    );
};
