import React from "react";
import "./footer.css";
import { FaCopyright, FaFacebookF } from "react-icons/fa";
import { BsBook, BsShieldLock, BsInstagram } from "react-icons/bs";

import { FiTwitter, FiYoutube, FiHelpCircle } from "react-icons/fi";
export const Footer: React.FC<{}> = ({}) => {
  return (
    <div className="app-main-container-footer">
      <div className="app-container-footer">
        <div className="partFooter-img1">
          <img
            src="https://drive.google.com/uc?export=view&id=1dk1XPtnOFFozdM5gVrO5Jl7poi6hrZLi"
            alt="Villalibros Logo"
            title="Logo Villalibros"
          />
        </div>

        <div className="partFooter">
          <h4>2022 Biblioteca Villalibros</h4>
          <FaCopyright className="i-copyright"></FaCopyright>
        </div>

        <div className="partFooter">
          <h4>Libro de recomendaciones</h4>
          <BsBook className="icon"></BsBook>
        </div>

        <div className="partFooter">
          <h4>Politica de privacidad</h4>
          <BsShieldLock className="icon"></BsShieldLock>
        </div>

        <div className="partFooter">
          <h4>Redes sociales</h4>
          <FaFacebookF className="icon icon-sm"></FaFacebookF>
          <BsInstagram className="icon icon-sm"></BsInstagram>
          <FiTwitter className="icon icon-sm"></FiTwitter>
          <FiYoutube className="icon icon-sm"></FiYoutube>
        </div>

        <div className="partFooter">
          <h4>Ayuda</h4>
          <div className="ayuda">
            <FiHelpCircle className="icon"></FiHelpCircle>
          </div>
        </div>
      </div>
    </div>
  );
};
