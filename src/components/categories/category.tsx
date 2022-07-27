import React from "react";
import "./category.css";

export const Categories: React.FC<{}> = ({}) => {
  return (
    <div className="app-container-categories">
      <h2>Explora nuestras categorías especiales</h2>
      <div className="wrapper-categories">
        <div className="wrapper-card">
          <div className="category-card">
            <img
              src="https://iberoperu.vtexassets.com/assets/vtex.file-manager-graphql/images/4ab1445c-c5cb-4277-9087-9ec26ae88b2c___387499f80a2bfa0ab91d559fad32bbca.gif"
              alt="Mangas"
            ></img>
            <h3 className="category-title">MANGAS</h3>
          </div>
        </div>

        <div className="wrapper-card">
          <div className="category-card">
            <img
              src="https://iberoperu.vtexassets.com/assets/vtex.file-manager-graphql/images/a1b3a7f9-3aa1-4f69-906e-cded47385ccf___c917fb3769fb9deffe273a6ca2f53da9.gif"
              alt="ENGLISH BOOKS"
            ></img>
            <h3 className="category-title">ENGLISH BOOKS</h3>
          </div>
        </div>

        <div className="wrapper-card">
          <div className="category-card">
            <img
              src="https://iberoperu.vtexassets.com/assets/vtex.file-manager-graphql/images/00d42c9c-d9e9-444d-b372-fba19926125d___a118f58aa039798aca52c547cfcc1e2d.gif"
              alt="Mangas"
            ></img>
            <h3 className="category-title">NETFLIX</h3>
          </div>
        </div>

        <div className="wrapper-card">
          <div className="category-card">
            <img
              src="https://iberoperu.vtexassets.com/assets/vtex.file-manager-graphql/images/68a3f296-85f2-420e-80c2-f13da7664ee7___0a4f5022010f17161ca5896734f31413.gif"
              alt="Mangas"
            ></img>
            <h3 className="category-title">WATTPAD</h3>
          </div>
        </div>

        <div className="wrapper-card">
          <div className="category-card">
            <img
              src="https://iberoperu.vtexassets.com/assets/vtex.file-manager-graphql/images/3d2603a9-f11c-48af-b0d7-773d0feed9e6___b366b58a525366b2f231feb27d9e4699.gif"
              alt="Mangas"
            ></img>
            <h3 className="category-title">TAROT</h3>
          </div>
        </div>

        <div className="wrapper-card">
          <div className="category-card">
            <img
              src="https://iberoperu.vtexassets.com/assets/vtex.file-manager-graphql/images/5a99d7d9-7d7c-4883-a53e-246591a78ba4___dae340cfdda79ee627ef2d4331a217a0.gif"
              alt="Mangas"
            ></img>
            <h3 className="category-title">PASATIEMPOS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
