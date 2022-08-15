import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import "./order.css";
import { Props } from "../../models/interfaces";
import { calculatePriceWithDiscount } from "../card/card";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Order: React.FC<Props> = ({ booksSeller }) => {
    const { id } = useParams();
    const idNumber = Number(id);

    let book = booksSeller.find((book) => book.id === idNumber);

    const [isReadMoreShown, setReadMoreShown] = useState<boolean>(false);

    const {
        increaseCartQuantity,
        decreaseCartQuantity,
        getItemQuantity,
        openCart,
    } = useShoppingCart();

    const toggleBtn = () => {
        setReadMoreShown((prevState) => !prevState);
    };

    function openCartAndIncreaseQ(id: number) {
        increaseCartQuantity(id);
        openCart();
    }

    return (
        <main>
            <div className="wrapper">
                <div className="container-info">
                    <div className="container-info-img">
                        <img src={book!.image} alt="logo-libro" />
                    </div>
                    <div className="description-total">
                        <div className="description-total-title">
                            <div className="links">
                                <a id="a1" href={'"#"'}>
                                    {book!.percentDiscount}% DSTO
                                </a>
                                <a id="a2" href={'"#"'}>
                                    PREVENTA
                                </a>
                            </div>
                            <div className="info-autor">
                                <h1>{book!.title}</h1>
                                <p>{book!.author}</p>
                                <hr />
                            </div>
                        </div>

                        <div className="description-total-info">
                            <div className="left">
                                <li className="list">
                                    <div className="des-izq">SKU:</div>
                                    <div className="des-der">
                                        <span>{book!.sku}</span>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="des-izq">ISBN:</div>
                                    <div className="des-der">
                                        <span>{book!.isbn}</span>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="des-izq">Autor:</div>
                                    <div className="des-der">
                                        <span>{book!.author}</span>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="des-izq">Editorial:</div>
                                    <div className="des-der">
                                        <span>{book!.editorial}</span>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="des-izq">Año: </div>
                                    <div className="des-der">
                                        <span>{book!.anyo}</span>
                                    </div>
                                </li>
                                <li className="list">
                                    {book!.pages && (
                                        <>
                                            <div className="des-izq">
                                                Páginas:{" "}
                                            </div>
                                            <div className="des-der">
                                                <span>{book!.pages}</span>
                                            </div>
                                        </>
                                    )}
                                </li>
                                <li className="list">
                                    <div className="des-izq">Idioma: </div>
                                    <div className="des-der">
                                        <span>{book!.language}</span>
                                    </div>
                                </li>
                                <li className="list">
                                    {book!.weight && (
                                        <>
                                            <div className="des-izq">Peso:</div>
                                            <div className="des-der">
                                                <span>{book!.weight}Kg</span>
                                            </div>
                                        </>
                                    )}
                                </li>
                                <li className="list">
                                    {book!.width && (
                                        <>
                                            <div className="des-izq">
                                                Ancho:
                                            </div>
                                            <div className="des-der">
                                                <span>{book!.width}cm</span>
                                            </div>
                                        </>
                                    )}
                                </li>
                                <li className="list">
                                    {book!.height && (
                                        <>
                                            <div className="des-izq">Alto:</div>
                                            <div className="des-der">
                                                <span>{book!.height}cm</span>
                                            </div>
                                        </>
                                    )}
                                </li>
                                <li className="list">
                                    <div className="des-izq">Edad:</div>
                                    <div className="des-der">
                                        <span>{book!.age}</span>
                                    </div>
                                </li>
                            </div>

                            <div className="right">
                                <div className="right-contenido">
                                    {isReadMoreShown ? (
                                        <p> {book!.description}</p>
                                    ) : (
                                        <p>
                                            {book!.description.substring(
                                                0,
                                                500
                                            )}{" "}
                                            ...
                                        </p>
                                    )}
                                </div>
                                <button
                                    className="btn-read-more-less"
                                    onClick={toggleBtn}
                                >
                                    {isReadMoreShown
                                        ? "Mostar menos"
                                        : "Mostrar más"}
                                </button>

                                <div className="right-precio">
                                    <div className="precio-descuento">
                                        {book!.percentDiscount ? (
                                            <>
                                                <p className="price-before-discount">
                                                    S/ {book!.price}
                                                </p>
                                                <p className="price-detail">
                                                    S/{" "}
                                                    {calculatePriceWithDiscount(
                                                        book!.price,
                                                        book!.percentDiscount
                                                    )}
                                                </p>
                                            </>
                                        ) : (
                                            <p className="price-detail">
                                                S/ {book!.price}
                                            </p>
                                        )}
                                    </div>

                                    {book!.percentDiscount && (
                                        <div className="ahorra">
                                            <span></span>
                                            <a href={'"#"'}>
                                                AHORRAS: S/{" "}
                                                {(
                                                    book!.price -
                                                    calculatePriceWithDiscount(
                                                        book!.price,
                                                        book!.percentDiscount
                                                    )
                                                ).toFixed(2)}
                                            </a>
                                        </div>
                                    )}
                                </div>

                                <div className="comprar comprar-detail">
                                    {getItemQuantity(book!.id) > 0 ? (
                                        <>
                                            <div className="cart-item-info-quantity info-quantity--detail">
                                                <AiFillMinusCircle
                                                    className="cart-item-icon-deacrease icon-deacrease--detail"
                                                    title="Disminuir 1 libro"
                                                    onClick={() =>
                                                        decreaseCartQuantity(
                                                            book!.id
                                                        )
                                                    }
                                                ></AiFillMinusCircle>
                                                <span className="cart-item-quantity">
                                                    x{" "}
                                                    {getItemQuantity(book!.id)}
                                                </span>

                                                <AiFillPlusCircle
                                                    className="cart-item-icon-increase icon-increase--detail"
                                                    title="Aumentar 1 libro"
                                                    onClick={() =>
                                                        increaseCartQuantity(
                                                            book!.id
                                                        )
                                                    }
                                                ></AiFillPlusCircle>
                                            </div>
                                            <button
                                                className="comprar-detail-btn"
                                                onClick={openCart}
                                            >
                                                Añadir al Carrito
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            className="comprar-detail-btn"
                                            onClick={() =>
                                                openCartAndIncreaseQ(book!.id)
                                            }
                                        >
                                            Añadir al Carrito
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Order;
