import React, { Fragment } from "react";
import "./cards.css";

const Cards = () => {
  return (
    <Fragment>
      <main>
        <div className="secc">
          <div className="container">
            <h1>Los más destacados</h1>
            <div className="container-cards">
              <div className="card">
                <div className="title-prevent">
                  <a href={"'#'"}>Preventa</a>
                </div>
                <img
                  src="https://centrogabo.org/sites/default/files/100_anos_172.jpg"
                  alt="card"
                ></img>

                <div className="description">
                  <p>Gabriel Garcia Marquez</p>
                  <h3>Cien años de soledad</h3>
                </div>

                <div className="card-bot">
                  <div className="precio">
                    <h3>S/ 75.00</h3>
                  </div>
                  <div className="descuento"></div>
                </div>
              </div>

              <div className="card">
                <div className="title-prevent">
                  <a href={"'#'"}>Preventa</a>
                </div>

                <img
                  src="https://centrogabo.org/sites/default/files/100_anos_172.jpg"
                  alt="card"
                ></img>

                <div className="description">
                  <p>Gabriel Garcia Marquez</p>
                  <h3>Cien años de soledad</h3>
                </div>

                <div className="card-bot">
                  <div className="precio">
                    <p>S/ 120.00</p>
                    <h3>S/ 75.00</h3>
                  </div>
                  <div className="descuento">
                    <p>5%</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="title-prevent">
                  <a href={"'#'"}>Preventa</a>
                </div>

                <img
                  src="https://centrogabo.org/sites/default/files/100_anos_172.jpg"
                  alt="card"
                ></img>

                <div className="description">
                  <p>Gabriel Garcia Marquez</p>
                  <h3>Cien años de soledad</h3>
                </div>

                <div className="card-bot">
                  <div className="precio">
                    <h3>S/ 75.00</h3>
                  </div>
                  <div className="descuento"></div>
                </div>
              </div>
              <div className="card">
                <div className="title-prevent">
                  <a href={"'#'"}>Preventa</a>
                </div>

                <img
                  src="https://centrogabo.org/sites/default/files/100_anos_172.jpg"
                  alt="card"
                ></img>

                <div className="description">
                  <p>Gabriel Garcia Marquez</p>
                  <h3>Cien años de soledad</h3>
                </div>

                <div className="card-bot">
                  <div className="precio">
                    <p>S/ 120.00</p>
                    <h3>S/ 75.00</h3>
                  </div>
                  <div className="descuento">
                    <p>5%</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="title-prevent">
                  <a href={"'#'"}>Preventa</a>
                </div>

                <img
                  src="https://centrogabo.org/sites/default/files/100_anos_172.jpg"
                  alt="card"
                ></img>

                <div className="description">
                  <p>Gabriel Garcia Marquez</p>
                  <h3>Cien años de soledad</h3>
                </div>

                <div className="card-bot">
                  <div className="precio">
                    <p>S/ 120.00</p>
                    <h3>S/ 75.00</h3>
                  </div>
                  <div className="descuento">
                    <p>5%</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="title-prevent">
                  <a href={"'#'"}>Preventa</a>
                </div>

                <img
                  src="https://centrogabo.org/sites/default/files/100_anos_172.jpg"
                  alt="card"
                ></img>

                <div className="description">
                  <p>Gabriel Garcia Marquez</p>
                  <h3>Cien años de soledad</h3>
                </div>

                <div className="card-bot">
                  <div className="precio">
                    <p>S/ 120.00</p>
                    <h3>S/ 75.00</h3>
                  </div>
                  <div className="descuento">
                    <p>5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ************************************************* */}
      </main>
    </Fragment>
  );
};

export default Cards;
