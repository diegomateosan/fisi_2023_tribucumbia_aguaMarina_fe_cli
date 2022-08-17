import React from "react";
import "./footer.css";
import { FaCopyright, FaFacebookF } from "react-icons/fa";
import { BsBook, BsShieldLock, BsInstagram } from "react-icons/bs";

import { FiTwitter, FiYoutube, FiHelpCircle } from "react-icons/fi";
export const Footer: React.FC<{}> = ({}) => {
  return (
    <div className="app-main-container-footer">
      <div className="app-container-footer">
        <div className="partFooter partFooter-img1">
          <img
            src="https://drive.google.com/uc?export=view&id=1QoVJgFlsNnogzL_iuBPLZB0UA4I0L392"
            alt="Brisas Marinas Logo"
            title="Logo Brisas Marinas"
          />
        </div>

        <div className="partFooter">
          <h4>2022 Cevicheria Brisas Marina</h4>
          <FaCopyright className="i-copyright icon-foot"></FaCopyright>
        </div>

        <div className="partFooter">
          <h4>Libro de recomendaciones</h4>
          <BsBook className="icon icon-foot"></BsBook>
        </div>

        <div className="partFooter">
          <h4>Politica de privacidad</h4>
          <BsShieldLock className="icon icon-foot"></BsShieldLock>
        </div>

        <div className="partFooter">
          <h4>Redes sociales</h4>
          <FaFacebookF className="icon icon-foot icon-sm"></FaFacebookF>
          <BsInstagram className="icon icon-foot icon-sm"></BsInstagram>
          <FiTwitter className="icon icon-foot icon-sm"></FiTwitter>
          <FiYoutube className="icon icon-foot icon-sm"></FiYoutube>
        </div>

        <div className="partFooter">
          <h4>Ayuda</h4>
          <div className="ayuda">
            <FiHelpCircle className="icon icon-foot"></FiHelpCircle>
          </div>
        </div>
      </div>
    </div>
  );
};
