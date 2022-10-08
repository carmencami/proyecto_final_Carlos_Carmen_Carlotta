import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/protectoralogin.css"
import {Maps} from "../component/maps";
import "../../styles/index.css";
import Kodulogo from "../../img/Kodulogo.png"

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light bg-warning">
       <img
                className="logo"
                src={Kodulogo}
                alt="logo"
              />
      <div className="container">
        {!store.isAuthenticate ? (
          <div className="d-flex justify-content-evenly">
            <div className="align-items-start">
              <Link to="/login">
                {" "}
                <button
                  onClick={""}
                  type="button"
                 
                  class="btn btn-light bg-light"
                >
                  INICIO{" "}
                </button>
              </Link>
            </div>
            
            <div  className="align-items-center">
              <Link to="/register">
                <button
                 
                  type="button"
                  className="buttonregi"
                  class="btn btn-light bg-light"
                >
                  REGISTRATE{" "}
                </button>
              </Link>
            </div>
            <div className="">
              <a className="link-dark text-decoration-none" href=""></a>
            </div>
            <div className="align-items-end">
              <Link to="/maps">
                {" "}
                <button
                  onClick="location.href''"
                  type="button"
                  className="buttonmaps"
                  class="btn btn-light bg-light">
                  MAPS{" "}

                </button>
              </Link>
            </div>{" "}
          </div>


        ) : (
          <button
            onClick={() => {
              actions.logout();
              navigate("/");
            }}
            type="button"
            className="buttonlogout"
            class="btn btn-light bg-light"
          >
            Cierre de sesion{" "}
          </button>
        )}
      </div>
    </nav>
  );
};

