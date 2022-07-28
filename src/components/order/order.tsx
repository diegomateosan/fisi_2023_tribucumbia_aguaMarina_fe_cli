import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import "./order.css";
import { Props } from "../card/card";
import { calculatePriceWithDiscount } from "../card/card";

const Order: React.FC<Props> = ({ booksSeller }) => {
  const { id } = useParams();
  const idNumber = Number(id);
  let book;
  book = booksSeller.find((book) => book.id === idNumber);

  const [isReadMoreShown, setReadMoreShown] = useState<boolean>(false);

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  return (
    <Fragment>
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
                        <div className="des-izq">Páginas: </div>
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
                        <div className="des-izq">Ancho:</div>
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
                      <p>{book!.description.substring(0, 500)} ...</p>
                    )}
                  </div>
                  <button className="btn-read-more-less" onClick={toggleBtn}>
                    {isReadMoreShown ? "Mostar menos" : "Mostrar más"}
                  </button>

                  <div className="right-precio">
                    <div className="precio-descuento">
                      {book!.percentDiscount ? (
                        <>
                          <p className="price-before-discount">
                            S/ {book!.price}
                          </p>
                          <h3 className="price">
                            S/{" "}
                            {calculatePriceWithDiscount(
                              book!.price,
                              book!.percentDiscount
                            )}
                          </h3>
                        </>
                      ) : (
                        <p className="price">S/ {book!.price}</p>
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

                  <div className="comprar">
                    <input type="number" min={"0"} max={"5"} />
                    <button>COMPRAR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Order;
