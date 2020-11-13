import React from "react";
import { Link } from "react-router-dom";
import vintedlogo from "../Header/VintedLogo.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = ({ token, setUser }) => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logoInput">
          <Link to="/">
            <div className="logo">
              <img className="vintedlogo" src={vintedlogo} alt="logo-vinted" />
            </div>
          </Link>
          <div className="input">
            <FontAwesomeIcon icon="search" />
            <input
              type="text"
              className="balise-input"
              placeholder="Recherche des articles"
            />
          </div>
        </div>

        <div className="boutton">
          <div className="boutton">
            {token ? (
              <button
                className="boutton-header-deconnecter"
                onClick={() => {
                  setUser(null);
                }}
              >
                Se déconnecter
              </button>
            ) : (
              <>
                <Link className="boutton-header" to="/signup">
                  S'inscrire
                </Link>
                <Link className="boutton-header" to="/signin">
                  Se connecter
                </Link>
              </>
            )}

            <button className="vendre">Vend tes articles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
