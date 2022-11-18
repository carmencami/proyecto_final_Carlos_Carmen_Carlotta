import React, { useContext, useEffect } from "react";
import { divnk, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/card_pet.css";

export function Cardperros(props) {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.pet_list();
  }, []);
  return (
    <div className="row">
      <div
        className="card card-pets"
        style={{
          width: "350px",
          // height: "18rem",
          // border: "0px",
        }}
<<<<<<< HEAD
      />
      <div className="card-body">
        <img src={props.pet.photo} className="card-img-top" alt="..." />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Nombre:</b> {props.pet.name}
          </li>
          <li className="list-group-item">
            <b>Edad:</b> {props.pet.years}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Raza:</b> {props.pet.race}
          </li>
          <li className="list-group-item">
            <b> Convive con:</b>
            {props.pet.convivencia}
          </li>
          <li className="list-group-item">
            <b>Sexo:</b>
            {props.pet.sexo}
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-warning text-align:center mt-3 butonmas"
        >
          <Link to={"/contacto"}>Contacta con la protectora</Link>{" "}
        </button>
=======
      >
        <div className="card-body carta-perro">
          <img
            src={props.pet.photo}
            className="card-img-top mt-2 fotocard"
            alt="..."
          />
          <div className="list-group list-group-flush mt-4">
            <div className="item-pet">
              <label>Nombre:</label> {props.pet.name}
            </div>
            <div className="item-pet">
              <label>Edad:</label> {props.pet.years}
            </div>
            <div className="item-pet">
              {" "}
              <label>Raza:</label> {props.pet.race}
            </div>
            <div className="item-pet">
              <label> Convive con:</label>
              {props.pet.convivencia}
            </div>
            <div className="item-pet">
              <label>Sexo:</label>
              {props.pet.sexo}
            </div>
            <div className="item-pet-l">
              <label>Dirección:</label> {props.pet.adresses}
            </div>
            <div className="mx-auto">
              <Link
                className="btn btn-warning boton-contacta text-white mt-3"
                to={"/contacto"}
              >
                ¡Contacta!
              </Link>
            </div>
          </div>
        </div>
>>>>>>> dev
      </div>
    </div>
  );
}
Cardperros.propTypes = {
  pet: propTypes.any,
};
