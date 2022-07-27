import React, { Fragment } from "react";
import "./order.css";

const Order = () => {
  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="container-info">
            <div className="container-info-img">
              <img
                src="https://iberoperu.vtexassets.com/arquivos/ids/265777-1200-1700?v=637925860185530000&width=1200&height=1700&aspect=true"
                alt="logo-libro"
              />
            </div>

            <div className="description-total">
              <div className="description-total-title">
                <div className="links">
                  <a id="a1" href={'"#"'}>
                    5% DSTO
                  </a>
                  <a id="a2" href={'"#"'}>
                    PREVENTA
                  </a>
                </div>
                <div className="info-autor">
                  <h1>UNA SOMBRA EN LAS BRASAS</h1>
                  <p>JENNIFER L. ARMENTROUT</p>
                  <hr />
                </div>
              </div>

              <div className="description-total-info">
                <div className="left">
                  <li className="list">
                    <div className="des-izq">SKU:</div>
                    <div className="des-der">
                      <span>383583</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">ISNM:</div>
                    <div className="des-der">
                      <span>9786124894404</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Autor:</div>
                    <div className="des-der">
                      <span>JENNIFER L. ARMENTROUT</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Editorial:</div>
                    <div className="des-der">
                      <span>PUCH</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Año: </div>
                    <div className="des-der">
                      <span>2022</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Páginas: </div>
                    <div className="des-der">
                      <span>800</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Idioma: </div>
                    <div className="des-der">
                      <span>Español</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Peso:</div>
                    <div className="des-der">
                      <span>0.84Kg</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Ancho:</div>
                    <div className="des-der">
                      <span>14cm</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Alto:</div>
                    <div className="des-der">
                      <span>21cm</span>
                    </div>
                  </li>
                  <li className="list">
                    <div className="des-izq">Edad:</div>
                    <div className="des-der">
                      <span>JUVENIL</span>
                    </div>
                  </li>
                </div>

                <div className="right">
                  <div className="right-contenido">
                    <p>
                      {" "}
                      La autora superventas del New York Times Jennifer L,
                      Armentrout regresa con el volumen uno de la nueva y
                      apasionante saga De carne y fuego, ambientada en el amado
                      universo de De sangre y cenizas, Nacida envuelta en el
                      velo de los Primigenios, una Doncella como prometieron los
                      Hados, el futuro de Seraphena Mierel nunca ha sido suyo,
                      Elegida antes de nacer para cumplir el trato desesperado
                      que aceptó su antepasado para salvar a su gente, Sera debe
                      dejar atrás su vida y ofrecerse al Primigenio de la Muerte
                      como su consorte.{" "}
                    </p>
                  </div>

                  <div className="right-precio">
                    <div className="precio-descuento">
                      <p>S/ 90.00</p>
                      <h3>S/ 72.00</h3>
                    </div>

                    <div className="ahorra">
                      <span></span>
                      <a href={'"#"'}>AHORRAS: S/ 18.00</a>
                    </div>
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
