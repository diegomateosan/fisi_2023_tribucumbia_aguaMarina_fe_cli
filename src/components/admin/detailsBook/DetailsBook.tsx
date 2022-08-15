import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Props } from "../../../models/interfaces";

const DetailsBook: React.FC<Props> = ({ booksSeller }) => {
    const { id } = useParams();
    const idNumber = Number(id);

    let book = booksSeller.find((book) => book.id === idNumber);

    return (
        <div className="app-container-editBook">
            <div className="wrapper-editBook">
                <div className="editBook-title">
                    <h2>
                        DETALLES DEL LIBRO {book!.id}: {book!.title}
                    </h2>
                </div>
                <div className="field-edit editBook-img">
                    <h3>Imagen</h3>
                    <img src={book!.image} alt="imagen" />
                </div>

                <div className="field-edit editBook-title">
                    <h3>Título </h3>
                    <p>{book!.title}</p>
                </div>

                <div className="field-edit editBook-description">
                    <h3>Descripción </h3>
                    <p>{book!.description}</p>
                </div>

                <div className="field-edit editBook-author">
                    <h3>Autor </h3>
                    <p>{book!.author}</p>
                </div>

                <div className="field-edit editBook-editorial">
                    <h3>Editorial </h3>
                    <p>{book!.editorial}</p>
                </div>

                <div className="field-edit editBook-anyo">
                    <h3>Año </h3>
                    <p>{book!.anyo}</p>
                </div>

                <div className="field-edit editBook-pages">
                    <h3>Páginas </h3>
                    <p>{book!.pages}</p>
                </div>

                <div className="field-edit editBook-weight">
                    <h3>Peso </h3>
                    <p>{book!.weight}</p>
                </div>

                <div className="field-edit editBook-width">
                    <h3>Ancho </h3>
                    <p>{book!.width}</p>
                </div>

                <div className="field-edit editBook-height">
                    <h3>Altura </h3>
                    <p>{book!.height}</p>
                </div>

                <div className="field-edit editBook-age">
                    <h3>Público </h3>
                    <p>{book!.age}</p>
                </div>

                <div className="field-edit editBook-price">
                    <h3>Precio </h3>
                    <p>{book!.price}</p>
                </div>

                <div className="field-edit editBook-discount">
                    <h3>Porcentaje de Descuento </h3>
                    <p>{book!.percentDiscount}</p>
                </div>

                <div className="field-edit editBook-sku">
                    <h3>SKU </h3>
                    <p>{book!.sku}</p>
                </div>

                <div className="field-edit editBook-isbn">
                    <h3>ISBN </h3>
                    <p>{book!.isbn}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsBook;
