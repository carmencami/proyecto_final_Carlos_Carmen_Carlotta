import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import Logonombre from "../../img/Logonombre.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg colornavbar">
      <div className="container-fluid ">
        <div className="navbar-brand">
          <Link to="/">
            <img
              className="m-r-10 logofoto"
              style={{ width: "175px" }}
              src={Logonombre}
              alt="logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler row"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-text">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!store.isAuthenticate ? (
              <div className="d-flex justify-content-end">
                <li className="nav-item">
                  <Link to="/">
                    {" "}
                    <button type="button" className="btn buttonhome">
                      INICIO{" "}
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <button type="button" className="btn buttonhome">
                      REGISTRATE{" "}
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">
                    <button type="button" className="btn buttonhome">
                      LOGIN{" "}
                    </button>
                  </Link>
                </li>
                <div>
                  <a className=" text-decoration-none" href=""></a>
                </div>
                <div className="nav-item">
                  {/* <Link to="/maps">
                {" "}
                <button
                  type="button"
                  className="btn btn-light bg-light buttonmaps"
                  className=""
                >
                  MAPS{" "}
                </button>
              </Link> */}
                </div>{" "}
              </div>
            ) : (
              <div>
                <div className="d-block justify-content-evenly">
                  <li className="nav-item">
                    <Link to="/">
                      {" "}
                      <button type="button" className="btn buttonhome">
                        INICIO{" "}
                      </button>
                    </Link>
                  </li>

                  <Link to="/editusuario">
                    <button type="button" className="btn buttonhome">
                      PERFIL{" "}
                    </button>
                  </Link>

                  <li className="nav-item">
                    {" "}
                    <button
                      onClick={() => {
                        actions.logout();
                        navigate("/");
                      }}
                      type="button"
                      className="btn buttonhome"
                    >
                      CERRAR SESIÓN{" "}
                    </button>
                  </li>

                  <div>
                    <a
                      className="link text-decoration-none colorinput"
                      href=""
                    ></a>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
