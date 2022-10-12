import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import Fotopet from "../../img/Fotopet.png";

import "../../styles/index.css";

export const Home = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-light"></nav>

        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <img
                className="fotopett"
                style={{ width: "500px" }}
                src={Fotopet}
                alt="foto"
              />
            </div>
          </div>
          <div className="col-6 align-middle">
            <p className="textofondo">
              “Si sabes que regresas a casa, el viaje nunca es demasiado
              difícil.”
            </p>
          </div>
        </div>
      </div>

      {/* <div>
        <Footer />;
      </div> */}
    </>
  );
};
